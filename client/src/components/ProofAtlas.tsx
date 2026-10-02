import { useState, type ElementType } from "react";
import { ArrowRight, BarChart3, Heart, ShieldCheck, Sparkles, UsersRound } from "lucide-react";
import { Link } from "wouter";

type EvidencePoint = {
  value: string;
  label: string;
  summary: string;
  memberMeaning: string;
  partnerMeaning: string;
  source: string;
  caveat: string;
  icon: ElementType;
  accent: "purple" | "blue" | "green" | "coral";
};

const evidence: EvidencePoint[] = [
  {
    value: "95%",
    label: "Want connection",
    summary: "Of 69 adults surveyed, 95% said they want friendship, dating, or a romantic relationship.",
    memberMeaning: "Wanting friendship, dating, or love is normal. You are not alone in wanting it.",
    partnerMeaning: "The evidence begins with a clear statement of need from the people this framework is designed to serve.",
    source: "Hopeful Hearts Dating, Friendship & Relationships Survey · 69 autistic adults and adults with I/DD · August 2026",
    caveat: "Survey result; it is not a count of active Togetha members.",
    icon: Heart,
    accent: "purple",
  },
  {
    value: "45% / 12%",
    label: "Confidence, not technology",
    summary: "45% said confidence or anxiety gets in the way; only 12% said technology is difficult.",
    memberMeaning: "A good tool should feel calm and supportive, not make you prove you can keep up.",
    partnerMeaning: "The clearest design response is pacing, choice, and optional support—not simply adding more technology.",
    source: "Hopeful Hearts Dating, Friendship & Relationships Survey · August 2026",
    caveat: "Self-reported barriers from surveyed adults; the figures describe this survey cohort.",
    icon: Sparkles,
    accent: "blue",
  },
  {
    value: "35",
    label: "Volunteered to test",
    summary: "35 adults volunteered to help test the working build when surveyed.",
    memberMeaning: "People asked to be part of shaping what comes next.",
    partnerMeaning: "The supervised volunteer test begins with people who have already raised their hands to participate.",
    source: "Hopeful Hearts survey · August 2026",
    caveat: "Volunteers preparing for a supervised test, not current public-service members.",
    icon: UsersRound,
    accent: "green",
  },
  {
    value: "90%",
    label: "Made a friendship match",
    summary: "90% of pilot attendees made at least one friendship match; four couples were dating.",
    memberMeaning: "A supported event can make it easier to meet someone new.",
    partnerMeaning: "The human program has encouraging pilot evidence that should be understood in its small-event context.",
    source: "DDS presentation · pilot event evaluation",
    caveat: "Small events. The figure is not a platform-wide outcome or a prediction.",
    icon: Heart,
    accent: "coral",
  },
  {
    value: "22% → 0%",
    label: "Anxiety at events",
    summary: "Reported anxiety was 22% on arrival and 0% on leaving a pilot event.",
    memberMeaning: "A welcoming, supported event can feel easier by the time it ends.",
    partnerMeaning: "Experience quality matters. The model measures how people feel, not only whether they attend.",
    source: "DDS presentation · Pilot 2 post-event survey",
    caveat: "27 responses on arrival and 22 at departure; do not generalize beyond this sample.",
    icon: ShieldCheck,
    accent: "green",
  },
];

const accentClasses = {
  purple: "border-togetha-purpleLight/35 bg-togetha-purple/15 text-togetha-purpleLight",
  blue: "border-brand-tealLight/35 bg-brand-teal/15 text-brand-tealLight",
  green: "border-togetha-greenLight/35 bg-togetha-green/15 text-togetha-greenLight",
  coral: "border-brand-orange/40 bg-brand-orange/15 text-brand-orange",
};

export function ProofAtlas() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeEvidence = evidence[activeIndex];
  const ActiveIcon = activeEvidence.icon;

  return (
    <section id="proof-atlas" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="proof-atlas-title">
      <div className="grid gap-8 rounded-[2rem] border border-brand-tealLight/20 bg-[linear-gradient(145deg,rgba(19,30,57,0.96),rgba(13,21,43,0.98))] p-5 shadow-2xl sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
        <div className="space-y-5">
          <div className="space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-brand-tealLight">Documented evidence</p>
            <h2 id="proof-atlas-title" className="brand-page-title text-3xl font-bold tracking-tight sm:text-4xl">
              We listened before we built.
            </h2>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              These are documented survey and pilot findings—not generic hype. Select a signal to see what it means and where it came from.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2" aria-label="Evidence signals">
            {evidence.map((item, index) => {
              const isActive = index === activeIndex;
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={isActive}
                  className={`rounded-2xl border p-4 text-left transition-colors ${
                    isActive ? "border-togetha-purpleLight/65 bg-brand-slate text-white shadow-lg" : "border-white/10 bg-white/[0.035] text-slate-200 hover:border-brand-tealLight/45 hover:bg-white/[0.07]"
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? "text-togetha-purpleLight" : "text-brand-tealLight"}`} aria-hidden="true" />
                  <p className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">{item.value}</p>
                  <p className="mt-1 text-xs font-semibold leading-snug text-slate-300">{item.label}</p>
                </button>
              );
            })}
          </div>
        </div>

        <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#121C37] p-6 sm:p-8" aria-live="polite">
          <div className={`absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl ${activeEvidence.accent === "purple" ? "bg-togetha-purple/30" : activeEvidence.accent === "blue" ? "bg-brand-teal/25" : activeEvidence.accent === "green" ? "bg-togetha-green/25" : "bg-brand-orange/25"}`} />
          <div className="relative space-y-5">
            <div className="flex items-start gap-4">
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${accentClasses[activeEvidence.accent]}`}>
                <ActiveIcon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Evidence signal {activeIndex + 1} of {evidence.length}</p>
                <h3 className="mt-1 text-2xl font-bold text-white">{activeEvidence.label}</h3>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-slate-100">{activeEvidence.summary}</p>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-togetha-purpleLight/20 bg-togetha-purple/10 p-4">
                <p className="text-[10px] font-mono uppercase tracking-wider text-togetha-purpleLight">For members & families</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-100">{activeEvidence.memberMeaning}</p>
              </div>
              <div className="rounded-2xl border border-brand-tealLight/20 bg-brand-teal/10 p-4">
                <p className="text-[10px] font-mono uppercase tracking-wider text-brand-tealLight">For founding partners</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-100">{activeEvidence.partnerMeaning}</p>
              </div>
            </div>

            <div className="space-y-2 rounded-2xl border border-white/10 bg-black/20 p-4 text-xs leading-relaxed">
              <p><span className="font-mono uppercase tracking-wider text-brand-tealLight">Source</span><span className="ml-2 text-slate-200">{activeEvidence.source}</span></p>
              <p><span className="font-mono uppercase tracking-wider text-brand-orange">Context</span><span className="ml-2 text-slate-300">{activeEvidence.caveat}</span></p>
            </div>

            <Link href="/founding-partners" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-tealLight transition-colors hover:text-white">
              See the founding partner opportunity
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
