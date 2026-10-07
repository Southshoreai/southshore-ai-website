import React from 'react';
import { BarChart3, FileText, Globe2, Megaphone, TrendingUp } from 'lucide-react';

const metrics = [
  { label: 'Website visits', value: '4,860', note: 'Illustrative 30-day view', icon: Globe2 },
  { label: 'Guide clicks', value: '312', note: 'Illustrative interest signal', icon: FileText },
  { label: 'Email sign-ups', value: '146', note: 'Illustrative audience growth', icon: Megaphone },
  { label: 'Partner inquiries', value: '26', note: 'Illustrative outreach activity', icon: TrendingUp },
];

const weeklyTraffic = [
  { label: 'Week 1', value: 43, color: '#b9ddd1' },
  { label: 'Week 2', value: 58, color: '#8fc6b3' },
  { label: 'Week 3', value: 71, color: '#65a995' },
  { label: 'Week 4', value: 86, color: '#423b8f' },
];

const marketingUpdates = [
  ['Admissions path', 'Refreshed copy and a clearer next step for prospective families.'],
  ['Program story', 'Prepared a feature on hands-on trade learning and student confidence.'],
  ['Search visibility', 'Queued practical page updates around vocational training and independence.'],
];

export const DharmaDreamsDashboard: React.FC = () => (
  <div className="overflow-hidden border border-[#d8d4f3] bg-[#fcfbff] text-[#2a2864] shadow-[0_16px_36px_rgba(57,53,129,0.13)]" aria-label="Illustrative Dharma Dreams marketing dashboard">
    <div className="flex flex-wrap items-center justify-between gap-3 bg-[#3b367f] px-5 py-4 text-white sm:px-6">
      <div>
        <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#c6e7dc]">Dharma Dreams</p>
        <p className="mt-1 text-base font-extrabold">Growth &amp; outreach overview</p>
      </div>
      <span className="border border-white/25 bg-white/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#f4e8c0]">Illustrative demo</span>
    </div>

    <div className="p-5 sm:p-6">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map(({ label, value, note, icon: Icon }) => (
          <div key={label} className="border border-[#e5e2f5] bg-white p-4">
            <Icon className="h-4 w-4 text-[#6b64ae]" aria-hidden="true" />
            <p className="mt-5 text-2xl font-extrabold tracking-[-0.04em] text-[#2a2864]">{value}</p>
            <p className="mt-1 text-sm font-bold text-[#3b367f]">{label}</p>
            <p className="mt-2 text-[11px] leading-relaxed text-[#756f8f]">{note}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="border border-[#e5e2f5] bg-white p-5" aria-label="Illustrative traffic trend">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-extrabold text-[#2a2864]">Website attention</p>
              <p className="mt-1 text-xs leading-relaxed text-[#756f8f]">A sample view of how a useful dashboard turns outreach activity into a simple next conversation.</p>
            </div>
            <BarChart3 className="h-5 w-5 shrink-0 text-[#6b64ae]" aria-hidden="true" />
          </div>
          <div className="mt-7 flex h-28 items-end justify-between gap-3 border-b border-[#ddd9ef] pb-2">
            {weeklyTraffic.map((week) => (
              <div key={week.label} className="flex h-full flex-1 flex-col justify-end gap-2">
                <div className="w-full rounded-t-sm" style={{ height: `${week.value}%`, backgroundColor: week.color }} aria-hidden="true" />
                <span className="text-center text-[10px] font-bold text-[#756f8f]">{week.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="border border-[#e5e2f5] bg-[#f6f5fc] p-5" aria-label="Illustrative marketing updates">
          <p className="text-sm font-extrabold text-[#2a2864]">Marketing updates</p>
          <ul className="mt-4 space-y-3">
            {marketingUpdates.map(([title, detail]) => (
              <li key={title} className="border-l-2 border-[#7fba9f] pl-3">
                <p className="text-xs font-extrabold text-[#3b367f]">{title}</p>
                <p className="mt-1 text-xs leading-relaxed text-[#756f8f]">{detail}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <p className="mt-5 border-t border-[#e5e2f5] pt-4 text-[11px] leading-relaxed text-[#756f8f]">Illustrative dashboard for portfolio purposes only. All figures, trends, and updates shown here are simulated—not client data.</p>
    </div>
  </div>
);
