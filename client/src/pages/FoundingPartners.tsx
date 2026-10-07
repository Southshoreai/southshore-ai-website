import React from 'react';
import { Link } from 'wouter';
import { CALENDLY_LINK } from '@/data/siteData';
import { ProofRibbon } from '@/components/ProofRibbon';
import { Briefcase, Heart, Award, Shield, CheckCircle2, Calendar, FileText, ArrowRight } from 'lucide-react';

export const FoundingPartners: React.FC = () => {
  const fundingPillars = [
    {
      title: "The Supervised Volunteer Test",
      description: "Support the evaluation cohort of 35 adults who volunteered to test the working build under close clinical and coach supervision.",
      icon: <UsersIcon className="w-5 h-5 text-brand-tealLight" />
    },
    {
      title: "Dating Coach Training",
      description: "Expand training of paid dating coaches using the 70-page co-developed manual created with the Shriver Center.",
      icon: <Heart className="w-5 h-5 text-togetha-purpleLight" />
    },
    {
      title: "Supported Matching Events",
      description: "Underwrite safe, accessible in-person community events hosted across Massachusetts public libraries and community hubs.",
      icon: <Award className="w-5 h-5 text-togetha-greenLight" />
    },
    {
      title: "Safety & Moderation Infrastructure",
      description: "Fund trained moderation staff, pattern alert rulebooks, and immutable audit logs that protect participants without surveillance.",
      icon: <Shield className="w-5 h-5 text-brand-orange" />
    },
    {
      title: "Scholarship Seats",
      description: "Provide fully subsidized membership seats for Direct Members who are not connected to a DDS day program or provider agency.",
      icon: <Briefcase className="w-5 h-5 text-brand-teal" />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      <div className="max-w-4xl space-y-4">
        <span className="text-xs font-mono uppercase tracking-wider text-brand-orange font-bold">
          Strategic Investment & Philanthropic Impact
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Help Open the Door: Founding Partner Opportunities
        </h1>
        <p className="text-lg text-slate-300 font-serif leading-relaxed">
          42% of Massachusetts adults with I/DD report feeling lonely, yet 95% desire connection. Togetha is not an endless grant sink—it is a sustainable enterprise framework that unites nonprofit governance with commercially scalable technology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center glass-panel p-8 sm:p-12 rounded-3xl border border-white/10">
        <div className="space-y-4">
          <span className="text-xs font-mono text-brand-tealLight uppercase">Dual-Entity Strength</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Why This Model Sustains</h2>
          <p className="text-sm sm:text-base text-slate-300 font-serif leading-relaxed">
            South Shore AI builds, owns, and operates the platform under contract, retaining commercial IP to scale across states. Hopeful Hearts Initiative holds mission authority, scholarship administration, and the public face.
          </p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-teal" />
              <span>Multi-tenant provider agency licensing: ~$250/mo + seat fees</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-teal" />
              <span>Qualifies under 101 CMR 415.02 day program service reimbursement</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-teal" />
              <span>Permanent asset: philanthropic capital activates long-term sustainability</span>
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-brand-navy border border-white/10 space-y-4">
          <h3 className="text-lg font-bold text-white">Founding Partner Recognition</h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-serif">
            Early supporters are recognized as Togetha Founding Partners, permanently acknowledged in launch materials, academic pilot evaluations, and state presentations.
          </p>
          <div className="pt-2">
            <a
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-white font-bold text-center block text-sm shadow glow-orange"
            >
              Book Private Founding Briefing
            </a>
          </div>
        </div>
      </div>

      {/* Choose What You Fund Grid */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Choose What You Fund</h2>
          <p className="text-sm text-slate-400">
            Togetha is built in modular pieces. Foundations and strategic investors can align their contribution with their exact mission priority.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fundingPillars.map((pillar, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3 glass-panel-hover flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {pillar.icon}
                </div>
                <h4 className="text-lg font-bold text-white">{pillar.title}</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-serif">{pillar.description}</p>
              </div>
              <div className="pt-3 border-t border-white/5">
                <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-brand-tealLight hover:underline flex items-center gap-1">
                  <span>Discuss funding this piece</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProofRibbon />
    </div>
  );
};

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}
