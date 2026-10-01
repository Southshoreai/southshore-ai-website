import React, { useState } from 'react';
import { DEMO_SCREENSHOTS } from '@/data/siteData';
import { Eye, Shield, Users, Layers, Sparkles } from 'lucide-react';

export const SystemViews: React.FC = () => {
  const views = [
    {
      id: "member",
      title: "1. Member Perspectives",
      subtitle: "Everyday, Standard, Simplified & Guided Modes",
      description: "Designed for member autonomy. Shows how members navigate discovery, profile setup, in-chat safety tips, and personal settings.",
      screenIds: ["01-welcome", "03-guided-home", "04-discover-guided", "05-discover-standard", "06-my-profile", "07-conversation", "08-safety-tip", "11-display-settings"]
    },
    {
      id: "supporter",
      title: "2. Supporter Co-Pilot Perspective",
      subtitle: "Consent-Based Assistance Without Surveillance",
      description: "How families and support professionals view summaries, suggest draft replies, and receive alerts without invading privacy.",
      screenIds: ["12-my-supporters", "15-supporter-home", "16-copilot-dash", "17-supporter-shadow"]
    },
    {
      id: "provider",
      title: "3. Provider Agency Tenant Perspective",
      subtitle: "Multi-Tenant Scoped Caseload Management",
      description: "Agency leadership manages invitations and reviews aggregate counts. Providers never read client chats or see match lists.",
      screenIds: ["02-create-account", "14-event", "18-agency-overview", "19-agency-supporters-list"]
    },
    {
      id: "moderation",
      title: "4. Hopeful Hearts & SSAI Safety Perspective",
      subtitle: "Trained Moderation with Scoped Evidence",
      description: "Moderators review flagged items with exact evidence snapshots and immutable audit trails, protecting member safety across Massachusetts.",
      screenIds: ["09-money-held", "10-help", "20-moderator-queue"]
    }
  ];

  const [activeTab, setActiveTab] = useState(views[0].id);
  const currentView = views.find(v => v.id === activeTab) || views[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <div className="max-w-4xl space-y-4">
        <span className="text-xs font-mono uppercase tracking-wider text-brand-tealLight font-bold">
          Role-Based System Architecture
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Explore the 5 System Views
        </h1>
        <p className="text-lg text-slate-300 font-serif leading-relaxed">
          Togetha is an integrated multi-tier system. Explore the actual user interfaces for members, supporters, provider agency administrators, and safety governance staff.
        </p>
      </div>

      {/* View Tabs */}
      <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-brand-navy border border-white/10 justify-center">
        {views.map((v) => (
          <button
            key={v.id}
            onClick={() => setActiveTab(v.id)}
            className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all ${
              activeTab === v.id
                ? 'bg-brand-card text-white border border-white/20 shadow glow-teal'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {v.title}
          </button>
        ))}
      </div>

      {/* Active View Context */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-2">
        <span className="text-xs font-mono text-togetha-purpleLight font-bold uppercase">{currentView.subtitle}</span>
        <h3 className="text-2xl font-bold text-white">{currentView.title}</h3>
        <p className="text-sm text-slate-300 font-serif leading-relaxed max-w-3xl">{currentView.description}</p>
      </div>

      {/* Screenshots for this View */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {DEMO_SCREENSHOTS.filter(s => currentView.screenIds.includes(s.id) || currentView.screenIds.some(cs => s.id.startsWith(cs))).map((screen) => (
          <div key={screen.id} className="glass-panel rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between">
            <div className="relative aspect-[9/13] bg-black/70 p-2 flex items-center justify-center">
              <img src={`/screenshots/${screen.filename}`} alt={screen.title} className="max-h-full w-auto object-contain rounded-lg" />
              <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-[10px] font-mono text-brand-tealLight border border-white/10">
                {screen.audience}
              </div>
            </div>
            <div className="p-4 bg-[#0D1322] space-y-1">
              <div className="text-[11px] font-mono text-togetha-purpleLight font-medium">{screen.highlight}</div>
              <h4 className="text-base font-bold text-white">{screen.title}</h4>
              <p className="text-xs text-slate-400 font-serif">{screen.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
