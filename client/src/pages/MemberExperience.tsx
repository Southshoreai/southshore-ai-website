import React from 'react';
import { Link } from 'wouter';
import { Heart, Shield, Users, Sparkles, Smile, ArrowRight, PauseCircle, CheckCircle } from 'lucide-react';

export const MemberExperience: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-wider text-togetha-purpleLight font-bold">
          Built for You
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Your Pace, Your Way.
        </h1>
        <p className="text-lg text-slate-200 font-serif leading-relaxed">
          Togetha is a calm and welcoming place to meet new friends and find dating in Massachusetts. There is no rush to do anything, and you decide who you meet.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-togetha-purple/20 text-togetha-purpleLight flex items-center justify-center">
            <Heart className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-white">You Choose What You Want</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            You can look for friendships, dating, or both. You only see people who are looking for the exact same kind of connection. Matches only happen when you both say yes.
          </p>
        </div>

        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-brand-teal/20 text-brand-tealLight flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-white">Bring Someone to Help</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            If you want help, you can invite a trusted family member or support worker. You choose what they can do—like suggesting replies—and you can remove them anytime with one click.
          </p>
        </div>

        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-togetha-green/20 text-togetha-greenLight flex items-center justify-center">
            <Shield className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-white">Safety Tips That Don't Block You</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            If you type a phone number or address, a friendly tip appears reminding you to take your time. You can choose to edit your message or send it anyway. You are in charge.
          </p>
        </div>

        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-brand-orange/20 text-brand-orange flex items-center justify-center">
            <PauseCircle className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-white">Pause Whenever You Need</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Every screen has a Pause button. If you need a break, you can hide your profile for a few days or weeks without losing your matches, messages, or friends.
          </p>
        </div>
      </div>

      <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
        <h3 className="text-2xl font-bold text-white">How Joining Works</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <div className="p-4 rounded-xl bg-brand-navy border border-white/10 space-y-2">
            <span className="font-mono text-brand-tealLight font-bold">STEP 1</span>
            <h4 className="font-bold text-white">Get an Invite Code</h4>
            <p className="text-xs text-slate-300">Through your day program or provider agency, or sign up as a direct member.</p>
          </div>
          <div className="p-4 rounded-xl bg-brand-navy border border-white/10 space-y-2">
            <span className="font-mono text-togetha-purpleLight font-bold">STEP 2</span>
            <h4 className="font-bold text-white">Make Your Profile</h4>
            <p className="text-xs text-slate-300">Answer fun prompts about your hobbies, favorite music, and communication style.</p>
          </div>
          <div className="p-4 rounded-xl bg-brand-navy border border-white/10 space-y-2">
            <span className="font-mono text-togetha-greenLight font-bold">STEP 3</span>
            <h4 className="font-bold text-white">Connect at Your Pace</h4>
            <p className="text-xs text-slate-300">Look at profiles, attend supported events at libraries and cafes, and make friends.</p>
          </div>
        </div>
      </div>

      <div className="text-center p-6 bg-slate-900/60 rounded-2xl border border-white/5 space-y-2">
        <p className="text-sm text-slate-300">
          Want to know more about the safety rules or supporter options?
        </p>
        <div className="flex justify-center gap-4 text-xs font-semibold">
          <Link href="/togetha/supporters" className="text-togetha-purpleLight hover:underline">Read Supporter Guide</Link>
          <span className="text-slate-600">·</span>
          <Link href="/safety-and-trust" className="text-brand-tealLight hover:underline">Read Safety Details</Link>
        </div>
      </div>
    </div>
  );
};
