import { useState, type ElementType } from "react";
import { ArrowLeft, ArrowRight, Heart, HeartHandshake, ShieldCheck, Sparkles, UsersRound } from "lucide-react";
import { Link } from "wouter";

type JourneyStep = {
  label: string;
  eyebrow: string;
  title: string;
  body: string;
  memberMeaning: string;
  stakeholderMeaning: string;
  image: string;
  imageAlt: string;
  ctaHref: string;
  ctaLabel: string;
  icon: ElementType;
};

const steps: JourneyStep[] = [
  {
    label: "Choose your path",
    eyebrow: "Step 01 · Start with what matters to you",
    title: "A safe place to start looking for connection.",
    body: "Togetha begins with a simple choice: friendship, dating, or both. The goal is not to fit people into a single path. It is to make room for the relationships they want.",
    memberMeaning: "You can begin with friendship, dating, or both. Your choice is yours.",
    stakeholderMeaning: "A purpose-built framework recognizes that connection is broader than dating alone.",
    image: "01-welcome.png",
    imageAlt: "Togetha welcome screen introducing a safe place to meet friends and find love.",
    ctaHref: "/togetha/member-experience",
    ctaLabel: "Explore the member experience",
    icon: Heart,
  },
  {
    label: "Go at your pace",
    eyebrow: "Step 02 · Calm pacing is a safeguard",
    title: "One person at a time. No pressure to rush.",
    body: "Discovery is paced by default, showing up to ten profiles a day. That reduces decision overload and gives each choice the attention it deserves.",
    memberMeaning: "Take your time. There is no rush to decide, reply, or keep going.",
    stakeholderMeaning: "Pacing addresses the confidence and anxiety barriers documented in the Hopeful Hearts survey.",
    image: "04-discover-guided-mode.png",
    imageAlt: "Togetha guided discovery screen displaying one profile at a time.",
    ctaHref: "/views",
    ctaLabel: "See the guided system view",
    icon: Sparkles,
  },
  {
    label: "Choose support",
    eyebrow: "Step 03 · Help when a member wants it",
    title: "Support can be close without taking control.",
    body: "A member can invite a trusted supporter, select the help they want, and remove access at any time. Support is a choice, not a requirement.",
    memberMeaning: "You choose who can help, what they can do, and when their help ends.",
    stakeholderMeaning: "The model makes consent visible through Co-Pilot, Shadow, and Full Delegate roles.",
    image: "12-my-supporters.png",
    imageAlt: "Togetha supporter permissions screen showing member-controlled support options.",
    ctaHref: "/togetha/supporters",
    ctaLabel: "Explore supporter choice",
    icon: HeartHandshake,
  },
  {
    label: "Stay in control",
    eyebrow: "Step 04 · Safety without surveillance",
    title: "Helpful safety moments, not hidden control.",
    body: "When a message includes a phone number or address, Togetha offers a clear safety tip. The member can edit the message or send it anyway. Some money and gift-card requests are held for human review before they appear.",
    memberMeaning: "You get clear information and practical choices when something might not feel safe.",
    stakeholderMeaning: "Safeguards are layered, human-accountable, and designed to protect autonomy.",
    image: "08-safety-tip-in-chat.png",
    imageAlt: "Togetha chat screen displaying an inline safety tip about sharing personal information.",
    ctaHref: "/safety-and-trust",
    ctaLabel: "See how safety works",
    icon: ShieldCheck,
  },
  {
    label: "Build belonging",
    eyebrow: "Step 05 · Connection continues beyond the screen",
    title: "Technology and human connection work together.",
    body: "The Togetha platform is joined to a human programme of trained, paid dating coaches, skills training, and in-person matching events run with the Shriver Center and WORK Inc.",
    memberMeaning: "A screen can be a beginning. Connection can grow through real shared experiences.",
    stakeholderMeaning: "The model joins an accessible platform to real-world support rather than treating technology as the whole answer.",
    image: "14-event.png",
    imageAlt: "Togetha event screen showing a supported community gathering.",
    ctaHref: "/partners/coaches",
    ctaLabel: "Explore the human programme",
    icon: UsersRound,
  },
];

