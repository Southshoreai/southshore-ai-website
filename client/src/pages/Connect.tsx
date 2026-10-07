import React from 'react';
import { Link } from 'wouter';
import { ArrowRight, BookOpen, Calendar, Mail, Phone } from 'lucide-react';
import { CALENDLY_LINK, PHONE_NUMBER, SSAI_EMAIL, TOGETHA_EMAIL } from '@/data/siteData';

export const Connect: React.FC = () => (
  <div className="ssai-page overflow-hidden">
    <section className="bg-[#eaf9fc] px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-12">
      <div className="ssai-container overflow-hidden border border-[#b0e1ea] bg-white shadow-[0_26px_56px_rgba(19,105,117,0.13)]">
        <div className="grid lg:grid-cols-[1.02fr_0.98fr]">
          <div className="flex flex-col justify-center p-7 sm:p-12 lg:p-16">
            <p className="ssai-eyebrow">Contact</p>
            <h1 className="mt-5 max-w-xl text-5xl font-extrabold leading-[0.94] tracking-[-0.055em] sm:text-6xl">What would you like to <span className="text-[#136975]">make easier?</span></h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#565f61] sm:text-xl">Bring a frustrating task, a business challenge, or an app idea. We’ll help you find a practical next step.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`mailto:${SSAI_EMAIL}`} className="ssai-button">Email Scott <ArrowRight className="h-4 w-4" /></a>
              <a href={`tel:${PHONE_NUMBER.replace(/[^+\d]/g, '')}`} className="ssai-button--secondary">Call {PHONE_NUMBER}</a>
            </div>
            <div className="mt-10 border-t border-[#d0d8db] pt-7">
              <h2 className="text-2xl font-extrabold">A helpful first message can be short.</h2>
              <ul className="mt-4 space-y-3 text-lg leading-relaxed text-[#565f61]">
                <li><strong className="text-[#272d2e]">What is getting in the way?</strong> Describe the task or decision that keeps taking time.</li>
                <li><strong className="text-[#272d2e]">Who is involved?</strong> Let us know who does the work today and who would use a new tool or workflow.</li>
                <li><strong className="text-[#272d2e]">What would better look like?</strong> A simple outcome is enough to begin the conversation.</li>
              </ul>
            </div>
          </div>

          <div className="relative min-h-[430px] overflow-hidden bg-[#0e1112] lg:min-h-full">
            <img src="/assets/ssai-brand/scott-polo.png" alt="Scott Pralinsky" className="absolute inset-0 h-full w-full object-cover object-[50%_30%]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,17,18,0.05),rgba(14,17,18,0.78))]" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-10">
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#b0e1ea]">A practical conversation</p>
              <p className="mt-3 max-w-sm text-2xl font-extrabold leading-tight text-white">Start with the part of the work that is asking for a better way.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="ssai-section bg-white">
      <div className="ssai-container grid gap-6 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
        <aside className="ssai-card p-7 sm:p-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#136975]">Direct contact</p>
          <div className="mt-6 space-y-4 text-base">
            <a href={`mailto:${SSAI_EMAIL}`} className="flex items-center gap-3 font-bold text-[#136975] hover:underline"><Mail className="h-5 w-5 text-[#136975]" />{SSAI_EMAIL}</a>
            <a href={`tel:${PHONE_NUMBER.replace(/[^+\d]/g, '')}`} className="flex items-center gap-3 font-bold text-[#136975] hover:underline"><Phone className="h-5 w-5 text-[#136975]" />{PHONE_NUMBER}</a>
          </div>
          <div className="mt-8 border border-[#dacbed] bg-[#f8f3ff] p-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.13em] text-[#6541a0]">Interested in Togetha?</p>
            <p className="mt-2 text-sm leading-relaxed text-[#5b477e]">For a project-specific conversation or working-build walkthrough, use the Togetha contact path.</p>
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="togetha-button mt-4 w-full"><Calendar className="h-4 w-4" />Book a Togetha walkthrough</a>
            <a href={`mailto:${TOGETHA_EMAIL}`} className="mt-3 block text-center text-sm font-bold text-[#6541a0] hover:underline">{TOGETHA_EMAIL}</a>
          </div>
          <Link href="/togetha" className="ssai-link mt-6">Explore the Togetha project <ArrowRight className="h-4 w-4" /></Link>
        </aside>

        <a href="/resources/" className="group block border border-[#ffcaad] bg-[#fff3ed] p-7 transition hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(185,85,0,0.14)] sm:p-10">
          <div className="flex items-start justify-between gap-5"><span className="grid h-12 w-12 place-items-center rounded-md bg-[#ef7723] text-white"><BookOpen className="h-6 w-6" /></span><span className="text-sm font-bold text-[#b95500] transition group-hover:translate-x-1">Explore Resources →</span></div>
          <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.15em] text-[#b95500]">Start with a free guide</p>
          <h2 className="mt-3 max-w-xl text-3xl font-extrabold leading-tight sm:text-4xl">A less overwhelming way to begin using AI at work and in everyday life.</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#6d4a36]">The Everyday Muse Starter Guide gives new users five useful examples, copy-ready prompts, and a grounded review-before-action rule. It is a good first stop if you want to learn before you build.</p>
        </a>
      </div>
    </section>
  </div>
);
