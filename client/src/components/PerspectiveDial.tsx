import React, { useState } from 'react';
import { Link } from 'wouter';
import { CALENDLY_LINK } from '@/data/siteData';
import { Users, Shield, HeartHandshake, Briefcase, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

interface Perspective {
  id: string;
  title: string;
  icon: React.ReactNode;
  subtitle: string;
  badge: string;
  accentColor: string;
  quote: string;
  points: string[];
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  sampleScreenshot: string;
}

const PERSPECTIVES: Perspective[] = [
  {
    id: 'founding-partners',
    title: 'Founding Partners & Funders',
    icon: <Briefcase className="w-5 h-5 text-brand-orange" />,
    subtitle: 'High-impact systemic solution to documented loneliness',
    badge: 'Strategic Investment',
    accentColor: 'border-brand-orange/40 text-brand-orange',
    quote: 'Loneliness and social isolation are documented public health challenges. Togetha delivers a sustainable enterprise model with multi-tenant licensing.',
    points: [
      'Documented statewide demand: 95% of surveyed adults want connection',
      'Choose what you fund: volunteer test, coach training, events, safety tools, or scholarships',
      'Dual model: grant-supported governance through Hopeful Hearts + commercially sustainable IP held by South Shore AI',
      'Targeted for 200+ Massachusetts provider agencies with zero barrier to member adoption'
    ],
    primaryCtaText: 'Explore Founding Partnership',
    primaryCtaLink: '/founding-partners',
    secondaryCtaText: 'Book Private Briefing',
    secondaryCtaLink: CALENDLY_LINK,
    sampleScreenshot: '/screenshots/18-agency-overview.png'
  },
  {
    id: 'providers',
    title: 'Provider Agencies & DDS',
    icon: <Shield className="w-5 h-5 text-brand-teal" />,
    subtitle: 'Safe, sanctioned relationships without privacy liability',
    badge: 'Multi-Tenant Architecture',
    accentColor: 'border-brand-teal/40 text-brand-tealLight',
    quote: 'Agencies never read messages or see matches. You oversee membership, supporters, and safety summaries across your caseload without compromising dignity.',
    points: [
      'Dedicated tenant space: see only your enrolled members and authorized supporters',
      'Simple invite-code enrollment: issue one-time codes to participants or import in bulk',
      'Agency-specific groups & events or connect into the statewide Massachusetts community',
      'Qualifies under 101 CMR 415.02 relationship-building service definitions'
    ],
    primaryCtaText: 'Agency Onboarding Details',
    primaryCtaLink: '/providers',
    secondaryCtaText: 'Request Agency Walkthrough',
    secondaryCtaLink: CALENDLY_LINK,
    sampleScreenshot: '/screenshots/19-agency-supporters-list.png'
  },
  {
    id: 'coaches',
    title: 'Dating Coaches & Partners',
    icon: <HeartHandshake className="w-5 h-5 text-togetha-purpleLight" />,
    subtitle: 'Two halves, one coach: joining human guidance with technology',
    badge: 'Co-Developed Program',
    accentColor: 'border-togetha-purple/40 text-togetha-purpleLight',
    quote: 'The app does not replace the dating coach. Coaches run in-person events and skills workshops; Togetha keeps connection moving safely between meetings.',
    points: [
      '70-page coach manual co-developed with autistic adults to ensure real-world fit',
      'Program partners include the Shriver Center at UMass Chan Medical School and WORK Inc',
      'Early pilots proved 90% friendship match rate and 22% to 0% anxiety drop',
      'Coaches help members set up their profiles, communication preferences, and meet-up safety plans'
    ],
    primaryCtaText: 'View Coach Model & Manual',
    primaryCtaLink: '/partners/coaches',
    secondaryCtaText: 'Partner Inquiry',
    secondaryCtaLink: '/connect',
    sampleScreenshot: '/screenshots/14-event.png'
  },
  {
    id: 'members',
    title: 'Future Members',
    icon: <Users className="w-5 h-5 text-brand-tealLight" />,
    subtitle: 'Your pace, your way: friendship and dating on your terms',
    badge: 'Autonomy First',
    accentColor: 'border-brand-teal/40 text-brand-tealLight',
    quote: 'A calm place to meet real people. No rushing, no pressure, and you choose how much help you want.',
    points: [
      'Four screen styles: Everyday, Standard, Simplified, or Guided',
      'Calm pacing: browse up to 10 profiles a day so you never feel overwhelmed',
      'Matches happen only when both people say yes; likes are always private',
      'Pause anytime without losing your conversations or connections'
    ],
    primaryCtaText: 'Explore Member Experience',
    primaryCtaLink: '/togetha/member-experience',
    secondaryCtaText: 'How We Protect You',
    secondaryCtaLink: '/safety-and-trust',
    sampleScreenshot: '/screenshots/03-guided-home.png'
  },
  {
    id: 'supporters',
    title: 'Families & Supporters',
    icon: <Sparkles className="w-5 h-5 text-togetha-greenLight" />,
    subtitle: 'Help without taking over: consent-based supporter roles',
    badge: 'Supported Decision-Making',
    accentColor: 'border-togetha-green/40 text-togetha-greenLight',
    quote: 'You can be as involved or as hands-off as your loved one wants. Access is member-granted and can be revoked instantly at any time.',
    points: [
      'Co-Pilot role: suggest draft replies that the member reviews and approves before sending',
      'Shadow role: read-only visibility with full member awareness and audit logging',
      'Supporter dashboards show activity counts, never surveillance over private conversations',
      'Instant safety alerts when financial requests or high-risk messages are stopped'
    ],
    primaryCtaText: 'Supporter Permissions Guide',
    primaryCtaLink: '/togetha/supporters',
    secondaryCtaText: 'View Co-Pilot Demo',
    secondaryCtaLink: '/views',
    sampleScreenshot: '/screenshots/16-supporter-copilot-dashboard.png'
  }
];

export const PerspectiveDial: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('founding-partners');
  const active = PERSPECTIVES.find((p) => p.id === selectedId) || PERSPECTIVES[0];

  return (
    <div className="space-y-6">
      {/* Perspective Tabs Selector */}
      <div className="brand-control-group flex flex-wrap gap-2 p-1.5 rounded-2xl justify-center">
        {PERSPECTIVES.map((p) => {
          const isSelected = p.id === selectedId;
          return (
            <button
              key={p.id}
              onClick={() => setSelectedId(p.id)}
              aria-pressed={isSelected}
              className={`brand-control flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold ${
                isSelected
                  ? 'brand-control-active'
                  : ''
              }`}
            >
              <span>{p.icon}</span>
              <span>{p.title}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Perspective Detail Card */}
      <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-brand-teal/10 via-togetha-purple/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Column: Context & Proof */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className={`inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3 py-1 rounded-full border bg-black/40 ${active.accentColor}`}>
                {active.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {active.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-300">
                {active.subtitle}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border-l-4 border-l-brand-teal border border-white/5 font-serif italic text-sm sm:text-base text-slate-200">
              "{active.quote}"
            </div>

            <ul className="space-y-2.5">
              {active.points.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal mt-0.5 shrink-0" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href={active.primaryCtaLink}
                className="brand-button px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2"
              >
                <span>{active.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              {active.secondaryCtaLink.startsWith('http') ? (
                <a
                  href={active.secondaryCtaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brand-button-secondary px-5 py-2.5 rounded-xl font-medium text-sm"
                >
                  {active.secondaryCtaText}
                </a>
              ) : (
                <Link
                  href={active.secondaryCtaLink}
                  className="brand-button-secondary px-5 py-2.5 rounded-xl font-medium text-sm"
                >
                  {active.secondaryCtaText}
                </Link>
              )}
            </div>
          </div>

          {/* Right Column: Seeded Screenshot Reference */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black/60 p-1.5 max-w-sm">
              <img
                src={active.sampleScreenshot}
                alt={`${active.title} screenshot`}
                className="w-full h-auto rounded-xl object-contain"
              />
              <div className="p-3 text-center bg-slate-900/90 border-t border-white/10 text-xs text-slate-400">
                <span className="font-mono text-[11px] text-brand-tealLight block font-medium">DEMO DATA / EXAMPLE SCREEN</span>
                Togetha working version interface
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
