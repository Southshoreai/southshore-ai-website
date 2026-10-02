import { useState, type ComponentType } from "react";
import {
  ArrowRight,
  BookOpenCheck,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

type CareRole = {
  id: "hopeful-hearts" | "ssai" | "shriver";
  organization: string;
  eyebrow: string;
  role: string;
  summary: string;
  familyBenefit: string;
  image: string;
  imageAlt: string;
  icon: ComponentType<{ className?: string }>;
  accent: string;
  activeAccent: string;
};

const careRoles: CareRole[] = [
  {
    id: "hopeful-hearts",
    organization: "Hopeful Hearts Initiative",
    eyebrow: "Mission & community",
    role: "Founder and coalition leader—sets the Massachusetts mission and standards, spreads the word, represents the coalition, and approves scholarship support.",
    summary:
      "Hopeful Hearts leads the charge, brings local relationships together, and keeps the work rooted in belonging.",
    familyBenefit:
      "Members and families have a trusted, visible advocate for the mission and the wider coalition.",
    image: "/assets/circle-of-care/hopeful-hearts-care.webp",
    imageAlt: "Abstract warm violet and coral forms creating a protective circle of care.",
    icon: HeartHandshake,
    accent: "border-togetha-purple/35 bg-togetha-purple/10 text-togetha-purpleLight",
    activeAccent: "border-togetha-purpleLight/70 bg-togetha-purple/20 shadow-[0_0_32px_rgba(111,71,198,0.22)]",
  },
  {
    id: "ssai",
    organization: "South Shore AI",
    eyebrow: "Platform & accountability",
    role: "Builds and operates the platform; staffs its technology, customer support, safety, and moderation under contract to Hopeful Hearts—and provides trained dating coaches for people without a provider-based coach.",
    summary:
      "South Shore AI keeps the technology dependable and makes sure there are paid people responsible for the work that happens behind the screen and beside the member when needed.",
    familyBenefit:
      "No one needs a provider in place to have a path to technology, safety, and coached support.",
    image: "/assets/circle-of-care/ssai-operations.webp",
    imageAlt: "Abstract teal and cobalt structures forming a protected space around a warm connection light.",
    icon: ShieldCheck,
    accent: "border-brand-teal/35 bg-brand-teal/10 text-brand-tealLight",
    activeAccent: "border-brand-tealLight/70 bg-brand-teal/20 shadow-[0_0_32px_rgba(45,212,191,0.18)]",
  },
  {
    id: "shriver",
    organization: "Eunice Kennedy Shriver Center at UMass Chan Medical School",
    eyebrow: "Research & training",
    role: "The program home. Dr. Eileen Crehan leads the research, dating-coach training, and in-person events.",
    summary:
      "The Shriver Center anchors the wider program in research, coach development, learning, and real community connection.",
    familyBenefit:
      "Research, trained coaches, and in-person events give people support that reaches beyond the screen.",
    image: "/assets/circle-of-care/shriver-research.webp",
    imageAlt: "Abstract blue-violet learning pathways and luminous points becoming a warm human connection.",
    icon: BookOpenCheck,
    accent: "border-brand-orange/35 bg-brand-orange/10 text-brand-orange",
    activeAccent: "border-brand-orange/70 bg-brand-orange/20 shadow-[0_0_32px_rgba(239,119,35,0.18)]",
  },
];

export function CircleOfCare() {
  const [selectedId, setSelectedId] = useState<CareRole["id"]>("hopeful-hearts");
  const selectedRole = careRoles.find((role) => role.id === selectedId) ?? careRoles[0];
  const SelectedIcon = selectedRole.icon;

  return (
    <section id="circle-of-care" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="circle-of-care-title">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#091426] p-5 shadow-2xl sm:rounded-[2.5rem] sm:p-8 lg:p-12">
        <div className="pointer-events-none absolute -left-28 top-16 h-72 w-72 rounded-full bg-togetha-purple/20 blur-[110px]" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-brand-teal/15 blur-[110px]" />

        <div className="relative space-y-8 sm:space-y-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-teal/30 bg-brand-teal/10 px-3 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-brand-tealLight">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              One circle · clear responsibilities
            </span>
            <h2 id="circle-of-care-title" className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Care works better when every partner has a clear part.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              Togetha brings together a program home for research and coach training, a founder-led coalition that carries the mission, and accountable platform operations. Provider teams can add local help when a member chooses it. The circle stays around members and families—not a handoff from one organization to the next.
            </p>
          </div>

          <div className="grid items-stretch gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
            <div className="relative min-h-[23rem] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0B1930] sm:min-h-[29rem]">
              <img
                src="/assets/circle-of-care/circle-of-care-network.webp"
                alt="Three luminous pathways forming a calm connected circle around the people it supports."
                className="absolute inset-0 h-full w-full object-cover opacity-85"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(9,20,38,0.05)_0%,rgba(9,20,38,0.55)_72%,rgba(9,20,38,0.9)_100%)]" />

              <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/25 bg-[#111d35]/90 p-4 text-center shadow-[0_0_0_12px_rgba(255,255,255,0.04),0_18px_55px_rgba(5,10,24,0.45)] backdrop-blur-md sm:h-40 sm:w-40">
                <span className="text-sm font-bold leading-tight text-white sm:text-base">Members &amp;<br />families</span>
                <span className="mt-1 text-[10px] font-mono uppercase tracking-[0.16em] text-brand-tealLight">at the center</span>
              </div>

              <div className="absolute left-4 top-5 max-w-[9rem] rounded-xl border border-togetha-purpleLight/30 bg-[#131e38]/90 px-3 py-2.5 text-left backdrop-blur-md sm:left-7 sm:top-8 sm:max-w-[11rem]">
                <p className="text-[10px] font-mono uppercase tracking-wider text-togetha-purpleLight">Hopeful Hearts</p>
                <p className="mt-1 text-xs font-semibold leading-snug text-white">Founder, coalition &amp; scholarships</p>
              </div>
              <div className="absolute right-4 top-5 max-w-[9rem] rounded-xl border border-brand-tealLight/30 bg-[#131e38]/90 px-3 py-2.5 text-right backdrop-blur-md sm:right-7 sm:top-8 sm:max-w-[11rem]">
                <p className="text-[10px] font-mono uppercase tracking-wider text-brand-tealLight">South Shore AI</p>
                <p className="mt-1 text-xs font-semibold leading-snug text-white">Technology, safety &amp; coaching</p>
              </div>
              <div className="absolute bottom-5 left-1/2 max-w-[13rem] -translate-x-1/2 rounded-xl border border-brand-orange/35 bg-[#131e38]/90 px-3 py-2.5 text-center backdrop-blur-md sm:bottom-8 sm:max-w-[16rem]">
                <p className="text-[10px] font-mono uppercase tracking-wider text-brand-orange">Shriver Center</p>
                <p className="mt-1 text-xs font-semibold leading-snug text-white">Research, coach training &amp; events</p>
              </div>
            </div>

            <article className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0C172B]">
              <img
                src={selectedRole.image}
                alt={selectedRole.imageAlt}
                className="h-44 w-full object-cover sm:h-52"
                loading="lazy"
              />
              <div className="space-y-5 p-6 sm:p-8">
                <div className="flex items-start gap-3">
                  <span className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${selectedRole.accent}`}>
                    <SelectedIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-slate-400">{selectedRole.eyebrow}</p>
                    <h3 className="mt-1 text-xl font-bold leading-tight text-white sm:text-2xl">{selectedRole.organization}</h3>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-slate-300 sm:text-base">{selectedRole.role}</p>
                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-brand-tealLight">Why this matters</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-200">{selectedRole.familyBenefit}</p>
                </div>
                <p className="text-sm leading-relaxed text-slate-400">{selectedRole.summary}</p>
              </div>
            </article>
          </div>

          <div className="grid gap-3 md:grid-cols-3" role="group" aria-label="Explore each Circle of Care partner">
            {careRoles.map((role) => {
              const Icon = role.icon;
              const isSelected = selectedId === role.id;

              return (
                <button
                  key={role.id}
                  type="button"
                  onClick={() => setSelectedId(role.id)}
                  aria-pressed={isSelected}
                  className={`group rounded-2xl border p-4 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-tealLight focus-visible:ring-offset-2 focus-visible:ring-offset-[#091426] ${
                    isSelected ? role.activeAccent : "border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.06]"
                  }`}
                >
                  <span className={`inline-flex h-9 w-9 items-center justify-center rounded-xl border ${role.accent}`}>
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <p className="mt-3 text-sm font-bold text-white">{role.organization}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400">{role.eyebrow}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-tealLight">
                    {isSelected ? "Viewing this role" : "Explore this role"}
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mx-auto flex max-w-4xl items-start gap-3 rounded-2xl border border-brand-teal/25 bg-brand-teal/[0.07] p-4 sm:p-5">
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-brand-teal/35 bg-brand-teal/10 text-brand-tealLight">
              <HeartHandshake className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-bold text-white">Provider agencies can extend the circle.</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-300">
                When a member chooses to work with a provider agency, its team can add local dating coaches, host in-person events, help members get to and from those events, provide practical assistance, and work as paid Supporters for app functions—all within the member’s consent and control.
              </p>
            </div>
          </div>

          <p className="mx-auto max-w-4xl text-center text-xs leading-relaxed text-slate-400">
            Hopeful Hearts is the founder and coalition lead, including scholarship approval. South Shore AI supplies staffed platform operations, customer support, safety, moderation, and coaching support where a provider-based coach is not available. The Eunice Kennedy Shriver Center at UMass Chan Medical School is the program home for research, dating-coach training, and in-person events led by Dr. Eileen Crehan.
          </p>
        </div>
      </div>
    </section>
  );
}
