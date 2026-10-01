import React from 'react';
import { Link } from 'wouter';
import { CALENDLY_LINK } from '@/data/siteData';
import { ScreenshotShowcase } from '@/components/ScreenshotShowcase';
import { 
  Shield, Heart, Users, Clock, Compass, Layers, CheckCircle, ArrowRight, Calendar 
} from 'lucide-react';

export const TogethaPlatform: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      <div className="max-w-4xl space-y-4">
        <span className="text-xs font-mono uppercase tracking-wider text-brand-tealLight">
          The Platform Architecture
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          A Calm, Accessible Digital Space for Friendship & Dating
        </h1>
        <p className="text-lg text-slate-300 font-serif leading-relaxed">
          Togetha is built from the ground up for autistic adults and adults with intellectual and developmental disabilities in Massachusetts. It prioritizes member autonomy, sensory comfort, and safety without patronizing barriers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-togetha-purple/20 border border-togetha-purple/30 flex items-center justify-center text-togetha-purpleLight">
            <Heart className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">Friendship & Romance</h3>
          <p className="text-sm text-slate-300">
            Members define what they are seeking: friendship, casual dating, long-term romance, or romantic connection without intimacy. Matches occur only when both say yes.
          </p>
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-brand-teal/20 border border-brand-teal/30 flex items-center justify-center text-brand-tealLight">
            <Clock className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">Pacing as a Safeguard</h3>
          <p className="text-sm text-slate-300">
            Profiles are shown one at a time, capped at 10 a day by default. Pacing reduces impulse fatigue, decision overload, and the emotional exhaustion common in mainstream apps.
          </p>
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-togetha-green/20 border border-togetha-green/30 flex items-center justify-center text-togetha-greenLight">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">Supporter Permissions</h3>
          <p className="text-sm text-slate-300">
            Members can invite a family member or support professional to assist. Choose between Co-Pilot, Shadow (read-only), or Full Delegate levels. Revocable instantly.
          </p>
        </div>
      </div>

      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 space-y-8">
        <div className="max-w-2xl space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Four Responsive Screen Styles
          </h2>
          <p className="text-sm text-slate-300">
            Members select the screen layout that matches their sensory and cognitive preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          <div className="p-5 rounded-2xl bg-brand-navy border border-white/10 space-y-2">
            <span className="text-xs font-mono text-brand-tealLight font-bold">MODE 01</span>
            <h4 className="font-bold text-white">Everyday Mode</h4>
            <p className="text-xs text-slate-400">
              Modern, familiar smartphone layout for members who do not require simplified layouts or large buttons.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-brand-navy border border-white/10 space-y-2">
            <span className="text-xs font-mono text-togetha-purpleLight font-bold">MODE 02</span>
            <h4 className="font-bold text-white">Standard Mode</h4>
            <p className="text-xs text-slate-400">
              Clean visual hierarchy, high contrast badges, explicit icon labels, and paced profile discovery.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-brand-navy border border-white/10 space-y-2">
            <span className="text-xs font-mono text-togetha-greenLight font-bold">MODE 03</span>
            <h4 className="font-bold text-white">Simplified Mode</h4>
            <p className="text-xs text-slate-400">
              Enlarged touch targets, uncluttered screens, streamlined choices, and high legibility.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-brand-navy border border-white/10 space-y-2">
            <span className="text-xs font-mono text-brand-orange font-bold">MODE 04</span>
            <h4 className="font-bold text-white">Guided Mode</h4>
            <p className="text-xs text-slate-400">
              Step-by-step single question prompts with a persistent "Ask for Help" button linking to your supporter.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Explore the Live Screens
        </h2>
        <ScreenshotShowcase />
      </div>

      <div className="p-8 rounded-2xl bg-gradient-to-r from-brand-card to-brand-slate border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <h3 className="text-xl font-bold text-white">Ready to examine the full system?</h3>
          <p className="text-sm text-slate-300">Book a 30-minute private walkthrough of the working build.</p>
        </div>
        <a
          href={CALENDLY_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-white font-semibold text-sm shadow glow-orange flex items-center gap-2"
        >
          <Calendar className="w-4 h-4" />
          <span>Schedule Walkthrough</span>
        </a>
      </div>
    </div>
  );
};
