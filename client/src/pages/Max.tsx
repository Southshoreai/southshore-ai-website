import React from 'react';
import { ArrowRight, MessageCircleHeart } from 'lucide-react';
import { Link } from 'wouter';
import { MaxConversation } from '@/components/MaxConversation';

export const Max: React.FC = () => (
  <div className="ssai-page bg-[#f6f1e7] px-5 py-8 sm:px-8 sm:py-12 lg:px-10 lg:py-16">
    <div className="ssai-container">
      <div className="max-page-intro">
        <div>
          <p className="ssai-eyebrow">A practical first conversation</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[0.98] sm:text-6xl">Bring the unfinished version of your idea.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#52645f]">Max is South Shore AI’s AI guide. Use this working preview to explore a stuck process, a new idea, or a way your team might use AI—without needing the right technical words first.</p>
        </div>
        <div className="max-page-intro__note"><MessageCircleHeart className="h-5 w-5" aria-hidden="true" /><span><strong>You can explore first.</strong> The secure name-and-email step, polished brief, and email delivery are being connected next.</span></div>
      </div>

      <div className="mt-10 grid gap-8 xl:grid-cols-[minmax(0,1fr)_18rem] xl:items-start">
        <MaxConversation variant="page" />
        <aside className="max-page-aside">
          <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#136975]">What Max is for</p>
          <h2 className="mt-3 text-2xl font-extrabold">A clear, smaller first move.</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#52645f]">Max can help clarify the opportunity, identify what should stay human, and shape questions for a conversation with Scott. It does not build, quote, or make commitments.</p>
          <Link href="/connect" className="ssai-button mt-6 w-full">Talk to Scott <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </aside>
      </div>
    </div>
  </div>
);
