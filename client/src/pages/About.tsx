import React from 'react';
import { Link } from 'wouter';
import { CALENDLY_LINK, SSAI_EMAIL, PHONE_NUMBER } from '@/data/siteData';
import { Shield, Award, Terminal, Briefcase, GraduationCap, Calendar, ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-mono uppercase tracking-wider text-brand-tealLight font-bold">
          Executive Leadership & Engineering
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          South Shore AI: Building Serious, Human Systems.
        </h1>
        <p className="text-lg text-slate-300 font-serif leading-relaxed">
          South Shore AI is a commercial technology venture dedicated to solving high-stakes workflow and social connectivity problems. We design and operate software with rigorous safety, scalable multi-tenant architecture, and human dignity at the center.
        </p>
      </div>

      {/* Founder Credentials Card */}
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-mono text-brand-orange uppercase font-bold">Founder & CEO</span>
          <h2 className="text-3xl font-bold text-white">Scott Pralinsky</h2>
          <p className="text-sm text-slate-300 font-mono">
            Executive Leadership · Computer Systems Architecture · Operational Discipline
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-brand-navy border border-white/10 space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-brand-teal/20 text-brand-tealLight flex items-center justify-center">
              <Briefcase className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">20 Years Executive Leadership</h4>
            <p className="text-xs text-slate-300 leading-relaxed font-serif">
              Decades of experience as a chief executive guiding complex organizations, community programs, and technology initiatives.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-brand-navy border border-white/10 space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-togetha-purple/20 text-togetha-purpleLight flex items-center justify-center">
              <Terminal className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Wall Street Systems Programming</h4>
            <p className="text-xs text-slate-300 leading-relaxed font-serif">
              Rigorous technical roots in financial computing, high-reliability data structures, and secure multi-tier systems.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-brand-navy border border-white/10 space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-brand-orange/20 text-brand-orange flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Air Force Military Science & Technology</h4>
            <p className="text-xs text-slate-300 leading-relaxed font-serif">
              Served for many years as an Instructor of Military Science and Technology, instilling mission precision, training rigor, and operational security.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-brand-navy border border-white/10 space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-togetha-green/20 text-togetha-greenLight flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">MIT Artificial Intelligence</h4>
            <p className="text-xs text-slate-300 leading-relaxed font-serif">
              Completed advanced studies in Artificial Intelligence at the Massachusetts Institute of Technology, grounding our pattern-safeguard implementations.
            </p>
          </div>
        </div>
      </div>

      {/* Advisory Practice */}
      <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
        <h3 className="text-2xl font-bold text-white">Keynotes & Advisory Practice</h3>
        <p className="text-sm text-slate-300 leading-relaxed font-serif">
          In addition to our venture engineering on Togetha, Scott Pralinsky delivers executive keynotes and strategic advisory for organizations navigating practical AI adoption, workflow modernization, and mission-aligned technical execution.
        </p>
        <div className="pt-2">
          <a
            href={CALENDLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:underline"
          >
            <span>Inquire About Keynotes or Advisory</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
