import { useState, type ElementType } from "react";
import { Accessibility, Eye, Route, SlidersHorizontal, Smartphone } from "lucide-react";

type Mode = {
  name: string;
  number: string;
  label: string;
  description: string;
  reassurance: string;
  details: string[];
  icon: ElementType;
  tone: "blue" | "purple" | "green" | "coral";
};

const modes: Mode[] = [
  {
    name: "Everyday",
    number: "01",
    label: "Familiar and flexible",
    description: "A modern, familiar smartphone experience for members who prefer a typical app layout and do not need additional simplification.",
    reassurance: "A familiar interface does not mean less safety or fewer choices.",
    details: ["Typical phone-app patterns", "Member-paced discovery", "Private, consent-based support"],
    icon: Smartphone,
    tone: "blue",
  },
  {
    name: "Standard",
    number: "02",
    label: "Clear and balanced",
    description: "A clean hierarchy with direct labels, high-contrast badges, and paced profile discovery for people who want more context without more clutter.",
    reassurance: "Clarity is part of accessibility—not an add-on.",
    details: ["Direct labels and icons", "Clear context at each step", "Consistent safety cues"],
    icon: Eye,
    tone: "purple",
  },
  {
    name: "Simplified",
    number: "03",
    label: "Less at once",
    description: "Larger touch targets, fewer choices on each screen, and an uncluttered view for people who want a quieter visual experience.",
    reassurance: "Simpler presentation still preserves adult choice and privacy.",
    details: ["Bigger touch targets", "Fewer competing choices", "High legibility"],
    icon: Accessibility,
    tone: "green",
  },
  {
    name: "Guided",
    number: "04",
    label: "One step at a time",
    description: "Focused prompts guide a member through one decision at a time, with an Ask for Help action available when they choose to use it.",
    reassurance: "Guidance offers a next step; it does not take the next step for someone.",
    details: ["One focused choice at a time", "Ask for Help when wanted", "Calm, predictable pacing"],
    icon: Route,
    tone: "coral",
  },
];

const toneClasses = {
  blue: "border-brand-tealLight/35 bg-brand-teal/15 text-brand-tealLight",
  purple: "border-togetha-purpleLight/35 bg-togetha-purple/15 text-togetha-purpleLight",
  green: "border-togetha-greenLight/35 bg-togetha-green/15 text-togetha-greenLight",
  coral: "border-brand-orange/40 bg-brand-orange/15 text-brand-orange",
};

export function ModeExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = modes[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <section className="rounded-[2rem] border border-togetha-purpleLight/25 bg-[#101A35] p-5 shadow-2xl sm:p-8 lg:p-10" aria-labelledby="mode-explorer-title">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div className="space-y-3">
          <p className="text-xs font-mono uppercase tracking-wider text-togetha-purpleLight">Four ways in</p>
          <h2 id="mode-explorer-title" className="brand-page-title text-3xl font-bold tracking-tight sm:text-4xl">One platform. More than one right way to use it.</h2>
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">A member chooses the screen style that feels right for them. The underlying rights—privacy, safety, and control—stay the same.</p>
        </div>
        <div className="rounded-2xl border border-brand-tealLight/20 bg-brand-teal/10 p-4 text-sm leading-relaxed text-slate-200">
          <p className="flex items-center gap-2 font-semibold text-brand-tealLight"><SlidersHorizontal className="h-4 w-4" aria-hidden="true" /> Display settings stay separate from screen style.</p>
          <p className="mt-2 text-slate-300">A member can choose large text, high contrast, reduced motion, or read-aloud support without giving up the screen style they prefer.</p>
        </div>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" aria-label="Togetha screen styles">
        {modes.map((mode, index) => {
          const Icon = mode.icon;
          const isActive = index === activeIndex;
          return (
            <button
              key={mode.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-pressed={isActive}
              className={`rounded-2xl border p-4 text-left transition-colors ${
                isActive ? "border-togetha-purpleLight/65 bg-brand-slate shadow-lg" : "border-white/10 bg-white/[0.035] hover:border-brand-tealLight/45 hover:bg-white/[0.07]"
              }`}
            >
              <div className="flex items-center justify-between">
                <Icon className={`h-5 w-5 ${isActive ? "text-togetha-purpleLight" : "text-brand-tealLight"}`} aria-hidden="true" />
                <span className="text-xs font-mono text-slate-500">{mode.number}</span>
              </div>
              <p className="mt-4 text-lg font-bold text-white">{mode.name}</p>
              <p className="mt-1 text-xs font-semibold text-slate-400">{mode.label}</p>
            </button>
          );
        })}
      </div>

      <article className="mt-6 grid gap-6 rounded-3xl border border-white/10 bg-black/20 p-5 sm:p-7 lg:grid-cols-[0.75fr_1.25fr]" aria-live="polite">
        <div className={`flex h-fit w-fit items-center gap-3 rounded-2xl border px-4 py-3 ${toneClasses[active.tone]}`}>
          <ActiveIcon className="h-5 w-5" aria-hidden="true" />
          <div>
            <p className="text-[10px] font-mono uppercase tracking-wider opacity-80">Mode {active.number}</p>
            <p className="text-sm font-bold">{active.name}</p>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">{active.label}</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">{active.description}</p>
          <p className="mt-4 rounded-xl border border-white/10 bg-white/[0.035] p-3 text-sm font-semibold text-white">{active.reassurance}</p>
          <ul className="mt-5 grid gap-2 sm:grid-cols-3">
            {active.details.map((detail) => <li key={detail} className="rounded-xl border border-white/10 bg-white/[0.025] px-3 py-2 text-xs leading-relaxed text-slate-300">{detail}</li>)}
          </ul>
        </div>
      </article>

      <div className="mt-7 grid gap-5 border-t border-white/10 pt-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="text-sm font-bold text-white">A real setting from the working build</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">This verified display-settings screen shows the independent accessibility controls that members can use alongside their preferred screen style.</p>
        </div>
        <div className="mx-auto max-w-sm rounded-2xl border border-white/15 bg-[#F4F0FF] p-2 shadow-xl">
          <img src="/screenshots/11-display-settings.png" alt="Togetha display settings screen with text size, contrast, motion, and read-aloud controls." className="mx-auto max-h-[28rem] w-auto rounded-xl object-contain" />
        </div>
      </div>
    </section>
  );
}
