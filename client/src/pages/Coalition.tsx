import { useState, type ElementType } from "react";
import { ArrowRight, BookOpenCheck, Building2, HeartHandshake, Landmark, ShieldCheck, UsersRound } from "lucide-react";
import { Link } from "wouter";

type CoalitionRole = {
  name: string;
  label: string;
  responsibility: string;
  contribution: string;
  boundary: string;
  icon: ElementType;
  tone: "purple" | "teal" | "green" | "coral";
};

const roles: CoalitionRole[] = [
  {
    name: "Member",
    label: "Center of every decision",
    responsibility: "Chooses goals, pace, supporter access, and what remains private.",
    contribution: "Sets the direction for friendship, dating, support, and safety choices.",
    boundary: "No partner makes relationship or consent choices on the member’s behalf by default.",
    icon: UsersRound,
    tone: "purple",
  },
  {
    name: "Hopeful Hearts Initiative",
    label: "Mission & public stewardship",
    responsibility: "Provides statewide governance, scholarship administration, and the public mission face.",
    contribution: "Keeps access, equity, and supported connection at the centre of the public framework.",
    boundary: "Mission governance does not mean operating the technology platform.",
    icon: HeartHandshake,
    tone: "coral",
  },
  {
    name: "Eunice Kennedy Shriver Center",
    label: "Research & training partner",
    responsibility: "Supports research and training within the programme model.",
    contribution: "Brings evidence-minded practice and training collaboration to the work.",
    boundary: "The site does not imply that the Shriver Center currently holds a DDS contract.",
    icon: BookOpenCheck,
    tone: "teal",
  },
  {
    name: "WORK Inc",
    label: "Programme partner",
    responsibility: "Partners on in-person coaching and community programme activity.",
    contribution: "Helps make supported, real-world connection opportunities possible.",
    boundary: "WORK Inc is not presented as the operator of the Togetha platform.",
    icon: Building2,
    tone: "green",
  },
  {
    name: "Dating coaches",
    label: "Human support",
    responsibility: "Guide relationship skills work and in-person matching events within the human programme.",
    contribution: "Offer practical, human support where an app alone is not enough.",
    boundary: "The platform does not claim to replace coach-led support or run events itself.",
    icon: Landmark,
    tone: "purple",
  },
  {
    name: "South Shore AI",
    label: "Platform & operations",
    responsibility: "Builds, owns, and operates the platform and safety operations under contract to Hopeful Hearts.",
    contribution: "Brings the working technology, operational discipline, and platform safeguards to the partnership.",
    boundary: "Technology operations do not override member autonomy or Hopeful Hearts’ mission governance.",
    icon: ShieldCheck,
    tone: "teal",
  },
];

const toneClasses = {
  purple: "border-togetha-purpleLight/35 bg-togetha-purple/15 text-togetha-purpleLight",
  teal: "border-brand-tealLight/35 bg-brand-teal/15 text-brand-tealLight",
  green: "border-togetha-greenLight/35 bg-togetha-green/15 text-togetha-greenLight",
  coral: "border-brand-orange/40 bg-brand-orange/15 text-brand-orange",
};

export const Coalition: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = roles[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <section className="max-w-4xl space-y-4">
        <span className="text-xs font-mono uppercase tracking-wider text-brand-tealLight font-bold">The coalition model</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">A member-first system with clear responsibilities.</h1>
        <p className="text-lg text-slate-300 font-serif leading-relaxed">Togetha works because each partner has a distinct job. Explore the coalition to see what each part contributes—and the boundaries that keep member choice at the centre.</p>
      </section>

      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#101A35] p-5 shadow-2xl sm:p-8 lg:p-10" aria-labelledby="coalition-explorer-title">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-togetha-purpleLight/10" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-tealLight/15" />
        <div className="relative">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-togetha-purpleLight">Explore the system</p>
            <h2 id="coalition-explorer-title" className="brand-page-title text-3xl font-bold tracking-tight sm:text-4xl">The member remains the centre of every connection.</h2>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">Select a role to see its contribution and the responsibility it does not take on.</p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" aria-label="Coalition roles">
            {roles.map((role, index) => {
              const Icon = role.icon;
              const isActive = index === activeIndex;
              return (
                <button key={role.name} type="button" onClick={() => setActiveIndex(index)} aria-pressed={isActive} className={`rounded-2xl border p-4 text-left transition-colors ${isActive ? "border-togetha-purpleLight/65 bg-brand-slate shadow-lg" : "border-white/10 bg-white/[0.035] hover:border-brand-tealLight/45 hover:bg-white/[0.07]"}`}>
                  <Icon className={`h-5 w-5 ${isActive ? "text-togetha-purpleLight" : "text-brand-tealLight"}`} aria-hidden="true" />
                  <p className="mt-3 text-base font-bold text-white">{role.name}</p>
                  <p className="mt-1 text-xs text-slate-400">{role.label}</p>
                </button>
              );
            })}
          </div>

          <article className="mt-6 grid gap-5 rounded-3xl border border-white/10 bg-black/25 p-6 sm:p-8 lg:grid-cols-[0.75fr_1.25fr]" aria-live="polite">
            <div className={`flex h-fit w-fit items-center gap-3 rounded-2xl border px-4 py-3 ${toneClasses[active.tone]}`}>
              <ActiveIcon className="h-5 w-5" aria-hidden="true" />
              <div><p className="text-sm font-bold">{active.name}</p><p className="text-xs opacity-80">{active.label}</p></div>
            </div>
            <div className="space-y-4">
              <div><p className="text-[10px] font-mono uppercase tracking-wider text-brand-tealLight">Responsibility</p><p className="mt-1 text-base leading-relaxed text-white">{active.responsibility}</p></div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-togetha-purpleLight/20 bg-togetha-purple/10 p-4"><p className="text-[10px] font-mono uppercase tracking-wider text-togetha-purpleLight">Contribution</p><p className="mt-2 text-sm leading-relaxed text-slate-100">{active.contribution}</p></div>
                <div className="rounded-2xl border border-brand-orange/25 bg-brand-orange/10 p-4"><p className="text-[10px] font-mono uppercase tracking-wider text-brand-orange">Important boundary</p><p className="mt-2 text-sm leading-relaxed text-slate-100">{active.boundary}</p></div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        <div className="glass-panel rounded-3xl border border-white/10 p-7 space-y-3"><h2 className="text-2xl font-bold text-white">The human programme</h2><p className="text-sm leading-relaxed text-slate-300">Coaches, training, and community opportunities support connection in the real world. They complement the platform; they are not features hidden inside it.</p><Link href="/partners/coaches" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-tealLight hover:text-white">Explore the coach model <ArrowRight className="h-4 w-4" /></Link></div>
        <div className="glass-panel rounded-3xl border border-white/10 p-7 space-y-3"><h2 className="text-2xl font-bold text-white">The technology platform</h2><p className="text-sm leading-relaxed text-slate-300">South Shore AI provides the working platform and operations. Hopeful Hearts holds the public mission role. Together, the coalition can be both disciplined and human.</p><Link href="/togetha" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-tealLight hover:text-white">Explore the platform <ArrowRight className="h-4 w-4" /></Link></div>
      </section>
    </div>
  );
};
