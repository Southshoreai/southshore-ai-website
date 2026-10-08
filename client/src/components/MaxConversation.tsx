import React, { FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import { ArrowUpRight, Bot, CheckCircle2, ChevronRight, LoaderCircle, Send, Sparkles } from 'lucide-react';
import { Link } from 'wouter';
import { MAX_INITIAL_MESSAGE, MAX_PRIVACY_NOTE, MAX_STARTER_CHOICES } from '@/data/maxStarterChoices';

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

const initialMessages: MaxMessage[] = [{
  id: 'max-welcome',
  speaker: 'max',
  content: MAX_INITIAL_MESSAGE,
}];

const createMessage = (speaker: Speaker, content: string): MaxMessage => ({
  id: `${speaker}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
  speaker,
  content,
});

const readStoredMessages = (): MaxMessage[] => {
  if (typeof window === 'undefined') return initialMessages;

  try {
    const stored = window.sessionStorage.getItem(STORAGE_KEY);
    if (!stored) return initialMessages;
    const parsed = JSON.parse(stored) as MaxMessage[];
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : initialMessages;
  } catch {
    return initialMessages;
  }
};

const previewReply = (message: string, visitorTurn: number) => {
  const normalized = message.toLowerCase();

  if (visitorTurn === 1 && normalized.includes("don't know where")) {
    return 'That’s a completely fine place to begin. What kind of work do you do, and which part of it feels harder than it should?';
  }

  if (normalized.includes('repetitive') || normalized.includes('manual') || normalized.includes('spreadsheet')) {
    return 'That sounds like a useful place to look. We could map the repeated work, identify where information gets copied or lost, and decide whether a clearer handoff, a lighter automation, or a focused tool would help most. Which step happens often enough that people notice it every week?';
  }

  if (normalized.includes('team') && normalized.includes('ai')) {
    return 'A good first move is usually not “use more AI.” It is choosing one real piece of work, agreeing on what still needs human review, and giving people a small, useful practice space. What kind of decision or task do you hope AI could make easier for your team?';
  }

  if (normalized.includes('idea') || normalized.includes('possible') || normalized.includes('build')) {
    return 'It may be possible. The useful question is what problem the idea solves for someone, what should stay human, and what would make a first version worth trying. Who would use it first, and what would a better outcome look like for them?';
  }

  if (visitorTurn >= 2) {
    return 'I’m starting to see the shape of this. One practical direction may be to make the current work easier to see before deciding what to automate or build. I can turn what we have into a short, editable idea preview; first, is the main aim to save time, improve follow-through, give people clearer information, or something else?';
  }

  return 'Thanks—that gives us a useful starting point. I’m listening for the work that repeats, the information that is hard to find, and the decisions that still need a person involved. What is the moment where the current approach starts to break down?';
};

export const MaxConversation: React.FC<MaxConversationProps> = ({ variant, onClose }) => {
  const [messages, setMessages] = useState<MaxMessage[]>(readStoredMessages);
  const [draft, setDraft] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewText, setPreviewText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const isPanel = variant === 'panel';

  const visitorMessages = useMemo(() => messages.filter((message) => message.speaker === 'visitor'), [messages]);
  const latestVisitorMessage = visitorMessages.at(-1)?.content ?? '';
  const previewReady = visitorMessages.length >= 2;

  const thinkingLedger = useMemo(() => {
    const firstMessage = visitorMessages[0]?.content;
    return {
      goal: firstMessage ? 'A practical next step for the situation you described.' : 'Still taking shape',
      friction: latestVisitorMessage || 'Still listening for the work that feels harder than it should.',
      humanJudgment: 'The people closest to the work keep the final say.',
    };
  }, [latestVisitorMessage, visitorMessages]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    if (!previewReady || previewText) return;
    setPreviewText(`Goal: ${thinkingLedger.goal}\n\nWhat may be getting in the way: ${thinkingLedger.friction}\n\nPossible first move: Clarify the current workflow with the people who do the work, then decide whether a lighter process, a focused tool, or a small automation is the best fit.\n\nWhat should stay human: ${thinkingLedger.humanJudgment}`);
  }, [previewReady, previewText, thinkingLedger]);

  const submitMessage = (rawMessage: string) => {
    const message = rawMessage.trim();
    if (!message || isThinking) return;

    const nextVisitorTurn = visitorMessages.length + 1;
    setMessages((current) => [...current, createMessage('visitor', message)]);
    setDraft('');
    setIsThinking(true);

    window.setTimeout(() => {
      setMessages((current) => [...current, createMessage('max', previewReply(message, nextVisitorTurn))]);
      setIsThinking(false);
    }, 520);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitMessage(draft);
  };

  const clearPreviewSession = () => {
    setMessages(initialMessages);
    setDraft('');
    setIsPreviewOpen(false);
    setPreviewText('');
    if (typeof window !== 'undefined') window.sessionStorage.removeItem(STORAGE_KEY);
    window.setTimeout(() => inputRef.current?.focus(), 0);
  };

  return (
    <section className={`max-conversation ${isPanel ? 'max-conversation--panel' : 'max-conversation--page'}`} aria-label="Conversation with Max">
      <div className="max-conversation__header">
        <div className="flex min-w-0 items-center gap-3">
          <span className="max-avatar" aria-hidden="true"><Bot className="h-5 w-5" /></span>
          <div className="min-w-0">
            <p className="text-sm font-extrabold text-[#17322f]">Max</p>
            <p className="text-xs font-semibold text-[#52706a]">South Shore AI’s AI guide</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="max-preview-badge">Preview</span>
          {onClose && <button type="button" onClick={onClose} className="max-close-button" aria-label="Close Max">×</button>}
        </div>
      </div>

      <div className="max-conversation__body">
        <div className="max-privacy-note"><Sparkles className="h-4 w-4" aria-hidden="true" />{MAX_PRIVACY_NOTE}</div>

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
              Max is thinking through a practical next step…
            </div>
          )}
        </div>

        {visitorMessages.length === 0 && (
          <div className="max-starters" aria-label="Conversation starters">
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#52706a]">Start wherever you are</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {MAX_STARTER_CHOICES.map((choice) => (
                <button key={choice.label} type="button" onClick={() => submitMessage(choice.prompt)} className="max-starter-button">
                  {choice.label}<ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              ))}
            </div>
          </div>
        )}

        {previewReady && (
          <div className="max-preview-card">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#136975]">A useful first shape</p>
                <h3 className="mt-1 text-lg font-extrabold text-[#17322f]">Your idea, clarified</h3>
              </div>
              <button type="button" onClick={() => setIsPreviewOpen((open) => !open)} className="max-text-button">
                {isPreviewOpen ? 'Hide preview' : 'Review & correct'}
              </button>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-[#48635d]">You can get something useful before giving us your details. When the secure contact step is connected, you’ll be able to save this and receive a polished one-page brief.</p>
            {isPreviewOpen && (
              <div className="mt-4 space-y-3">
                <label className="block text-xs font-extrabold uppercase tracking-[0.12em] text-[#52706a]" htmlFor={`max-preview-${variant}`}>Correct anything Max missed</label>
                <textarea id={`max-preview-${variant}`} className="max-preview-textarea" rows={7} value={previewText} onChange={(event) => setPreviewText(event.target.value)} />
                <p className="flex items-start gap-2 text-xs leading-relaxed text-[#52706a]"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-none text-[#11805d]" aria-hidden="true" />This preview stays in this browser for the working demo. The secure contact, report, and email-delivery step is not live yet.</p>
              </div>
            )}
          </div>
        )}

        {!isPanel && (
          <aside className="max-thinking-ledger" aria-label="What we’ve figured out">
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#136975]">What we’ve figured out</p>
            <dl className="mt-4 space-y-4">
              <div><dt>Goal</dt><dd>{thinkingLedger.goal}</dd></div>
              <div><dt>Current friction</dt><dd>{thinkingLedger.friction}</dd></div>
              <div><dt>Human judgment</dt><dd>{thinkingLedger.humanJudgment}</dd></div>
            </dl>
          </aside>
        )}
      </div>

      <form className="max-message-form" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor={`max-message-${variant}`}>Describe what you are working through</label>
        <input id={`max-message-${variant}`} ref={inputRef} value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="You can start with the messy version." maxLength={900} disabled={isThinking} />
        <button type="submit" disabled={isThinking || !draft.trim()} aria-label="Send message to Max"><Send className="h-4 w-4" aria-hidden="true" /></button>
      </form>

      <div className="max-conversation__footer">
        {isPanel ? <Link href="/max" className="max-footer-link" onClick={onClose}>Open the full Max workspace <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /></Link> : <Link href="/connect" className="max-footer-link">Talk to Scott instead <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /></Link>}
        <button type="button" onClick={clearPreviewSession} className="max-reset-button">Start over</button>
      </div>
    </section>
  );
};
