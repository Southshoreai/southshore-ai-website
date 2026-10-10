import React, { useEffect, useState } from 'react';
import { Link } from 'wouter';
import {
  BookOpen,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';
import { WorkflowProof } from '../components/WorkflowProof';

type Audience = {
  label: string;
  marker: string;
  description: string;
  color: string;
};

type TogethaScene = {
  title: string;
  label: string;
  description: string;
  filename: string;
  alt: string;
};

const audiences: Audience[] = [
  { label: 'busy owners', marker: 'BO', description: 'who need the work to keep moving while they run the business.', color: '#087f79' },
  { label: 'one-person teams', marker: '1P', description: 'who need more capacity without another pile of tools to manage.', color: '#6541b5' },
  { label: 'small and mid-sized businesses', marker: 'SM', description: 'that want practical systems their people will actually use.', color: '#c6672b' },
  { label: 'CEOs', marker: 'CEO', description: 'who need a clearer picture before the next decision, meeting, or board report.', color: '#1f596c' },
];

const togethaScenes: TogethaScene[] = [
  {
    title: 'A member’s experience',
    label: 'Member experience',
    description: 'A calmer path that lets people move at their own pace, with plain-language steps and an always-visible route to help.',
    filename: '03-guided-home.png',
    alt: 'Togetha guided member home screen with clear choices and supporter help',
  },
  {
    title: 'Support chosen by the member',
    label: 'Supporter choice',
    description: 'Members decide who can help, what that person can see, and how much support feels right for them.',
    filename: '12-my-supporters.png',
    alt: 'Togetha screen showing member-controlled supporter permissions',
  },
  {
    title: 'Safety prompts without taking over',
    label: 'Safety prompts',
    description: 'The product can bring a concern forward and still leave the member with a clear, respectful choice.',
    filename: '08-safety-tip-in-chat.png',
    alt: 'Togetha in-chat safety prompt screen',
  },
  {
    title: 'Visibility for providers, with boundaries',
    label: 'Provider visibility',
    description: 'Provider organizations can see the operational view they need without turning private member conversations into surveillance.',
    filename: '18-agency-overview.png',
    alt: 'Togetha provider agency overview dashboard',
  },
];

const proofCards = [
  {
    eyebrow: 'Client delivery',
    title: 'Dharma Dreams reporting portal',
    text: 'A multi-tenant portal where each client can see their own data and updates without the usual email back-and-forth.',
    tone: 'teal',
  },
  {
    eyebrow: 'Confidential I/DD services organization',
    title: 'Management Intelligence System',
    text: 'Built and ran a private, daily updated intelligence layer that brought records, policies, meeting notes, staff updates, dashboards, and reporting into one connected operating picture.',
    tone: 'violet',
  },
  {
    eyebrow: 'Community operations',
    title: 'Zuno provider and family communities',
    text: 'Set up and ran Mighty Networks communities designed to support connection, communication, and useful shared information.',
    tone: 'orange',
  },
  {
    eyebrow: 'Local discovery',
    title: 'Shoreline directory',
    text: 'Built a local online directory as a practical way for a small organization to get found and turn local visibility into leads.',
    tone: 'blue',
  },
];

export const Home: React.FC = () => {
  const [audienceIndex, setAudienceIndex] = useState(0);
  const [sceneIndex, setSceneIndex] = useState(0);
  const [isMotionPaused, setIsMotionPaused] = useState(false);
  const audience = audiences[audienceIndex];
  const scene = togethaScenes[sceneIndex];

  useEffect(() => {
    if (isMotionPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const interval = window.setInterval(() => setAudienceIndex((current) => (current + 1) % audiences.length), 3900);
    return () => window.clearInterval(interval);
  }, [isMotionPaused]);

  useEffect(() => {
    if (isMotionPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const interval = window.setInterval(() => setSceneIndex((current) => (current + 1) % togethaScenes.length), 5200);
    return () => window.clearInterval(interval);
  }, [isMotionPaused]);

  return (
    <div className="ssai-page overflow-hidden">
      <section className="border-b border-[#dfdfd8] bg-[#f6f1e7] px-5 py-7 sm:px-8 lg:px-10 lg:py-10">
        <div className="ssai-container overflow-hidden rounded-[2rem] bg-[#193431] shadow-[0_22px_70px_rgba(24,47,43,0.17)]">
          <div className="grid min-h-[650px] lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative z-10 flex flex-col justify-center px-7 py-14 sm:px-12 lg:px-16 lg:py-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(23,151,142,0.42),transparent_38%),linear-gradient(145deg,#17322f_0%,#102622_100%)]" aria-hidden="true" />
              <div className="relative">
                <p className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#a8e3db]"><span className="h-px w-7 bg-[#a8e3db]" />Practical AI for real work</p>
                <h1 className="mt-6 max-w-3xl text-5xl font-extrabold leading-[0.94] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
                  Get your time back.<br />
                  <span className="text-[#9ee3d8]">Put AI to work for</span><br />
                  <span className="inline-block text-[#ffd18b]" aria-live="polite">{audience.label}.</span>
                </h1>
                <p className="mt-7 max-w-xl text-lg leading-relaxed text-[#d5e7e2] sm:text-xl">We build practical apps and automations, help you choose the right tools, and show your team how to use AI with confidence—especially {audience.description}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link href="/connect" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f3bd72] px-5 py-3 text-sm font-extrabold text-[#1d2e2b] transition hover:-translate-y-0.5 hover:bg-[#ffd18b]">Talk to Scott <ArrowRight className="h-4 w-4" /></Link>
                  <Link href="/max" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#a8e3db]/60 bg-[#143c38] px-5 py-3 text-sm font-extrabold text-[#d7f4ee] transition hover:-translate-y-0.5 hover:border-[#d7f4ee] hover:bg-[#1a4943]">Explore an idea with Max <ArrowRight className="h-4 w-4" /></Link>
                  <Link href="/work" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/18">See what we build</Link>
                </div>
                <p className="mt-3 text-sm font-semibold text-[#b5d6d0]">Not sure where to start? That’s welcome here.</p>
                <div className="mt-10 flex flex-wrap gap-2" aria-label="Who South Shore AI helps">
                  {audiences.map((item, index) => (
                    <button key={item.label} type="button" onClick={() => setAudienceIndex(index)} aria-pressed={audienceIndex === index} className={`group inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold transition ${audienceIndex === index ? 'border-[#f4c682] bg-white/15 text-white' : 'border-white/15 text-[#c4d9d3] hover:border-white/35 hover:text-white'}`}>
                      <span className="grid h-5 min-w-5 place-items-center rounded-full px-1 text-[9px] font-extrabold text-white" style={{ backgroundColor: item.color }}>{item.marker}</span>
                      {item.label}
                    </button>
                  ))}
                </div>
                <button type="button" onClick={() => setIsMotionPaused((paused) => !paused)} aria-pressed={isMotionPaused} className="mt-3 text-xs font-bold text-[#b5d6d0] underline decoration-white/30 underline-offset-4 transition hover:text-white">
                  {isMotionPaused ? 'Play rotating content' : 'Pause rotating content'}
                </button>
              </div>
            </div>
            <figure className="relative min-h-[350px] overflow-hidden lg:min-h-full">
              <img src="/assets/ssai-redesign/new-england-owner-hero.jpg" alt="Small-business owner working in a New England office during fall" className="absolute inset-0 h-full w-full object-cover object-[65%_center]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#112622]/75 via-transparent to-transparent" aria-hidden="true" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-7 sm:p-10"><p className="max-w-sm text-sm font-semibold leading-relaxed text-white">Useful AI should feel close to the work, not far away from it.</p></figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-[#ece5f8] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24" aria-labelledby="togetha-heading">
        <div className="ssai-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-extrabold uppercase tracking-[0.13em] text-[#62419b] shadow-sm">Featured project · Togetha</p>
            <h2 id="togetha-heading" className="mt-5 text-4xl font-extrabold leading-[1.02] sm:text-5xl">A working product tells a better story than a promise.</h2>
            <p className="mt-5 text-lg leading-relaxed text-[#53476b]">Togetha is a platform for friendship and dating for autistic adults and adults with intellectual and developmental disabilities. It is one example of how SSAI turns a complicated human need into a thoughtful, working application.</p>
            <p className="project-status mt-6"><strong>Current status:</strong> Working version preparing for supervised volunteer testing in Massachusetts. Not open for public account creation.</p>
            <Link href="/togetha" className="togetha-button mt-7">Explore Togetha in detail <ArrowRight className="h-4 w-4" /></Link>
          </div>

          <div className="rounded-[1.65rem] bg-[#1e1830] p-4 shadow-[0_24px_55px_rgba(65,43,104,0.22)] sm:p-6">
            <div className="grid gap-5 md:grid-cols-[0.58fr_0.42fr] md:items-center">
              <div className="relative flex min-h-[400px] items-center justify-center overflow-hidden rounded-[1.1rem] bg-[#faf8fd] p-4 sm:min-h-[480px]">
                <img key={scene.filename} src={`/screenshots/${scene.filename}`} alt={scene.alt} className="max-h-[440px] w-auto rounded-xl object-contain shadow-[0_14px_30px_rgba(39,25,67,0.18)]" />
              </div>
              <div className="py-2 md:pr-2">
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#c9b0f7]">{scene.label}</p>
                <h3 className="mt-3 text-2xl font-extrabold leading-tight text-white">{scene.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[#d8cfeb]">{scene.description}</p>
                <div className="mt-6 space-y-2">
                  {togethaScenes.map((item, index) => (
                    <button key={item.label} type="button" onClick={() => setSceneIndex(index)} aria-pressed={sceneIndex === index} className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-xs font-bold transition ${sceneIndex === index ? 'bg-[#6a46a7] text-white' : 'text-[#c7bfd9] hover:bg-white/10 hover:text-white'}`}>
                      <span>{item.label}</span><ChevronRight className="h-3.5 w-3.5" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-xs leading-relaxed text-[#c9c0db]">Screens show simulated accounts and demo data from the Togetha working build.</p>
          </div>
        </div>
      </section>

      <section className="ssai-section bg-[#fbfaf7]" aria-labelledby="proof-heading">
        <div className="ssai-container overflow-hidden rounded-[1.8rem] bg-[#1d312e] shadow-[0_20px_52px_rgba(19,43,39,0.14)]">
          <div className="relative grid gap-0 lg:grid-cols-[0.94fr_1.06fr]">
            <img src="/assets/ssai-redesign/new-england-team-proof.jpg" alt="Small business leadership team reviewing information together in a New England workspace" className="absolute inset-0 h-full w-full object-cover opacity-25" loading="lazy" />
            <div className="relative border-b border-white/15 p-7 text-white sm:p-10 lg:border-b-0 lg:border-r lg:p-14">
              <p className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.15em] text-[#b0e6dc]"><span className="h-px w-7 bg-[#b0e6dc]" />Built and running</p>
              <h2 id="proof-heading" className="mt-5 text-4xl font-extrabold leading-[1.02] text-white sm:text-5xl">Work that makes day-to-day decisions easier.</h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#d2e4df]">The best proof is work that people can use: a client portal, a private leadership system, a community, or a local lead engine. Here is a grounded look at what SSAI has built or operated.</p>
              <Link href="/work" className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-[#f4c682] underline-offset-4 hover:underline">See the work behind the headlines <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="relative grid gap-3 p-5 sm:grid-cols-2 sm:p-8 lg:p-10">
              {proofCards.map((card) => (
                <article key={card.title} className="rounded-2xl border border-white/15 bg-[#142724]/82 p-5 backdrop-blur-sm">
                  <p className={`text-[10px] font-extrabold uppercase tracking-[0.13em] ${card.tone === 'violet' ? 'text-[#d5bdff]' : card.tone === 'orange' ? 'text-[#f3bd72]' : card.tone === 'blue' ? 'text-[#94d8ea]' : 'text-[#a8e3d9]'}`}>{card.eyebrow}</p>
                  <h3 className="mt-3 text-xl font-extrabold leading-tight text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#d1dfdb]">{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WorkflowProof />

      <section className="bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
        <a href="/resources/" className="ssai-container group grid gap-7 border border-[#ffcaad] bg-[#fff3ed] p-7 transition hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(185,85,0,0.14)] sm:p-10 lg:grid-cols-[auto_1fr_auto] lg:items-center">
          <span className="grid h-14 w-14 place-items-center rounded-md bg-[#ef7723] text-white"><BookOpen className="h-7 w-7" /></span>
          <span>
            <span className="block text-xs font-extrabold uppercase tracking-[0.15em] text-[#b95500]">Start with a free guide</span>
            <span className="mt-2 block text-2xl font-extrabold leading-tight text-[#272d2e] sm:text-3xl">A clear, less overwhelming way to begin using AI.</span>
            <span className="mt-2 block max-w-3xl text-base leading-relaxed text-[#6d4a36]">Explore the Everyday Muse Starter Guide for practical examples, copy-ready prompts, and a grounded review-before-action rule.</span>
          </span>
          <span className="inline-flex items-center gap-2 text-sm font-extrabold text-[#b95500] transition group-hover:translate-x-1">Explore Resources <ArrowRight className="h-4 w-4" /></span>
        </a>
      </section>

      <section className="ssai-section" aria-labelledby="process-heading">
        <div className="ssai-container grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div>
            <p className="ssai-eyebrow">How working with us works</p>
            <h2 id="process-heading" className="mt-4 text-4xl font-extrabold sm:text-5xl">Start with one problem.</h2>
            <p className="mt-5 text-lg leading-relaxed text-[#52645f]">You do not need a finished technology plan. Bring the task, decision, or stuck process, and we will help you identify a useful next step.</p>
          </div>
          <ol className="divide-y divide-[#dce4df] border-y border-[#dce4df]">
            {[
              ['01', 'Tell us what’s slowing you down.', 'We learn what you need and how the work happens today.'],
              ['02', 'Get a clear plan.', 'We agree on the solution, scope, price, and how we will judge success.'],
              ['03', 'Put it to work.', 'We build or configure the solution and help your team use it.'],
            ].map(([number, title, text]) => (
              <li key={number} className="grid gap-4 py-6 sm:grid-cols-[4.5rem_1fr] sm:py-7"><span className="text-sm font-extrabold tracking-[0.15em] text-[#0a857d]">{number}</span><div><h3 className="text-2xl font-extrabold">{title}</h3><p className="mt-2 text-lg leading-relaxed text-[#52645f]">{text}</p></div></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="ssai-section pt-0" aria-labelledby="about-scott-heading">
        <div className="ssai-container overflow-hidden border border-[#b0e1ea] bg-white shadow-[0_18px_40px_rgba(19,105,117,0.1)] lg:grid lg:grid-cols-[0.7fr_1.3fr]">
          <figure className="bg-[#f9e1c3] p-3">
            <img src="/assets/ssai-brand/scott-beach-sunset.jpg" alt="Scott Pralinsky at the beach during sunset" className="aspect-[3/4] h-full w-full object-cover" loading="lazy" />
          </figure>
          <div className="flex flex-col justify-center bg-[#eaf9fc] p-7 sm:p-10 lg:p-14">
            <p className="ssai-eyebrow">About Scott</p>
            <h2 id="about-scott-heading" className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">Leadership experience and hands-on building in the same conversation.</h2>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#4e625e]">Scott Pralinsky helps leaders understand AI, choose useful tools, and turn ideas into working solutions.</p>
            <Link href="/about" className="ssai-link mt-6">Learn more about South Shore AI <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
};
