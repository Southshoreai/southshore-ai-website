import React from 'react';
import { Link } from 'wouter';
import { CALENDLY_LINK } from '@/data/siteData';
import { HeartHandshake, BookOpen, Users, Award, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

export const Coaches: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <div className="max-w-4xl space-y-4">
        <span className="text-xs font-mono uppercase tracking-wider text-togetha-purpleLight font-bold">
          Human Guidance · Program Model
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          The Dating Coach: Where In-Person Meets Online.
        </h1>
        <p className="text-lg text-slate-300 font-serif leading-relaxed">
          The Togetha app does not replace human coaches. The entire venture is engineered around trained, paid dating coaches who guide relationship skills workshops, attend supported matching events, and help members build authentic confidence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-togetha-purple/20 text-togetha-purpleLight flex items-center justify-center">
            <BookOpen className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-white">70-Page Coach Manual</h3>
          <p className="text-sm text-slate-300 leading-relaxed font-serif">
            Co-developed with autistic adults to establish respectful, non-patronizing guidance across flirting, conversational pacing, sensory needs, and dating etiquette.
          </p>
        </div>

        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-brand-teal/20 text-brand-tealLight flex items-center justify-center">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-white">Supported Matching Events</h3>
          <p className="text-sm text-slate-300 leading-relaxed font-serif">
            Calm in-person gatherings in public venues such as libraries and cafes. Coaches attend to help start conversations and ensure everyone feels comfortable.
          </p>
        </div>

        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-togetha-green/20 text-togetha-greenLight flex items-center justify-center">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-white">Proven Pilot Results</h3>
          <p className="text-sm text-slate-300 leading-relaxed font-serif">
            Across 3 pilot events: 90% of attendees made a friendship match, 4 couples began dating, and anxiety dropped from 22% on arrival to 0% at departure.
          </p>
        </div>
      </div>

      {/* Participant Voice Quote */}
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 space-y-4">
        <span className="text-xs font-mono uppercase text-togetha-purpleLight">Participant Voice · Pilot Cohort</span>
        <blockquote className="text-xl sm:text-2xl text-slate-100 font-serif italic leading-relaxed">
          "I loved how Demi came on the 1st date and helped initiate the first date and helped with what to say, and it was nice meeting new people…"
        </blockquote>
        <div className="text-xs text-slate-400 font-mono">
          — Natalie, Participant in Pilot 2 (supported by WORK Inc and Hopeful Hearts)
        </div>
      </div>

      <div className="p-8 rounded-2xl bg-brand-card border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-white">Interested in Becoming a Coach Partner?</h3>
          <p className="text-sm text-slate-300">Connect with Scott Pralinsky and the Hopeful Hearts team.</p>
        </div>
        <Link
          href="/connect"
          className="px-6 py-3 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-white font-semibold text-sm shadow glow-orange flex items-center gap-2"
        >
          <span>Partner Inquiry</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
