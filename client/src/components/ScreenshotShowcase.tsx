import React, { useState } from 'react';
import { Eye, X } from 'lucide-react';
import { DEMO_SCREENSHOTS, DemoScreenshot } from '@/data/siteData';

const filters = [
  { id: 'all', label: 'All screens' },
  { id: 'members', label: 'Member experience' },
  { id: 'safety', label: 'Safety tools' },
  { id: 'supporters', label: 'Supporters' },
  { id: 'providers', label: 'Providers' },
];

const screenIdsByFilter: Record<string, string[]> = {
  members: ['01-welcome', '03-guided-home', '04-discover-guided', '05-discover-standard', '11-display-settings'],
  safety: ['08-safety-tip', '09-money-held', '10-help', '20-moderator-queue'],
  supporters: ['12-my-supporters', '16-copilot-dash'],
  providers: ['14-event', '18-agency-overview'],
};

export const ScreenshotShowcase: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeScreen, setActiveScreen] = useState<DemoScreenshot | null>(null);
  const screens = selectedFilter === 'all' ? DEMO_SCREENSHOTS : DEMO_SCREENSHOTS.filter((screen) => screenIdsByFilter[selectedFilter]?.includes(screen.id));

  return (
    <div>
      <div className="rounded-2xl border border-[#d8caee] bg-[#f8f4ff] px-4 py-3 text-sm leading-relaxed text-[#573b86]">
        <strong>Demo-data notice:</strong> These are captured from the Togetha working build in preparation for supervised testing. All participant names and interactions are simulated.
      </div>

      <div className="mt-6 flex flex-wrap gap-2" aria-label="Filter screenshots">
        {filters.map((filter) => {
          const active = filter.id === selectedFilter;
          return (
            <button key={filter.id} type="button" onClick={() => setSelectedFilter(filter.id)} className={`rounded-full px-4 py-2 text-sm font-bold transition ${active ? 'bg-[#6541b5] text-white shadow-sm' : 'border border-[#d9dde0] bg-white text-[#465955] hover:border-[#a88bdc] hover:text-[#60409f]'}`} aria-pressed={active}>
              {filter.label}{filter.id === 'all' ? ` (${DEMO_SCREENSHOTS.length})` : ''}
            </button>
          );
        })}
      </div>

      <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {screens.map((screen) => (
          <button key={screen.id} type="button" onClick={() => setActiveScreen(screen)} className="screenshot-card group">
            <span className="block bg-[#f6f5f8] p-3">
              <span className="flex min-h-[330px] items-center justify-center overflow-hidden rounded-xl bg-white">
                <img src={`/screenshots/${screen.filename}`} alt={screen.title} className="max-h-[390px] w-auto object-contain transition duration-300 group-hover:scale-[1.02]" loading="lazy" />
              </span>
            </span>
            <span className="block p-5">
              <span className="block text-xs font-extrabold uppercase tracking-[0.1em] text-[#6541a0]">{screen.highlight}</span>
              <span className="mt-2 block text-lg font-extrabold text-[#24222a]">{screen.title}</span>
              <span className="mt-2 block text-sm leading-relaxed text-[#5d6267]">{screen.description}</span>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#6541a0]"><Eye className="h-4 w-4" />Open full screen</span>
            </span>
          </button>
        ))}
      </div>

      {activeScreen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#18201f]/80 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="screenshot-title" onClick={() => setActiveScreen(null)}>
          <div className="relative grid max-h-[90vh] w-full max-w-5xl overflow-auto rounded-[1.5rem] bg-white shadow-2xl md:grid-cols-[0.95fr_1.05fr]" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-[#dadde0] bg-white text-[#303e3c] shadow-sm" onClick={() => setActiveScreen(null)} aria-label="Close screenshot detail"><X className="h-5 w-5" /></button>
            <div className="flex min-h-[360px] items-center justify-center bg-[#f7f5fa] p-6"><img src={`/screenshots/${activeScreen.filename}`} alt={activeScreen.title} className="max-h-[72vh] w-auto rounded-xl object-contain shadow-md" /></div>
            <div className="p-7 sm:p-10">
              <p className="text-xs font-extrabold uppercase tracking-[0.13em] text-[#6541a0]">{activeScreen.audience}</p>
              <h3 id="screenshot-title" className="mt-3 text-3xl font-extrabold">{activeScreen.title}</h3>
              <p className="mt-3 text-lg leading-relaxed text-[#5a5e64]">{activeScreen.subtitle}</p>
              <div className="mt-6 rounded-xl bg-[#f3effb] p-4"><p className="text-xs font-extrabold uppercase tracking-[0.11em] text-[#6541a0]">Key product behavior</p><p className="mt-2 font-bold leading-relaxed text-[#49346f]">{activeScreen.highlight}</p></div>
              <p className="mt-6 text-base leading-relaxed text-[#4f5d5a]">{activeScreen.description}</p>
              <p className="mt-6 border-t border-[#e3e1e9] pt-5 text-xs leading-relaxed text-[#706a7b]"><strong>Demo-data notice:</strong> Participant names and interactions shown in this screen are simulated for the Togetha working build.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