export function ConnectionJourney() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = steps[activeIndex];
  const StepIcon = activeStep.icon;

  const move = (direction: -1 | 1) => {
    setActiveIndex((current) => (current + direction + steps.length) % steps.length);
  };

  return (
    <section id="connection-journey" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="connection-journey-title">
      <div className="relative overflow-hidden rounded-[2rem] border border-togetha-purpleLight/25 bg-[#10182F] px-5 py-8 shadow-2xl sm:px-8 sm:py-12 lg:px-12">
        <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-togetha-purple/20 blur-[110px]" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-brand-teal/15 blur-[100px]" />

        <div className="relative">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-togetha-purpleLight">The Togetha Connection Journey</p>
            <h2 id="connection-journey-title" className="brand-page-title text-3xl font-bold tracking-tight sm:text-4xl">
              What a better way in can feel like.
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Explore how choice, pacing, support, safety, and real-world connection fit together. Each scene comes from the verified working build and the approved programme model.
            </p>
          </div>

          <div className="brand-control-group mt-8 flex gap-2 overflow-x-auto rounded-2xl p-1.5" aria-label="Connection journey scenes">
            {steps.map((step, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={step.label}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={isActive}
                  className={`brand-control min-w-max rounded-xl px-3 py-2.5 text-left text-xs font-semibold sm:px-4 ${isActive ? "brand-control-active" : ""}`}
                >
                  <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full border border-current/30 text-[10px] font-mono">
                    {index + 1}
                  </span>
                  {step.label}
                </button>
              );
            })}
          </div>

          <div className="mt-7 grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12" aria-live="polite">
            <div className="order-2 space-y-5 lg:order-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-togetha-purpleLight/30 bg-togetha-purple/15 px-3 py-1.5 text-xs font-mono text-togetha-purpleLight">
                <StepIcon className="h-3.5 w-3.5" aria-hidden="true" />
                {activeStep.eyebrow}
              </div>
              <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">{activeStep.title}</h3>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">{activeStep.body}</p>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-togetha-purpleLight/25 bg-togetha-purple/10 p-4">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-togetha-purpleLight">For members & families</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-100">{activeStep.memberMeaning}</p>
                </div>
                <div className="rounded-2xl border border-brand-tealLight/25 bg-brand-teal/10 p-4">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-brand-tealLight">For partners & funders</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-100">{activeStep.stakeholderMeaning}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link href={activeStep.ctaHref} className="brand-button-secondary inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold">
                  {activeStep.ctaLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <div className="ml-auto flex gap-2">
                  <button type="button" onClick={() => move(-1)} className="brand-icon-button rounded-xl p-2.5" aria-label="Show previous connection journey step">
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <button type="button" onClick={() => move(1)} className="brand-icon-button rounded-xl p-2.5" aria-label="Show next connection journey step">
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative mx-auto max-w-sm rounded-[2rem] border border-white/15 bg-[#080D18] p-3 shadow-2xl shadow-black/40">
                <div className="absolute inset-x-12 -top-3 h-6 rounded-full bg-togetha-purple/30 blur-xl" />
                <div className="relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#F4F0FF] p-2">
                  <img src={`/screenshots/${activeStep.image}`} alt={activeStep.imageAlt} className="mx-auto max-h-[35rem] w-auto rounded-xl object-contain" />
                </div>
                <div className="absolute bottom-6 left-6 rounded-full border border-white/15 bg-[#0A0E1A]/90 px-3 py-1.5 text-[10px] font-mono text-slate-200 backdrop-blur">
                  Scene {activeIndex + 1} of {steps.length}
                </div>
              </div>
              <p className="mt-3 text-center text-xs text-slate-400">Captured from the working build; names and interactions are demo data.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
