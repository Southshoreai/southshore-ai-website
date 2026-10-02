import { useState, type ComponentType } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  CheckCircle2,
  Heart,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";

type ConstellationPoint = {
  title: string;
  kicker: string;
  description: string;
  detail: string;
  href: string;
  linkLabel: string;
  icon: ComponentType<{ className?: string }>;
  accent: string;
  activeAccent: string;
};

const constellationPoints: ConstellationPoint[] = [
  {
    title: "Your choice leads the way.",
    kicker: "Member choice",
    description:
      "Choose friendship, dating, or both. Take your time, see one person at a time, and pause whenever you need a break.",
    detail: "The member decides their goals, pace, and what stays private.",
    href: "/togetha/member-experience",
    linkLabel: "Explore the member experience",
    icon: Heart,
    accent: "text-togetha-purpleLight border-togetha-purple/45 bg-togetha-purple/15",
    activeAccent: "border-togetha-purpleLight bg-togetha-purple/30 shadow-[0_14px_30px_-20px_rgba(111,71,198,1)]",
  },
  {
    title: "Support is there when you choose it.",
    kicker: "Trusted support",
    description:
      "Invite a supporter, choose the role that feels right, and remove access at any time. Help can be close without taking over.",
    detail: "Support is chosen, scoped, and revocable by the member.",
    href: "/togetha/supporters",
    linkLabel: "See supporter choices",
    icon: UsersRound,
    accent: "text-brand-tealLight border-brand-teal/45 bg-brand-teal/15",
    activeAccent: "border-brand-tealLight bg-brand-teal/25 shadow-[0_14px_30px_-20px_rgba(66,118,180,1)]",
  },
  {
    title: "Safety stays visible, not hidden.",
    kicker: "Clear safety choices",
    description:
      "Plain-language tips, held money requests, and simple report, block, mute, and leave options make it easier to decide what feels right.",
    detail: "Members can step away from a conversation without anyone's permission.",
    href: "/safety-and-trust",
    linkLabel: "See safety and trust",
    icon: ShieldCheck,
    accent: "text-togetha-greenLight border-togetha-green/45 bg-togetha-green/15",
    activeAccent: "border-togetha-greenLight bg-togetha-green/25 shadow-[0_14px_30px_-20px_rgba(53,127,95,1)]",
  },
  {
    title: "Connection grows in the real world, too.",
    kicker: "Human program",
    description:
      "The platform supports connection between relationship-skills learning, trained dating coaches, and in-person matching events.",
    detail: "The app does not deliver coaching or staff events; the human program does.",
    href: "/partners/coaches",
    linkLabel: "Meet the coach model",
    icon: Sparkles,
    accent: "text-[#F19A91] border-brand-orange/45 bg-brand-orange/15",
    activeAccent: "border-[#F5B0A9] bg-brand-orange/25 shadow-[0_14px_30px_-20px_rgba(196,63,52,1)]",
  },
];

export const ConnectionConstellation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePoint = constellationPoints[activeIndex];
  const ActiveIcon = activePoint.icon;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="connection-constellation-heading">
      <div className="constellation-shell relative overflow-hidden rounded-[2rem] border border-togetha-purple/30 px-5 py-8 sm:px-9 sm:py-12 lg:px-12 lg:py-14">
        <img
          src="/assets/constellation/connection-constellation-wide.jpg"
          alt=""
          aria-hidden="true"
          className="constellation-wide-art pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-45"
          loading="lazy"
          decoding="async"
        />
        <div className="constellation-haze pointer-events-none absolute inset-0" aria-hidden="true" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="max-w-xl space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-togetha-purple/40 bg-brand-navy/75 px-3 py-1.5 text-xs font-mono font-semibold uppercase tracking-[0.13em] text-togetha-purpleLight backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Connection constellation
            </span>
            <h2 id="connection-constellation-heading" className="brand-page-title text-3xl font-bold tracking-tight sm:text-4xl">
              One better way in. Four ways to make it yours.
            </h2>
            <p className="font-serif text-base leading-relaxed text-slate-200 sm:text-lg">
              Every point in the Togetha experience is designed to work together—while the member stays at the centre of every decision.
            </p>
            <p className="max-w-lg text-sm leading-relaxed text-slate-300">
              Choose a point to see the kind of connection it helps make possible. Nothing here requires rushing, sharing more than you want, or giving up control.
            </p>
          </div>

          <div className="constellation-control-group rounded-3xl border border-white/10 p-3 sm:p-4">
            <div className="grid grid-cols-2 gap-2" role="group" aria-label="Explore the four parts of the Togetha connection constellation">
              {constellationPoints.map((point, index) => {
                const Icon = point.icon;
                const isActive = index === activeIndex;

                return (
                  <button
                    key={point.kicker}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-pressed={isActive}
                    className={`min-h-12 rounded-2xl border px-3 py-3 text-left transition focus-visible:outline-none sm:px-4 ${
                      isActive
                        ? `bg-brand-navy/90 ${point.activeAccent}`
                        : "border-white/10 bg-black/20 text-slate-200 hover:border-white/30 hover:bg-brand-navy/70"
                    }`}
                  >
                    <span className={`mb-2 inline-flex h-8 w-8 items-center justify-center rounded-xl border ${point.accent}`}>
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="block text-sm font-bold text-white">{point.kicker}</span>
                  </button>
                );
              })}
            </div>

            <article className="constellation-active-panel mt-3 overflow-hidden rounded-2xl border border-white/10 bg-[#101A34]/85 p-5 sm:p-6" aria-live="polite">
              <div className="grid gap-5 sm:grid-cols-[1fr_0.7fr] sm:items-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border ${activePoint.accent}`}>
                      <ActiveIcon className="h-5 w-5" />
                    </span>
                    <span className="text-xs font-mono uppercase tracking-[0.13em] text-slate-400">
                      Point {String(activeIndex + 1).padStart(2, "0")} · {activePoint.kicker}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-white">{activePoint.title}</h3>
                  <p className="font-serif text-sm leading-relaxed text-slate-200 sm:text-base">{activePoint.description}</p>
                  <p className="flex gap-2 text-xs leading-relaxed text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-tealLight" />
                    <span>{activePoint.detail}</span>
                  </p>
                  <Link href={activePoint.href} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-tealLight transition-colors hover:text-white">
                    <span>{activePoint.linkLabel}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="constellation-portal relative mx-auto aspect-square w-full max-w-[240px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0D1428]">
                  <img
                    src="/assets/constellation/connection-constellation-portal.jpg"
                    alt="Abstract glowing constellation portal representing a connected, member-centred experience."
                    className="h-full w-full object-cover opacity-90"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0D1428]/75 via-transparent to-transparent" aria-hidden="true" />
                  <span className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/15 bg-[#0A0E1A]/80 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.12em] text-slate-200 backdrop-blur-sm">
                    Your pace · your way
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
