import React from 'react';
import { Users, Heart, ShieldAlert, Sparkles, Award, CheckCircle } from 'lucide-react';

interface Metric {
  value: string;
  label: string;
  detail: string;
  source: string;
  icon: React.ReactNode;
}

const METRICS: Metric[] = [
  {
    value: '95%',
    label: 'Want Connection',
    detail: '63 of 66 surveyed adults want friendship, dating, or romance.',
    source: 'Hopeful Hearts Survey, 69 adults, MA, August 2026',
    icon: <Heart className="w-5 h-5 text-togetha-coral" />
  },
  {
    value: '45% vs 12%',
    label: 'Anxiety vs. Tech Gap',
    detail: 'Confidence is the barrier, not phone skills. People need safety and pacing.',
    source: 'Hopeful Hearts Survey, MA, August 2026',
    icon: <Users className="w-5 h-5 text-brand-tealLight" />
  },
  {
    value: '90%',
    label: 'Friendship Match Rate',
    detail: 'Early pilot attendees made at least one friendship match; 4 couples dating.',
    source: 'Pilot Cohort Evaluation with Shriver Center & WORK Inc',
    icon: <Award className="w-5 h-5 text-togetha-purpleLight" />
  },
  {
    value: '22% → 0%',
    label: 'Anxiety Drop at Events',
    detail: 'Reported anxiety vanished between arrival and conclusion at supported pilots.',
    source: 'Pilot 2 Post-Event Surveys (N=27 arriving, 22 leaving)',
    icon: <CheckCircle className="w-5 h-5 text-togetha-greenLight" />
  },
  {
    value: '70 Pages',
    label: 'Co-Developed Manual',
    detail: 'Dating coach training curriculum co-created with autistic adults.',
    source: 'UMass Chan Shriver Center & WORK Inc Partnership',
    icon: <Sparkles className="w-5 h-5 text-brand-orange" />
  },
  {
    value: '35 Adults',
    label: 'Volunteered to Test',
    detail: 'Supervised volunteer cohort already assembled for upcoming testing.',
    source: 'August 2026 Survey Volunteer Registry',
    icon: <ShieldAlert className="w-5 h-5 text-brand-teal" />
  }
];

export const ProofRibbon: React.FC = () => {
  return (
    <section className="py-12 border-y border-white/10 bg-slate-950/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-brand-tealLight">
              Verified Evidence Base
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Grounded in Real Data, Not Generic Hype
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            All metrics reflect documented surveys, pilot outcomes, and published literature in Massachusetts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {METRICS.map((m, idx) => (
            <div
              key={idx}
              className="glass-panel p-5 rounded-2xl border border-white/10 flex flex-col justify-between space-y-3 glass-panel-hover"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
                  {m.value}
                </span>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  {m.icon}
                </div>
              </div>

              <div>
                <h4 className="text-base font-bold text-slate-100">
                  {m.label}
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  {m.detail}
                </p>
              </div>

              <div className="pt-2 border-t border-white/5 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>{m.source}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
