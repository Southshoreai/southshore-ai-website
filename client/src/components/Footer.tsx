import React from 'react';
import { Link } from 'wouter';
import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import { PHONE_NUMBER, SSAI_EMAIL } from '@/data/siteData';

export const Footer: React.FC = () => (
  <footer className="border-t border-[#d0d8db] bg-white text-[#3e4547]">
    <div className="border-b border-[#d0d8db] bg-[#eaf9fc] px-5 py-12 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="ssai-eyebrow">Start with one problem</p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">What would you like to make easier?</h2>
          <p className="mt-3 text-lg leading-relaxed text-[#565f61]">Bring a frustrating task, a business challenge, or an app idea. We’ll help you find a practical next step.</p>
        </div>
        <Link href="/connect" className="ssai-button self-start md:self-auto">
          Talk to Scott
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </div>

    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
      <div className="space-y-4 lg:col-span-2">
        <Link href="/" className="inline-flex max-w-[230px]">
          <img src="/assets/ssai-brand/ssai-lockup-full.svg" alt="South Shore AI — Navigating Tomorrow with AI Today" className="h-auto w-full" />
        </Link>
        <p className="max-w-md text-sm leading-relaxed">Practical AI for businesses and organizations. We build useful tools, automate work, and help teams use AI with confidence.</p>
        <div className="space-y-2 text-sm">
          <a href={`mailto:${SSAI_EMAIL}`} className="flex w-fit items-center gap-2 font-semibold text-[#136975] hover:underline"><Mail className="h-4 w-4 text-[#136975]" />{SSAI_EMAIL}</a>
          <a href={`tel:${PHONE_NUMBER.replace(/[^+\d]/g, '')}`} className="flex w-fit items-center gap-2 font-semibold text-[#136975] hover:underline"><Phone className="h-4 w-4 text-[#136975]" />{PHONE_NUMBER}</a>
        </div>
      </div>

      <div>
        <h3 className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#6f787b]">South Shore AI</h3>
        <ul className="mt-4 space-y-2.5 text-sm font-semibold">
          <li><Link href="/services" className="hover:text-[#b95500] hover:underline">Services</Link></li>
          <li><Link href="/work" className="hover:text-[#b95500] hover:underline">Our Work</Link></li>
          <li><Link href="/about" className="hover:text-[#b95500] hover:underline">About</Link></li>
          <li><a href="/resources/" className="hover:text-[#b95500] hover:underline">Resources</a></li>
          <li><Link href="/connect" className="hover:text-[#b95500] hover:underline">Contact</Link></li>
        </ul>
      </div>

      <div>
        <h3 className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#6f787b]">Togetha</h3>
        <ul className="mt-4 space-y-2.5 text-sm font-semibold">
          <li><Link href="/togetha" className="hover:text-[#6541a0] hover:underline">Project overview</Link></li>
          <li><Link href="/togetha/member-experience" className="hover:text-[#6541a0] hover:underline">For members</Link></li>
          <li><Link href="/togetha/supporters" className="hover:text-[#6541a0] hover:underline">For supporters</Link></li>
          <li><Link href="/safety-and-trust" className="hover:text-[#6541a0] hover:underline">Safety & privacy</Link></li>
        </ul>
      </div>
    </div>

    <div className="border-t border-[#d0d8db] px-5 py-5 text-xs text-[#6f787b] sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} South Shore AI, LLC.</p>
        <p>Togetha is preparing for supervised volunteer testing in Massachusetts and is not open for public account creation.</p>
      </div>
    </div>
  </footer>
);
