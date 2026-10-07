import React from 'react';
import { Link } from 'wouter';
import { ArrowRight, Calendar, Heart, ShieldCheck, Users } from 'lucide-react';
import { CALENDLY_LINK } from '@/data/siteData';
import { ScreenshotShowcase } from '@/components/ScreenshotShowcase';

const detailLinks = [
  { href: '/togetha/member-experience', icon: Heart, title: 'For members', text: 'See how Togetha supports paced discovery, member choice, and clear everyday steps.' },
  { href: '/togetha/supporters', icon: Users, title: 'For supporters and families', text: 'Explore the permission choices members can use when they want support.' },
  { href: '/safety-and-trust', icon: ShieldCheck, title: 'Safety and privacy', text: 'Read about the project’s safety tools, human review, and privacy boundaries.' },
];

export const TogethaPlatform: React.FC = () => (
  <div className="ssai-page overflow-hidden">
    <section className="bg-[#f2edfb] px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-12">
      <div className="ssai-container relative overflow-hidden bg-[#181227] text-white shadow-[0_30px_64px_rgba(50,31,82,0.22)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_18%,rgba(165,138,226,0.5),transparent_26%),radial-gradient(circle_at_8%_92%,rgba(53,127,95,0.46),transparent_35%),linear-gradient(125deg,#161026_2%,#2b1a50_60%,#161026_100%)]" aria-hidden="true" />
        <div className="relative grid min-h-[620px] lg:grid-cols-[0.88fr_1.12fr]">
          <div className="flex flex-col justify-center p-7 sm:p-12 lg:p-16">
            <p className="inline-flex w-fit bg-white/10 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.13em] text-[#dfd1ff]">A South Shore AI featured project</p>
            <h1 className="mt-6 text-5xl font-extrabold leading-[0.94] tracking-[-0.055em] text-white sm:text-6xl">Meet Togetha.<br /><span className="text-[#d7c0ff]">Built for real connection.</span></h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#e0d8ef] sm:text-xl">Togetha is a platform for friendship and dating for autistic adults and adults with intellectual and developmental disabilities. Members choose the support they want, with accessibility and safety tools built into the experience.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="togetha-button">Book a Togetha walkthrough <Calendar className="h-4 w-4" /></a>
              <a href="#screens" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/12">Browse the product screens</a>
            </div>
          </div>

          <div className="relative flex min-h-[390px] items-center justify-center overflow-hidden px-6 py-12 sm:px-12 lg:min-h-full">
            <div className="absolute h-[26rem] w-[26rem] rounded-full border border-white/15 bg-white/5" aria-hidden="true" />
            <div className="relative h-[390px] w-full max-w-[520px] sm:h-[465px]">
              <div className="absolute left-[8%] top-[7%] w-[42%] -rotate-[10deg] overflow-hidden rounded-[1.4rem] border border-white/30 bg-white p-2 shadow-[0_22px_42px_rgba(0,0,0,0.4)]">
                <img src="/screenshots/18-agency-overview.png" alt="" aria-hidden="true" className="w-full rounded-[1rem]" />
              </div>
              <div className="absolute right-[4%] top-[10%] z-10 w-[53%] overflow-hidden rounded-[1.65rem] border-[5px] border-[#ede9f4] bg-white p-1.5 shadow-[0_26px_52px_rgba(0,0,0,0.48)]">
                <img src="/screenshots/03-guided-home.png" alt="Togetha guided member home screen with clear choices and supporter help" className="w-full rounded-[1.2rem]" />
              </div>
              <div className="absolute bottom-[5%] left-[5%] z-20 max-w-[245px] border border-white/20 bg-[#231936]/90 p-4 shadow-2xl backdrop-blur-md sm:p-5">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#cab3ff]">Current project status</p>
                <p className="mt-2 text-sm font-bold leading-relaxed text-white">Working version preparing for supervised volunteer testing in Massachusetts.</p>
                <p className="mt-2 text-xs leading-relaxed text-[#ded4ed]">Not open for public account creation. Screens use simulated accounts and demo data.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="ssai-section bg-white pt-12 sm:pt-16">
      <div className="ssai-container">
        <div className="max-w-3xl">
          <p className="ssai-eyebrow">What the project makes possible</p>
          <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">A platform designed around people, choice, and clear support.</h2>
        </div>
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {[
            ['Member choice comes first.', 'Members choose who can help and what that person can see. Support can be changed or removed by the member.'],
            ['Accessibility is part of the experience.', 'Different screen styles and plain-language choices help people use the platform in the way that works for them.'],
            ['Safety tools aim to support, not take over.', 'Built-in prompts, review tools, and human processes are designed to help members make informed choices.'],
          ].map(([title, text], index) => (
            <article key={title} className="ssai-card p-6">
              <span className="text-sm font-extrabold tracking-[0.14em] text-[#6541a0]">0{index + 1}</span>
              <h3 className="mt-5 text-2xl font-extrabold">{title}</h3>
              <p className="mt-3 text-lg leading-relaxed text-[#565f61]">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section id="screens" className="ssai-section bg-[#f2f5f6]" aria-labelledby="screens-heading">
      <div className="ssai-container">
        <div className="max-w-3xl">
          <p className="inline-flex bg-[#f0e8ff] px-3 py-1 text-xs font-extrabold uppercase tracking-[0.12em] text-[#6541a0]">Working build</p>
          <h2 id="screens-heading" className="mt-4 text-4xl font-extrabold sm:text-5xl">See the experience in detail.</h2>
          <p className="mt-4 text-lg leading-relaxed text-[#565f61]">Browse the product screens by audience or topic. Each screen is available at a readable size with context about what it is designed to do.</p>
        </div>
        <div className="mt-8"><ScreenshotShowcase /></div>
      </div>
    </section>

    <section className="ssai-section bg-white" aria-labelledby="depth-heading">
      <div className="ssai-container">
        <div className="max-w-3xl">
          <p className="ssai-eyebrow">Explore the project</p>
          <h2 id="depth-heading" className="mt-4 text-4xl font-extrabold sm:text-5xl">The details are still here when you need them.</h2>
          <p className="mt-4 text-lg leading-relaxed text-[#565f61]">Togetha’s public information is organized by the questions different visitors bring, rather than forcing everyone through one long explanation.</p>
        </div>
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {detailLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href} className="ssai-card group p-6 transition hover:-translate-y-1 hover:border-[#bda8e4]">
                <span className="grid h-11 w-11 place-items-center rounded-md bg-[#f0e8ff] text-[#6541a0]"><Icon className="h-5 w-5" /></span>
                <h3 className="mt-5 text-2xl font-extrabold">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-[#565f61]">{item.text}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#6541a0]">Open detail <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" /></span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  </div>
);
