import React from 'react';
import { TrustScenarioExplorer } from '@/components/TrustScenarioExplorer';
import { Shield, AlertTriangle, Phone } from 'lucide-react';

export const SafetyAndTrust: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <div className="max-w-4xl space-y-4">
        <span className="text-xs font-mono uppercase tracking-wider text-brand-tealLight font-bold">
          Safety Without Restriction
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Coaching and Protection, Not Surveillance.
        </h1>
        <p className="text-lg text-slate-300 font-serif leading-relaxed">
          Togetha uses layered, pattern-based safeguards that coach members toward safer choices without taking away their adult autonomy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-togetha-warning/20 text-red-400 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-bold text-white">In-Chat Safety Tips</h3>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed font-serif">
            When a member types a phone number, home address, or sensitive detail in a chat thread, an inline safety card can offer a clear reminder: "It's usually best to chat here for a while before sharing personal info."
          </p>
          <div className="p-4 rounded-xl bg-slate-900/90 border border-white/5 text-xs text-slate-300 space-y-2">
            <span className="font-mono text-brand-tealLight font-bold">THE "WARN, DON'T BLOCK" RULE:</span>
            <p>The system gives the member two clear choices: <strong>Edit message</strong> or <strong>Send anyway</strong>. It advises and educates rather than enforcing a paternalistic block.</p>
          </div>
          <img src="/screenshots/08-safety-tip-in-chat.png" alt="Safety Tip" className="rounded-xl border border-white/10 shadow-lg mt-2" />
        </div>

        <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-orange/20 text-brand-orange flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-bold text-white">Financial Scam Interception</h3>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed font-serif">
            Messages asking for money or gift cards are held for a trained person to check before the recipient ever sees them.
          </p>
          <div className="p-4 rounded-xl bg-slate-900/90 border border-white/5 text-xs text-slate-300 space-y-2">
            <span className="font-mono text-brand-orange font-bold">MONEY AND GIFT-CARD REQUESTS:</span>
            <p>Safety actions are recorded in a permanent audit trail. Review is limited to the item that needs attention, not an entire private conversation.</p>
          </div>
          <img src="/screenshots/09-message-held-for-review.png" alt="Message Held" className="rounded-xl border border-white/10 shadow-lg mt-2" />
        </div>
      </div>

      <TrustScenarioExplorer />

      {/* Persistent Help Button */}
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-red-400 font-mono text-xs uppercase font-bold">
              <Phone className="w-4 h-4" />
              <span>Floating On Every Screen</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              One-Tap Help and Escalation
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-serif">
              A visible red Help button sits persistently on every single screen across the member experience. If a member feels unsafe, one tap displays clear emergency and support options:
            </p>
            <ul className="text-xs sm:text-sm text-slate-300 space-y-2 font-mono">
              <li>1. <strong>Call 911</strong> directly</li>
              <li>2. Call or message personal safety contacts</li>
              <li>3. Connect with <strong>988 Suicide & Crisis Lifeline</strong></li>
              <li>4. Direct hotline link to Massachusetts <strong>Disabled Persons Protection Commission (DPPC)</strong></li>
            </ul>
          </div>
          <div className="lg:col-span-6 flex justify-center">
            <img src="/screenshots/10-help.png" alt="Help Screen" className="rounded-2xl border border-white/20 shadow-2xl max-h-[380px] object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};
