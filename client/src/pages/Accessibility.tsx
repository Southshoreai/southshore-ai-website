import React from "react";
import { Accessibility as AccessibilityIcon, ArrowRight, CheckCircle2, Mail, MousePointer2, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { SSAI_EMAIL } from "@/data/siteData";

const commitments = [
  { title: "Keyboard-friendly paths", body: "Visible focus states, a skip link, and keyboard-operable buttons help visitors move through the public site without a mouse.", icon: MousePointer2 },
  { title: "Calmer presentation choices", body: "Calm View reduces animation, glow, blur, and visual density. The site also respects reduced-motion preferences.", icon: Sparkles },
  { title: "Clear interaction controls", body: "The public site uses visible labels, high-contrast control states, and at least 44px interactive targets for shared controls.", icon: CheckCircle2 },
];

export const Accessibility: React.FC = () => (
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
    <section className="max-w-4xl space-y-4"><span className="text-xs font-mono uppercase tracking-wider text-brand-tealLight font-bold">Accessibility statement</span><h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Accessibility is part of how this site works.</h1><p className="text-lg text-slate-300 font-serif leading-relaxed">The South Shore AI marketing site aims to demonstrate the same calm, clear, choice-led approach that informs Togetha. This statement describes what the public site offers today.</p></section>

    <section className="grid gap-5 md:grid-cols-3">{commitments.map((commitment) => { const Icon = commitment.icon; return <article key={commitment.title} className="glass-panel rounded-3xl border border-white/10 p-6 space-y-4"><div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-togetha-purpleLight/30 bg-togetha-purple/15 text-togetha-purpleLight"><Icon className="h-5 w-5" /></div><h2 className="text-xl font-bold text-white">{commitment.title}</h2><p className="text-sm leading-relaxed text-slate-300">{commitment.body}</p></article>;})}</section>

    <section className="rounded-3xl border border-brand-tealLight/25 bg-brand-teal/10 p-7 sm:p-10"><div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-start"><div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-tealLight/35 bg-brand-teal/15 text-brand-tealLight"><AccessibilityIcon className="h-6 w-6" /></div><div className="space-y-4"><h2 className="text-2xl font-bold text-white">Need help using this public site?</h2><p className="text-sm leading-relaxed text-slate-200">Please tell us what made the site difficult to use and what would help. We will read and use that feedback to improve the public experience. This contact path is for the South Shore AI marketing site; it does not create a Togetha account.</p><a href={`mailto:${SSAI_EMAIL}?subject=Accessibility%20feedback%20for%20South%20Shore%20AI`} className="brand-button inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold"><Mail className="h-4 w-4" />Email accessibility feedback<ArrowRight className="h-4 w-4" /></a></div></div></section>

    <section className="glass-panel rounded-3xl border border-white/10 p-7 space-y-3"><h2 className="text-2xl font-bold text-white">What this statement does not claim</h2><p className="text-sm leading-relaxed text-slate-300">The marketing site describes a working version of Togetha that is preparing for supervised volunteer testing. It does not claim that the product is launched, open for public accounts, or available for unsupervised use.</p><Link href="/readiness" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-tealLight hover:text-white">Read the public readiness status <ArrowRight className="h-4 w-4" /></Link></section>
  </div>
);
