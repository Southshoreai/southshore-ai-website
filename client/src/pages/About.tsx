import React from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle2, Lightbulb, Mic2, Wrench } from 'lucide-react';

export const About: React.FC = () => (
  <div className="ssai-page overflow-hidden">
    <section className="bg-[#f2f5f6] px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-12">
      <div className="ssai-container overflow-hidden border border-[#d0d8db] bg-[#0e1112] shadow-[0_28px_60px_rgba(14,17,18,0.18)]">
        <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative flex min-h-[440px] overflow-hidden lg:order-2 lg:min-h-[610px]">
            <img src="/assets/ssai-brand/scott-red-tie-podium.jpg" alt="Scott Pralinsky speaking at a podium" className="h-full w-full object-cover object-[52%_center]" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,17,18,0.18),transparent_58%),linear-gradient(0deg,rgba(14,17,18,0.48),transparent_46%)]" aria-hidden="true" />
            <p className="absolute bottom-6 left-6 right-6 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-white"><Mic2 className="h-4 w-4" />Leadership, strategy, and practical action</p>
          </div>
          <div className="relative flex flex-col justify-center p-7 text-white sm:p-12 lg:order-1 lg:p-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(21,130,146,0.52),transparent_40%),linear-gradient(145deg,#0e1112,#043239)]" aria-hidden="true" />
            <div className="relative">
              <p className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#b0e1ea]"><span className="h-px w-7 bg-[#b0e1ea]" />About South Shore AI</p>
              <h1 className="mt-6 max-w-xl text-5xl font-extrabold leading-[0.94] tracking-[-0.055em] text-white sm:text-6xl">Leadership that stays <span className="text-[#fea877]">close to the work.</span></h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#d0d8db] sm:text-xl">South Shore AI helps business owners and organizational leaders make sense of AI, choose useful tools, and turn good ideas into working solutions.</p>
              <Link href="/connect" className="ssai-button mt-8">Talk to Scott <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="ssai-section bg-white">
      <div className="ssai-container grid gap-9 lg:grid-cols-[1.14fr_0.86fr] lg:items-start">
        <div>
          <p className="ssai-eyebrow">Scott Pralinsky</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-[1.02] sm:text-5xl">Leadership experience and hands-on building in the same conversation.</h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#565f61]">Scott Pralinsky helps leaders understand AI, choose useful tools, and turn ideas into working solutions. The goal is not to make technology sound complicated. It is to identify the practical next step and help people put it to use.</p>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#565f61]">The conversation can start with a frustrating task, a reporting problem, a knowledge base, a process that needs a better handoff, or a public audience that needs AI explained clearly.</p>
        </div>
        <aside className="border border-[#d0d8db] bg-[#f2f5f6] p-7 sm:p-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#136975]">A practical point of view</p>
          <p className="mt-4 text-2xl font-extrabold leading-tight text-[#272d2e]">“Start with the work people need to get done.”</p>
          <p className="mt-4 text-base leading-relaxed text-[#565f61]">Technology has to earn its place in a real organization. The best next move is the one people can understand, trust, and use.</p>
        </aside>
      </div>
    </section>

    <section className="bg-[#eaf9fc] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="ssai-container grid gap-4 md:grid-cols-2">
        <article className="border border-[#b0e1ea] bg-white p-7 sm:p-9"><Lightbulb className="h-7 w-7 text-[#136975]" /><h2 className="mt-5 text-2xl font-extrabold">Clear decisions</h2><p className="mt-3 text-lg leading-relaxed text-[#565f61]">Make AI understandable enough to decide what is worth doing next.</p></article>
        <article className="border border-[#ffcaad] bg-[#fffaf7] p-7 sm:p-9"><Wrench className="h-7 w-7 text-[#b95500]" /><h2 className="mt-5 text-2xl font-extrabold">Working solutions</h2><p className="mt-3 text-lg leading-relaxed text-[#565f61]">Move from an idea to a tool, workflow, training session, or briefing that people can use.</p></article>
      </div>
      <div className="ssai-container mt-4 border border-[#d0d8db] bg-white p-6 text-base leading-relaxed text-[#565f61]"><p className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#136975]" />Togetha is a current example of the human-centered applications South Shore AI is building.</p></div>
    </section>
  </div>
);
