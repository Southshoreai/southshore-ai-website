import React from 'react';
import { Link } from 'wouter';
import { CALENDLY_LINK } from '@/data/siteData';
import { Users, Shield, Lock, Eye, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';

export const Supporters: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <div className="max-w-4xl space-y-4">
        <span className="text-xs font-mono uppercase tracking-wider text-togetha-greenLight font-bold">
          Supported Decision-Making
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Help Without Taking Over.
        </h1>
        <p className="text-lg text-slate-300 font-serif leading-relaxed">
          The Togetha Supporter Role is built on member consent and dignity. Family members, DSPs, and trusted friends can provide reassurance and advice without surveillance or paternalistic control.
        </p>
      </div>

      {/* The Reassurance Banner */}
      <div className="p-6 rounded-2xl bg-brand-navy border-l-4 border-l-togetha-green border border-white/10 space-y-2">
        <div className="flex items-center gap-2 text-white font-bold text-base">
          <CheckCircle2 className="w-5 h-5 text-togetha-greenLight" />
          <span>The Principle Families Remember</span>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed font-serif">
          Provider agencies and staff never read private chat messages or see match lists. Only a member's own chosen supporter can, and only to the specific level the member explicitly allows. The member can revoke supporter access instantly at any time.
        </p>
      </div>

      {/* 3 Supporter Levels */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4 relative flex flex-col justify-between">
          <div className="space-y-3">
            <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-togetha-purple/20 text-togetha-purpleLight border border-togetha-purple/30 inline-block">
              LEVEL 01 · MOST COMMON
            </span>
            <h3 className="text-2xl font-bold text-white">Co-Pilot</h3>
            <p className="text-xs text-slate-400 font-mono">Draft messages with member review</p>
            <p className="text-sm text-slate-300 leading-relaxed font-serif">
              Supporters can suggest draft replies in a private queue. The member reviews every suggested message and must approve it before it is sent. The supporter cannot send independently.
            </p>
          </div>
          <ul className="text-xs text-slate-400 space-y-2 pt-4 border-t border-white/5">
            <li>✓ Member consent required</li>
            <li>✓ Member approves every send</li>
            <li>✓ Fosters communication confidence</li>
          </ul>
        </div>

        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4 relative flex flex-col justify-between">
          <div className="space-y-3">
            <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-brand-teal/20 text-brand-tealLight border border-brand-teal/30 inline-block">
              LEVEL 02 · READ-ONLY
            </span>
            <h3 className="text-2xl font-bold text-white">Shadow</h3>
            <p className="text-xs text-slate-400 font-mono">Read-only transparency</p>
            <p className="text-sm text-slate-300 leading-relaxed font-serif">
              Supporter can read the member's conversation threads, but cannot draft or send messages. Activated only with explicit member consent, or in safety-plan triggered states.
            </p>
          </div>
          <ul className="text-xs text-slate-400 space-y-2 pt-4 border-t border-white/5">
            <li>✓ Member sees when supporter views</li>
            <li>✓ Cannot draft or send</li>
            <li>✓ Per-thread privacy override</li>
          </ul>
        </div>

        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4 relative flex flex-col justify-between">
          <div className="space-y-3">
            <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-brand-orange/20 text-brand-orange border border-brand-orange/30 inline-block">
              LEVEL 03 · HIGHEST TRUST
            </span>
            <h3 className="text-2xl font-bold text-white">Full Delegate</h3>
            <p className="text-xs text-slate-400 font-mono">Act on member's behalf</p>
            <p className="text-sm text-slate-300 leading-relaxed font-serif">
              Can act for the member including managing profile sections. Rarely appropriate; requires member consent plus authorization from the safety team, renewed every six months.
            </p>
          </div>
          <ul className="text-xs text-slate-400 space-y-2 pt-4 border-t border-white/5">
            <li>✓ Member consent required</li>
            <li>✓ Safety team authorization required</li>
            <li>✓ 6-month formal re-authorization</li>
          </ul>
        </div>
      </div>

      {/* Dashboard Preview Section */}
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Counts, Not Content.
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-serif">
              The supporter dashboard defaults to high-level summaries: number of matches, messages exchanged, and upcoming events. This protects member dignity while providing families with genuine peace of mind.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed font-serif">
              If an attempt to solicit money or gift cards is blocked, the supporter receives an immediate notification stating what category of event occurred—without exposing private conversational context unnecessarily.
            </p>
            <div className="pt-2">
              <Link href="/views" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-tealLight hover:underline">
                <span>Inspect Supporter Co-Pilot Interface</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 flex justify-center">
            <img
              src="/screenshots/16-supporter-copilot-dashboard.png"
              alt="Supporter Dashboard"
              className="rounded-2xl border border-white/20 shadow-2xl max-h-[380px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
