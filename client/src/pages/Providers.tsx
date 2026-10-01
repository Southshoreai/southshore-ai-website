import React from 'react';
import { Link } from 'wouter';
import { CALENDLY_LINK } from '@/data/siteData';
import { Shield, Users, Layers, CheckCircle2, Calendar, FileText, ArrowRight } from 'lucide-react';

export const Providers: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <div className="max-w-4xl space-y-4">
        <span className="text-xs font-mono uppercase tracking-wider text-brand-tealLight font-bold">
          Provider Agencies & DDS Partnership
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          A Safe, Sanctioned Channel for Relationship Building.
        </h1>
        <p className="text-lg text-slate-300 font-serif leading-relaxed">
          Your individuals want connection. Without a supported channel, they turn to mainstream apps where 49% encounter scams, bots, or hide their disability. Togetha gives DDS-funded agencies an enterprise-grade tenant space with zero surveillance liability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-brand-teal/20 text-brand-tealLight flex items-center justify-center">
            <Layers className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">Multi-Tenant Scoping</h3>
          <p className="text-sm text-slate-300">
            Each agency has its own scoped tenant view. Agency leadership sees enrolled members, supporter links, and aggregate safety trends—completely isolated from other agencies.
          </p>
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-togetha-purple/20 text-togetha-purpleLight flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">Invitation Code Enrollment</h3>
          <p className="text-sm text-slate-300">
            Easily issue digital invite codes or CSV imports. Members enter the code during registration, automatically linking them to your agency's verified roster.
          </p>
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-brand-orange/20 text-brand-orange flex items-center justify-center">
            <FileText className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">101 CMR 415.02 Alignment</h3>
          <p className="text-sm text-slate-300">
            Massachusetts CBDS regulations explicitly define relationship-building and community involvement as core billable support skills.
          </p>
        </div>
      </div>

      {/* Agency Dashboard Showcase */}
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono text-brand-tealLight uppercase">Agency Operations</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              What Agencies See (And What They Don't)
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-serif">
              Agency staff manage rosters, host agency-only groups, and track participation numbers. Crucially, agency staff never read chats or see individual matches. Hopeful Hearts provides external statewide safety governance so provider agencies do not carry solitary liability.
            </p>
            <div className="pt-2">
              <Link href="/views" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-tealLight hover:underline">
                <span>View Agency Overview Screen</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 flex justify-center">
            <img
              src="/screenshots/18-agency-overview.png"
              alt="Agency Overview"
              className="rounded-2xl border border-white/20 shadow-2xl max-h-[380px] object-contain"
            />
          </div>
        </div>
      </div>

      {/* Provider CTA */}
      <div className="p-8 rounded-2xl bg-brand-card border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-white">Enroll Your Agency in the Upcoming Test</h3>
          <p className="text-sm text-slate-300">Schedule an agency leadership walkthrough with Scott Pralinsky.</p>
        </div>
        <a
          href={CALENDLY_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-white font-semibold text-sm shadow glow-orange flex items-center gap-2"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Agency Walkthrough</span>
        </a>
      </div>
    </div>
  );
};
