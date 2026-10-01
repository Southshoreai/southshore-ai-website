import React from "react";
import { ArrowRight, CheckCircle2, ClipboardCheck, HeartHandshake, LineChart, ShieldCheck } from "lucide-react";
import { Link } from "wouter";

const stages: { label: string; title: string; description: string; icon: typeof CheckCircle2; tone: "purple" | "teal" | "green"; links: { href: string; label: string }[] }[] = [
  {
    label: "Built now",
    title: "A working version exists.",
    description: "The Togetha web app runs on phones and computers with demo data. Safety, accessibility, supporter, and moderation tools are part of the working build.",
    icon: CheckCircle2,
    tone: "purple",
    links: [{ href: "/togetha", label: "Explore the working platform" }, { href: "/safety-and-trust", label: "See the safety tools" }],
  },
  {
    label: "Preparing now",
    title: "A supervised volunteer test is the next step.",
    description: "The team is preparing a carefully supported test with volunteers. Thirty-five adults volunteered to help test the working build when surveyed.",
    icon: ClipboardCheck,
    tone: "teal",
    links: [{ href: "/founding-partners", label: "See readiness priorities" }, { href: "/coalition", label: "Meet the coalition" }],
  },
  {
    label: "Learning next",
    title: "Evidence will be measured with care.",
    description: "The public evidence plan centres aggregate experience, accessibility-tool use, volunteer feedback, and safety processes—not personal surveillance or invented outcomes.",
    icon: LineChart,
    tone: "green",
    links: [{ href: "/field-notes", label: "Read the field notes" }, { href: "/accessibility", label: "Read the accessibility statement" }],
  },
];

const toneClasses = {
  purple: "border-togetha-purpleLight/35 bg-togetha-purple/15 text-togetha-purpleLight",
  teal: "border-brand-tealLight/35 bg-brand-teal/15 text-brand-tealLight",
  green: "border-togetha-greenLight/35 bg-togetha-green/15 text-togetha-greenLight",
};

export const Readiness: React.FC = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
    <section className="max-w-4xl space-y-4">
      <span className="text-xs font-mono uppercase tracking-wider text-brand-tealLight font-bold">Public readiness</span>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Clear about where we are. Careful about what comes next.</h1>
      <p className="text-lg text-slate-300 font-serif leading-relaxed">Togetha is a working version preparing for supervised volunteer testing. It is not launched, is not open for public account creation, and contains synthetic demo data only.</p>
    </section>

    <section className="relative grid gap-5 lg:grid-cols-3" aria-label="Togetha public readiness timeline">
      <div className="pointer-events-none absolute left-[16%] right-[16%] top-11 hidden h-px bg-gradient-to-r from-togetha-purpleLight via-brand-tealLight to-togetha-greenLight lg:block" />
      {stages.map((stage, index) => {
        const Icon = stage.icon;
        return (
          <article key={stage.label} className="relative glass-panel rounded-3xl border border-white/10 p-7 space-y-5">
            <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${toneClasses[stage.tone]}`}><Icon className="h-5 w-5" aria-hidden="true" /></div>
            <div><p className="text-xs font-mono uppercase tracking-wider text-slate-400">0{index + 1} · {stage.label}</p><h2 className="mt-2 text-2xl font-bold text-white">{stage.title}</h2></div>
            <p className="text-sm leading-relaxed text-slate-300">{stage.description}</p>
            <div className="space-y-2 border-t border-white/10 pt-4">{stage.links.map((link) => <Link key={link.href} href={link.href} className="flex items-center justify-between gap-2 text-sm font-semibold text-brand-tealLight hover:text-white"><span>{link.label}</span><ArrowRight className="h-4 w-4" /></Link>)}</div>
          </article>
        );
      })}
    </section>

    <section className="rounded-3xl border border-brand-tealLight/25 bg-brand-teal/10 p-7 sm:p-10">
      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div className="max-w-3xl space-y-3"><div className="flex items-center gap-2 text-brand-tealLight"><ShieldCheck className="h-5 w-5" /><span className="text-xs font-mono uppercase tracking-wider">What remains protected</span></div><h2 className="text-2xl font-bold text-white">We do not use “not launched” as an excuse to overpromise.</h2><p className="text-sm leading-relaxed text-slate-200">This site shares what is built, what is being prepared, and what the team intends to learn. It does not announce a public launch date, future location, or outcome that has not been approved or measured.</p></div>
        <HeartHandshake className="h-10 w-10 shrink-0 text-togetha-purpleLight" aria-hidden="true" />
      </div>
    </section>
  </div>
);
