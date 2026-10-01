import React, { useState } from 'react';
import { DEMO_SCREENSHOTS, DemoScreenshot } from '@/data/siteData';
import { Eye, X, ChevronRight, Sparkles, Shield, Users, Layers } from 'lucide-react';

export const ScreenshotShowcase: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeModalScreen, setActiveModalScreen] = useState<DemoScreenshot | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Screens (13)' },
    { id: 'members', label: 'Member Experience' },
    { id: 'safety', label: 'Safety & Safeguards' },
    { id: 'supporters', label: 'Supporters & Co-Pilot' },
    { id: 'providers', label: 'Provider Operations' },
  ];

  const filteredScreens = DEMO_SCREENSHOTS.filter((screen) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'members') {
      return ['01-welcome', '03-guided-home', '04-discover-guided', '05-discover-standard', '11-display-settings'].includes(screen.id);
    }
    if (selectedFilter === 'safety') {
      return ['08-safety-tip', '09-money-held', '10-help', '20-moderator-queue'].includes(screen.id);
    }
    if (selectedFilter === 'supporters') {
      return ['12-my-supporters', '16-copilot-dash'].includes(screen.id);
    }
    if (selectedFilter === 'providers') {
      return ['14-event', '18-agency-overview'].includes(screen.id);
    }
    return true;
  });

  return (
    <div className="space-y-8">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 justify-center">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedFilter(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              selectedFilter === tab.id
                ? 'bg-brand-teal text-white shadow glow-teal'
                : 'bg-brand-card hover:bg-brand-slate text-slate-300 hover:text-white border border-white/5'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid of Screenshots */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredScreens.map((screen) => (
          <div
            key={screen.id}
            onClick={() => setActiveModalScreen(screen)}
            className="group cursor-pointer glass-panel rounded-2xl border border-white/10 overflow-hidden glass-panel-hover flex flex-col justify-between"
          >
            <div className="relative aspect-[9/13] bg-black/60 p-2 overflow-hidden flex items-center justify-center">
              <img
                src={`/screenshots/${screen.filename}`}
                alt={screen.title}
                className="max-h-full w-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-xs text-brand-tealLight font-mono flex items-center gap-1 font-semibold">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Click to inspect interface & callouts</span>
                </span>
              </div>
              <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-[10px] font-mono text-slate-300 border border-white/10">
                {screen.audience}
              </div>
            </div>

            <div className="p-4 space-y-1.5 bg-[#0D1322]">
              <div className="text-[11px] font-mono text-togetha-purpleLight font-medium">
                {screen.highlight}
              </div>
              <h4 className="text-base font-bold text-white group-hover:text-brand-tealLight transition-colors">
                {screen.title}
              </h4>
              <p className="text-xs text-slate-400 line-clamp-2">
                {screen.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Inspection Modal */}
      {activeModalScreen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveModalScreen(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-[#0E1524] border border-white/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalScreen(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors border border-white/10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left: Image */}
            <div className="w-full md:w-1/2 p-4 bg-black/90 flex items-center justify-center overflow-auto max-h-[50vh] md:max-h-full">
              <img
                src={`/screenshots/${activeModalScreen.filename}`}
                alt={activeModalScreen.title}
                className="max-h-[600px] w-auto object-contain rounded-xl shadow-2xl"
              />
            </div>

            {/* Right: Detailed Context & Callouts */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto space-y-6">
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-brand-tealLight uppercase tracking-wider block">
                    {activeModalScreen.audience}
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {activeModalScreen.title}
                  </h3>
                  <p className="text-sm text-slate-300">
                    {activeModalScreen.subtitle}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-brand-navy border border-white/10 text-xs font-mono text-togetha-purpleLight">
                  <span className="text-slate-400 block mb-1">KEY PRODUCT BEHAVIOR:</span>
                  {activeModalScreen.highlight}
                </div>

                <div className="space-y-2 text-sm text-slate-300 leading-relaxed font-serif">
                  <p>{activeModalScreen.description}</p>
                </div>

                <div className="p-3 rounded-lg bg-black/40 border border-white/5 text-[11px] font-mono text-slate-400">
                  <span className="text-brand-orange font-semibold block">DEMO DATA NOTICE:</span>
                  Captured from the verified working build in preparation for supervised testing in Massachusetts. All participant names and interactions are synthetic.
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Image file: <code className="text-slate-200">{activeModalScreen.filename}</code>
                </span>
                <button
                  onClick={() => setActiveModalScreen(null)}
                  className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold"
                >
                  Close Screen
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
