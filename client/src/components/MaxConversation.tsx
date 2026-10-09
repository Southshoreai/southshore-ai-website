import React, { FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import { ArrowUpRight, Bot, ChevronRight, LoaderCircle, Send } from 'lucide-react';
import { Link } from 'wouter';
import { MAX_INITIAL_MESSAGE, MAX_STARTER_CHOICES } from '@/data/maxStarterChoices';

type Speaker = 'max' | 'visitor';

type MaxMessage = {
  id: string;
  speaker: Speaker;
  content: string;
};

type MaxConversationProps = {
  variant: 'panel' | 'page';
  onClose?: () => void;
};

const STORAGE_KEY = 'ssai-max-preview-session-v1';
const PREVIEW_STORAGE_KEY = 'ssai-max-preview-brief-v1';

const panelInitialMessages: MaxMessage[] = [{
  id: 'max-welcome',
  speaker: 'max',
  content: MAX_INITIAL_MESSAGE,
}];

const createMessage = (speaker: Speaker, content: string): MaxMessage => ({
  id: `${speaker}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
  speaker,
  content,
});

const initialMessagesFor = (variant: MaxConversationProps['variant']) => variant === 'panel' ? panelInitialMessages : [];

const readStoredMessages = (variant: MaxConversationProps['variant']): MaxMessage[] => {
  if (typeof window === 'undefined') return initialMessagesFor(variant);

  try {
    const stored = window.sessionStorage.getItem(STORAGE_KEY);
    if (!stored) return initialMessagesFor(variant);
    const parsed = JSON.parse(stored) as MaxMessage[];
    if (!Array.isArray(parsed) || parsed.length === 0) return initialMessagesFor(variant);
    return variant === 'page' ? parsed.filter((message) => message.id !== 'max-welcome') : parsed;
  } catch {
    return initialMessagesFor(variant);
  }
};

const readStoredPreview = () => {
  if (typeof window === 'undefined') return '';

  try {
    return window.sessionStorage.getItem(PREVIEW_STORAGE_KEY) ?? '';
  } catch {
    return '';
  }
};

const previewSafetyResponse = (message: string) => {
  const normalized = message.toLowerCase();
  const sensitiveInformation = /\b(password|social security|ssn|account number|medical record|medical details|client record)\b/;
  const unsafeRequest = /\b(fraud|harass|surveil|surveillance|bypass security|deceive)\b/;

  if (sensitiveInformation.test(normalized)) {
    return 'Please leave out private or sensitive details. You can describe the work, the challenge, and the outcome you want without names, account information, or client records.';
  }

  if (unsafeRequest.test(normalized)) {
    return 'I can’t help plan something deceptive, harmful, or invasive. If there is a legitimate workflow or communication challenge underneath it, describe that in a non-sensitive way and I can help think through a responsible direction.';
  }

  return null;
};

const previewReply = (message: string, visitorTurn: number) => {
  const normalized = message.toLowerCase();

  if (visitorTurn === 1 && normalized.includes("don't know where")) {
    return 'That is a fine place to begin. What kind of work do you do, and which part feels harder than it should?';
  }

  if (normalized.includes('repetitive') || normalized.includes('manual') || normalized.includes('spreadsheet') || normalized.includes('time')) {
    return 'That could be a useful place to start. We can map the repeated work and decide whether a clearer handoff, a simple automation, or a focused tool would help. Which step repeats most?';
  }

  if (normalized.includes('team') && normalized.includes('ai')) {
    return 'A useful first move is choosing one real task, not trying to use AI everywhere. What task or decision would you most like to make easier for the team?';
  }

  if (normalized.includes('idea') || normalized.includes('possible') || normalized.includes('build')) {
    return 'It may be possible. The first question is who it should help and what would be easier for them. Who would use it first?';
  }

  if (visitorTurn >= 2) {
    return 'I have a clearer picture. We may want to make the work visible first, then decide between a lighter process, a focused tool, or a small automation. Is the main aim to save time, improve follow-through, or give people clearer information?';
  }

  return 'That gives us a useful starting point. Where does the current approach start to break down?';
};

export const MaxConversation: React.FC<MaxConversationProps> = ({ variant, onClose }) => {
  const [messages, setMessages] = useState<MaxMessage[]>(() => readStoredMessages(variant));
  const [draft, setDraft] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);
  const [previewText, setPreviewText] = useState(readStoredPreview);
  const inputRef = useRef<HTMLInputElement>(null);
  const isPanel = variant === 'panel';

  const visitorMessages = useMemo(() => messages.filter((message) => message.speaker === 'visitor'), [messages]);
  const latestVisitorMessage = visitorMessages.at(-1)?.content ?? '';
  const meaningfulInputLength = visitorMessages.reduce((total, message) => total + message.content.replace(/\s/g, '').length, 0);
  const summaryReady = !isThinking && visitorMessages.length >= 2 && meaningfulInputLength >= 48;
  const isOpening = !isPanel && messages.length === 0;

  const summary = useMemo(() => ({
    goal: visitorMessages[0]?.content || 'A practical next step for the work you described.',
    possibleApproach: 'Start by making the current work and handoffs visible, then choose the lightest useful process, tool, or automation.',
    whereToStart: latestVisitorMessage ? `Look first at: ${latestVisitorMessage}` : 'Name one small, repeatable part of the work to improve first.',
  }), [latestVisitorMessage, visitorMessages]);

  const formattedSummary = `Your goal: ${summary.goal}\n\nA possible approach: ${summary.possibleApproach}\n\nWhere to start: ${summary.whereToStart}`;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (previewText) window.sessionStorage.setItem(PREVIEW_STORAGE_KEY, previewText);
  }, [previewText]);

  useEffect(() => {
    if (summaryReady && !previewText) setPreviewText(formattedSummary);
  }, [formattedSummary, previewText, summaryReady]);

  const submitMessage = (rawMessage: string) => {
    const message = rawMessage.trim();
    if (!message || isThinking) return;

    const safetyMessage = previewSafetyResponse(message);
    if (safetyMessage) {
      setMessages((current) => [...current, createMessage('max', safetyMessage)]);
      setDraft('');
      return;
    }

    const nextVisitorTurn = visitorMessages.length + 1;
    setMessages((current) => [...current, createMessage('visitor', message)]);
    setDraft('');
    setIsThinking(true);

    window.setTimeout(() => {
      setMessages((current) => [...current, createMessage('max', previewReply(message, nextVisitorTurn))]);
      setIsThinking(false);
    }, 420);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitMessage(draft);
  };

  const clearPreviewSession = () => {
    setMessages(initialMessagesFor(variant));
    setDraft('');
    setIsSummaryOpen(false);
    setPreviewText('');
    if (typeof window !== 'undefined') {
      window.sessionStorage.removeItem(STORAGE_KEY);
      window.sessionStorage.removeItem(PREVIEW_STORAGE_KEY);
    }
    window.setTimeout(() => inputRef.current?.focus(), 0);
  };

  return (
    <section className={`max-conversation ${isPanel ? 'max-conversation--panel' : 'max-conversation--page'}`} aria-label="Conversation with Max">
      {isPanel && (
        <div className="max-conversation__header">
          <div className="flex min-w-0 items-center gap-3">
            <span className="max-avatar" aria-hidden="true"><Bot className="h-5 w-5" /></span>
            <div className="min-w-0">
              <p className="text-sm font-extrabold text-[#17322f]">Max</p>
              <p className="text-xs font-semibold text-[#52706a]">South Shore AI’s AI guide</p>
            </div>
          </div>
          {onClose && <button type="button" onClick={onClose} className="max-close-button" aria-label="Close Max">×</button>}
        </div>
      )}

      <div className="max-conversation__body">
        {isOpening && (
          <div className="max-opening">
            <p className="max-identity">Max</p>
            <p className="max-subtitle">South Shore AI’s AI guide</p>
            <h1>What would you like to make easier?</h1>
            <p className="max-opening-copy">“An everyday frustration or a new idea is enough. Not sure where to start? We can work it out together.”</p>
            <div className="max-starters" aria-label="Conversation starters">
              {MAX_STARTER_CHOICES.map((choice) => (
                <button key={choice.label} type="button" onClick={() => submitMessage(choice.prompt)} className="max-starter-button">
                  {choice.label}<ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              ))}
            </div>
          </div>
        )}

        {(isPanel || !isOpening) && (
          <div className="max-message-list" aria-live="polite" aria-relevant="additions">
            {messages.map((message) => (
              <div key={message.id} className={`max-message max-message--${message.speaker}`}>
                {message.speaker === 'max' && <span className="max-message__label">Max</span>}
                <p>{message.content}</p>
              </div>
            ))}
            {isThinking && (
              <div className="max-thinking" aria-label="Max is thinking">
                <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
                Thinking through a useful next question…
              </div>
            )}
          </div>
        )}

        {summaryReady && !isSummaryOpen && (
          <button type="button" className="max-summary-trigger" onClick={() => setIsSummaryOpen(true)}>
            See your idea summary <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        )}

        {summaryReady && isSummaryOpen && (
          <section className="max-summary" aria-labelledby={`max-summary-title-${variant}`}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="max-identity">Your idea summary</p>
                <h2 id={`max-summary-title-${variant}`}>A practical first shape</h2>
              </div>
              <button type="button" className="max-text-button" onClick={() => setIsSummaryOpen(false)}>Hide summary</button>
            </div>
            <dl>
              <div><dt>Your goal</dt><dd>{summary.goal}</dd></div>
              <div><dt>A possible approach</dt><dd>{summary.possibleApproach}</dd></div>
              <div><dt>Where to start</dt><dd>{summary.whereToStart}</dd></div>
            </dl>
            <label htmlFor={`max-preview-${variant}`}>Add or correct anything</label>
            <textarea id={`max-preview-${variant}`} className="max-preview-textarea" rows={6} value={previewText || formattedSummary} onChange={(event) => setPreviewText(event.target.value)} />
          </section>
        )}
      </div>

      <form className="max-message-form" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor={`max-message-${variant}`}>Tell Max what you would like to make easier</label>
        <input id={`max-message-${variant}`} ref={inputRef} autoFocus={isPanel} value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="Tell me a little about it…" maxLength={900} disabled={isThinking} />
        <button type="submit" disabled={isThinking || !draft.trim()} aria-label="Send message to Max">
          {isPanel ? <Send className="h-4 w-4" aria-hidden="true" /> : 'Send'}
        </button>
      </form>

      {!isPanel && (
        <div className="max-page-notes">
          <p>Please leave out private or sensitive information. <Link href="/max/privacy">Privacy</Link></p>
          {isOpening && <p>Explore first. When you’re ready to save your idea brief, we’ll ask for your name and email.</p>}
          {!isOpening && <button type="button" onClick={clearPreviewSession} className="max-reset-button">Start over</button>}
        </div>
      )}

      {isPanel && (
        <div className="max-conversation__footer">
          <div className="max-footer-actions">
            <Link href="/connect" className="max-footer-link" onClick={onClose}>Talk to Scott <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /></Link>
            <Link href="/max" className="max-footer-link" onClick={onClose}>Full workspace <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /></Link>
          </div>
          <button type="button" onClick={clearPreviewSession} className="max-reset-button">Start over</button>
        </div>
      )}
    </section>
  );
};
