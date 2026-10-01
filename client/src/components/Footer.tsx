import React from 'react';
import { Link } from 'wouter';
import { CALENDLY_LINK, SSAI_EMAIL, TOGETHA_EMAIL, PHONE_NUMBER } from '@/data/siteData';
import { Shield, Mail, Phone, Calendar, ArrowUpRight, Heart, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-[#060911] text-slate-400">
      {/* Top CTA Banner */}
      <div className="border-b border-brand-teal/25 py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-togetha-purple/20 via-brand-teal/15 to-brand-orange/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="brand-heading-spectrum text-2xl font-bold tracking-tight">
              See Togetha Working in Real Time
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Book a 30-minute private walkthrough of the working build with founder Scott Pralinsky. Available for prospective Founding Partners, provider leaders, and coalition stakeholders.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="brand-button-connect px-6 py-3 rounded-xl font-semibold flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book 30-Min Walkthrough</span>
            </a>
            <Link
              href="/connect"
              className="brand-button-secondary px-5 py-3 rounded-xl font-medium"
            >
              Contact Directory
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Organization & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-teal to-togetha-purple flex items-center justify-center p-1">
                <img src="/assets/togetha_symbol_only_light.png" alt="Togetha" className="w-full h-full object-contain" />
              </div>
              <span className="text-lg font-bold text-white">South Shore AI</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-300">
              A commercial technology venture building serious, human-centered systems. Togetha is our flagship platform: a statewide framework expanding access to safe, supported relationships for autistic adults and adults with intellectual and developmental disabilities in Massachusetts.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1.5 font-mono">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-brand-tealLight" />
                <a href={`mailto:${SSAI_EMAIL}`} className="hover:text-white transition-colors">{SSAI_EMAIL}</a>
                <span className="text-slate-600">·</span>
                <a href={`mailto:${TOGETHA_EMAIL}`} className="hover:text-white transition-colors">{TOGETHA_EMAIL}</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-tealLight" />
                <span>{PHONE_NUMBER}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Togetha Product */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200">
              The Platform
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/togetha" className="hover:text-white transition-colors">Platform Architecture</Link></li>
              <li><Link href="/togetha/member-experience" className="hover:text-white transition-colors">Member Experience</Link></li>
              <li><Link href="/togetha/supporters" className="hover:text-white transition-colors">Supporter Permissions</Link></li>
              <li><Link href="/safety-and-trust" className="hover:text-white transition-colors">Safety & Trust Model</Link></li>
              <li><Link href="/views" className="hover:text-white transition-colors">5 System Views</Link></li>
            </ul>
          </div>

          {/* Column 3: Stakeholders */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200">
              Stakeholders
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/founding-partners" className="hover:text-white transition-colors">Founding Partners</Link></li>
              <li><Link href="/providers" className="hover:text-white transition-colors">Provider Agencies & DDS</Link></li>
              <li><Link href="/partners/coaches" className="hover:text-white transition-colors">Dating Coaches & WORK Inc</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Founder Credentials</Link></li>
              <li><Link href="/connect" className="hover:text-white transition-colors">Schedule Briefing</Link></li>
            </ul>
          </div>

          {/* Column 4: Institutional Partners */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200">
              Partners & Governance
            </h4>
            <div className="text-xs space-y-2.5 text-slate-400">
              <div>
                <strong className="text-slate-200 block">Hopeful Hearts Initiative</strong>
                <span>Statewide governance partner & public mission face</span>
              </div>
              <div>
                <strong className="text-slate-200 block">Eunice Kennedy Shriver Center</strong>
                <span>UMass Chan Medical School research & training partner</span>
              </div>
              <div>
                <strong className="text-slate-200 block">WORK Inc</strong>
                <span>In-person coaching & community program partner</span>
              </div>
            </div>
          </div>
        </div>

        {/* Public Notice & Boundaries */}
        <div className="mt-12 pt-8 border-t border-white/10 text-xs leading-relaxed text-slate-400 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-slate-300 font-semibold">
              <Shield className="w-4 h-4 text-brand-teal" />
              <span>Public Status & Transparency Notice</span>
            </div>
            <p>
              Togetha is currently a working version being prepared for supervised volunteer testing with 35 survey participants in Massachusetts. The platform is password-protected with synthetic demo data and is not yet open for public account creation. All screenshots shown represent simulated testing accounts.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-slate-300 font-semibold">
              <Heart className="w-4 h-4 text-togetha-purpleLight" />
              <span>Privacy & Autonomy Guarantee</span>
            </div>
            <p>
              Provider agencies never read private chat messages or inspect match lists. Only a member's own designated supporters can view activity, and only to the specific level authorized by the member. Access can be revoked instantly at any time.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} South Shore AI, LLC. All IP and software rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/safety-and-trust" className="hover:text-slate-300">Privacy & Governance</Link>
            <Link href="/about" className="hover:text-slate-300">Executive Leadership</Link>
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 flex items-center gap-1">
              <span>Book Walkthrough</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
