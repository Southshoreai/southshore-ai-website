import { useState, type ElementType } from "react";
import { ArrowRight, Calendar, GraduationCap, HeartHandshake, ShieldCheck, Sparkles, UsersRound, WalletCards } from "lucide-react";
import { CALENDLY_LINK } from "@/data/siteData";

type Priority = {
  title: string;
  label: string;
  description: string;
  whyNow: string;
  evidence: string;
  source: string;
  icon: ElementType;
  tone: "purple" | "teal" | "green" | "coral";
};

const priorities: Priority[] = [
  {
    title: "The supervised volunteer test",
    label: "Readiness & learning",
    description: "Support the next disciplined step: a supervised test of the working build with volunteers, coaches, and the programme partners.",
    whyNow: "The platform, safety, accessibility, and supporter tools are built. The next question is how the framework works with people in a carefully supported setting.",
    evidence: "35 adults volunteered to help test the working build when surveyed.",
    source: "Hopeful Hearts survey · August 2026",
    icon: UsersRound,
    tone: "teal",
  },
  {
    title: "Dating coach training",
    label: "Human programme",
    description: "Expand the trained, paid dating-coach capacity that joins relationship support to the digital platform.",
    whyNow: "The model is designed around technology and human support working together, not an app alone.",
    evidence: "Three pilots, eight dating coaches trained, and a 70-page manual co-developed with autistic adults.",
    source: "DDS presentation · September 2026",
    icon: GraduationCap,
    tone: "purple",
  },
  {
    title: "Supported matching events",
    label: "Belonging in person",
    description: "Underwrite calm, accessible opportunities for members to meet in person through the programme partners.",
    whyNow: "Survey responses and pilot experience both point beyond online interaction toward real-world connection.",
    evidence: "90% of pilot attendees made at least one friendship match; four couples were dating.",
    source: "DDS presentation · small event context",
    icon: HeartHandshake,
    tone: "green",
  },
  {
    title: "Safety and moderation",
    label: "Trust infrastructure",
    description: "Support trained moderation, pattern-based safety rules, and accountable review processes that help members stay in control.",
    whyNow: "Safety is most credible when it is a visible, supported operating practice—not an afterthought.",
    evidence: "The working build includes safety tips, money-request holds, member reporting tools, and permanent audit trails.",
    source: "Verified Togetha working build · preparing for supervised testing",
    icon: ShieldCheck,
    tone: "coral",
  },
  {
    title: "Scholarship access",
    label: "Open the door",
    description: "Help create a pathway for direct members who are not connected to a provider agency or DDS-funded seat.",
    whyNow: "Connection should not depend on whether a person already has the right institutional doorway.",
    evidence: "Scholarships are part of Hopeful Hearts’ mission role within the model.",
    source: "Approved Togetha marketing brief",
    icon: WalletCards,
    tone: "teal",
  },
];

const toneClasses = {
  purple: "border-togetha-purpleLight/35 bg-togetha-purple/15 text-togetha-purpleLight",
  teal: "border-brand-tealLight/35 bg-brand-teal/15 text-brand-tealLight",
  green: "border-togetha-greenLight/35 bg-togetha-green/15 text-togetha-greenLight",
  coral: "border-brand-orange/40 bg-brand-orange/15 text-brand-orange",
};

export function FoundingPartnerDecisionRoom() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = priorities[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <section className="rounded-[2rem] border border-brand-orange/25 bg-[linear-gradient(145deg,rgba(38,31,58,0.95),rgba(20,31,55,0.98))] p-5 shadow-2xl sm:p-8 lg:p-10" aria-labelledby="decision-room-title">
      <div className="max-w-3xl space-y-3">
        <p className="text-xs font-mono uppercase tracking-wider text-brand-orange">The founding partner decision room</p>
        <h2 id="decision-room-title" className="brand-page-title text-3xl font-bold tracking-tight sm:text-4xl">Choose the door you want to help open.</h2>
        <p className="text-sm leading-relaxed text-slate-300 sm:text-base">A founding briefing starts with your priority. Select an area to see what it supports now, why it matters, and the evidence that makes the conversation concrete.</p>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5" aria-label="Founding partner priorities">
        {priorities.map((priority, index) => {
          const Icon = priority.icon;
          const isActive = index === activeIndex;
          return (
            <button
              key={priority.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-pressed={isActive}
              className={`rounded-2xl border p-4 text-left transition-colors ${
                isActive ? "border-brand-orange/65 bg-brand-orange/15 shadow-lg" : "border-white/10 bg-white/[0.035] hover:border-brand-tealLight/45 hover:bg-white/[0.07]"
              }`}
            >
              <Icon className={`h-5 w-5 ${isActive ? "text-brand-orange" : "text-brand-tealLight"}`} aria-hidden="true" />
              <p className="mt-3 text-sm font-bold leading-snug text-white">{priority.title}</p>
              <p className="mt-1 text-[11px] font-mono uppercase tracking-wide text-slate-400">{priority.label}</p>
            </button>
          );
        })}
      </div>

      <article className="mt-6 grid gap-6 rounded-3xl border border-white/10 bg-black/20 p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr]" aria-live="polite">
        <div className={`flex h-fit w-fit items-center gap-3 rounded-2xl border px-4 py-3 ${toneClasses[active.tone]}`}>
          <ActiveIcon className="h-5 w-5" aria-hidden="true" />
          <span className="text-sm font-bold">{active.label}</span>
        </div>
        <div className="space-y-5">
          <div>
            <h3 className="text-2xl font-bold text-white">{active.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">{active.description}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-togetha-purpleLight/20 bg-togetha-purple/10 p-4">
              <p className="text-[10px] font-mono uppercase tracking-wider text-togetha-purpleLight">Why this matters now</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-100">{active.whyNow}</p>
            </div>
            <div className="rounded-2xl border border-brand-tealLight/20 bg-brand-teal/10 p-4">
              <p className="text-[10px] font-mono uppercase tracking-wider text-brand-tealLight">Documented signal</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-100">{active.evidence}</p>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">{active.source}</p>
            </div>
          </div>

          <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="brand-button-connect inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold">
            <Calendar className="h-4 w-4" aria-hidden="true" />
            Book a private briefing about this priority
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </article>

      <div className="mt-6 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-3">
        <StatusStep label="Built now" body="A working web app with safety, accessibility, and supporter tools." />
        <StatusStep label="Preparing now" body="A supervised test with volunteers, grounded in careful learning and support." />
        <StatusStep label="Learning next" body="Aggregate evidence on experience, accessibility-tool use, and safety processes." />
      </div>
    </section>
  );
}

function StatusStep({ label, body }: { label: string; body: string }) {
  return (
    <div className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.025] p-4">
      <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-brand-tealLight" aria-hidden="true" />
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-white">{label}</p>
        <p className="mt-1 text-xs leading-relaxed text-slate-400">{body}</p>
      </div>
    </div>
  );
}
