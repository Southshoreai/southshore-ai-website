import React from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle2, Compass, ExternalLink, Shield, Users } from 'lucide-react';
import { DharmaDreamsDashboard } from '../components/DharmaDreamsDashboard';

const operatingOutcomes = [
  'Leaders could see a current picture across records, policies, notes, dashboards, and staff updates.',
  'Meeting decisions and action items were prepared for the next work cycle instead of being left in notes.',
  'Daily accomplishments and direct-report updates could be assembled into leadership and board-ready reporting with human review before delivery.',
  'Possible risks and policy implications were flagged for human and compliance review.',
];

const shorelineViews = [
  { src: '/assets/work-proof/shoreline-home.jpg', alt: 'The Shoreline public directory homepage' },
  { src: '/assets/work-proof/shoreline-directory.jpg', alt: 'The Shoreline directory search and business-card results' },
  { src: '/assets/work-proof/shoreline-listing.jpg', alt: 'The Shoreline South Shore AI listing view' },
];

const zunoViews = [
  { src: '/assets/work-proof/zuno-members-fictional.jpg', alt: 'Zuno community members interface with fictional portrait avatars' },
  { src: '/assets/work-proof/zuno-welcome-fictional.jpg', alt: 'Zuno welcome screen with fictional people in the background collage' },
];

export const OurWork: React.FC = () => (
  <div className="ssai-page overflow-hidden">
    <section className="bg-[#fff3ed] px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
      <div className="ssai-container relative overflow-hidden border border-[#ffcaad] bg-[#fffaf7] px-6 py-7 shadow-[0_20px_42px_rgba(185,85,0,0.1)] sm:px-10 sm:py-9 lg:px-12 lg:py-10">
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#ef7723]/20 blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 left-[46%] h-36 w-36 rounded-full bg-[#1ba9a0]/20 blur-2xl" aria-hidden="true" />
        <div className="relative max-w-3xl">
          <p className="inline-flex border border-[#f5b080] bg-white px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#b95500]">Our Work</p>
          <h1 className="mt-4 text-3xl font-extrabold leading-[0.98] tracking-[-0.045em] text-[#272d2e] sm:text-4xl lg:text-5xl">Real systems. <span className="text-[#b95500]">Real work.</span> Clearer next steps.</h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#565f61] sm:text-lg">A few working examples of how South Shore AI helps people see, manage, and move everyday work forward.</p>
        </div>
      </div>
    </section>

    <section className="bg-[#f4f0ff] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20" aria-labelledby="togetha-work-heading">
      <article className="ssai-container relative overflow-hidden border border-[#d9cdf0] bg-white shadow-[0_20px_48px_rgba(85,54,137,0.12)]">
        <div className="grid lg:grid-cols-[1.06fr_0.94fr]">
          <div className="relative z-10 p-7 sm:p-10 lg:p-14">
            <div className="inline-flex border border-[#ddd2f4] bg-[#fbfaff] p-3">
              <img src="/assets/2026-08-10-togetha-logo-horizontal-transparent.png" alt="Togetha" className="h-auto w-40 sm:w-48" />
            </div>
            <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.15em] text-[#7650bb]">Featured product</p>
            <h2 id="togetha-work-heading" className="mt-4 max-w-xl text-4xl font-extrabold leading-[1.01] tracking-[-0.035em] sm:text-5xl">Connection, at your pace.</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#565f61]">A working friendship and dating platform designed around choice, clarity, and support for autistic adults and adults with intellectual and developmental disabilities.</p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm font-bold text-[#55378c]">
              <span className="border border-[#d9cdf0] bg-[#f8f5ff] px-3 py-2">Member choice</span>
              <span className="border border-[#d9cdf0] bg-[#f8f5ff] px-3 py-2">Support built in</span>
            </div>
            <Link href="/togetha" className="ssai-button mt-8">Explore Togetha <ArrowRight className="h-4 w-4" /></Link>
          </div>

          <div className="relative flex min-h-[34rem] items-end justify-center overflow-hidden bg-[#281b42] px-8 pt-12 sm:min-h-[38rem]">
            <div className="absolute -right-16 top-8 h-64 w-64 rounded-full bg-[#f38877]/70 blur-3xl" aria-hidden="true" />
            <div className="absolute -left-10 bottom-6 h-48 w-48 rounded-full bg-[#7d59c7]/80 blur-3xl" aria-hidden="true" />
            <div className="absolute right-8 top-8 border border-white/20 bg-white/10 px-3 py-2 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#efe7ff]">Working product</div>
            <div className="relative z-10 w-[13.75rem] rounded-[2.2rem] border-[9px] border-[#111323] bg-[#111323] p-1.5 shadow-[0_28px_44px_rgba(0,0,0,0.36)] sm:w-[16.25rem]">
              <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-[#111323]" aria-hidden="true" />
              <img src="/screenshots/01-welcome.png" alt="Togetha welcome screen shown in a phone frame" className="h-auto w-full rounded-[1.58rem]" />
            </div>
          </div>
        </div>
      </article>
    </section>

    <section className="bg-[#fffaf7] px-5 pb-14 pt-10 sm:px-8 sm:pb-16 sm:pt-12 lg:px-10 lg:pb-20" aria-labelledby="intelligence-heading">
      <div className="ssai-container grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <div>
          <p className="inline-flex bg-[#f0e8ff] px-3 py-1 text-xs font-extrabold uppercase tracking-[0.13em] text-[#6541a0]">Confidential I/DD services organization</p>
          <h2 id="intelligence-heading" className="mt-5 text-4xl font-extrabold leading-[1.03] sm:text-5xl">Management Intelligence System</h2>
          <p className="mt-5 text-lg leading-relaxed text-[#565f61]">Built and ran a private, daily updated intelligence layer that connected the records, policies, meeting notes, staff updates, action items, dashboards, and reporting that leadership depended on.</p>
          <p className="mt-4 text-lg leading-relaxed text-[#565f61]">The goal was not to replace judgment. It was to give leaders a current operating picture and bring possible risks or policy implications forward for human and compliance review.</p>
        </div>
        <div className="bg-[#211a31] p-6 text-white shadow-[0_18px_42px_rgba(50,31,82,0.13)] sm:p-9">
          <div className="flex items-center gap-3 text-[#d7c0ff]"><Shield className="h-5 w-5" /><span className="text-xs font-extrabold uppercase tracking-[0.14em]">Connected daily operations</span></div>
          <ul className="mt-6 space-y-5">
            {operatingOutcomes.map((outcome) => <li key={outcome} className="flex gap-3 text-base leading-relaxed text-[#e5def0]"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#bfa2ef]" />{outcome}</li>)}
          </ul>
          <p className="mt-7 border-t border-white/15 pt-5 text-xs leading-relaxed text-[#c8bfd7]">Client identity, scale, dates, and source materials remain confidential.</p>
        </div>
      </div>
    </section>

    <section className="bg-[#f2f5f6] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24" aria-labelledby="visual-proof-heading">
      <div className="ssai-container">
        <div className="max-w-3xl">
          <p className="ssai-eyebrow">More proof, more visible</p>
          <h2 id="visual-proof-heading" className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">The screen is part of the story.</h2>
          <p className="mt-5 text-lg leading-relaxed text-[#565f61]">A community needs a place to belong. A local business needs a way to be found. These are the real interfaces behind the work.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="overflow-hidden border border-[#b9dbe0] bg-white shadow-[0_14px_32px_rgba(19,105,117,0.08)]">
            <div className="bg-[#e76f1a] p-3 sm:p-4">
              <figure className="overflow-hidden border border-white/30 bg-white shadow-[0_12px_24px_rgba(83,31,10,0.2)]">
                <img src={zunoViews[0].src} alt={zunoViews[0].alt} className="w-full" loading="lazy" />
              </figure>
              <figure className="ml-auto mt-4 w-[76%] overflow-hidden border border-white/30 bg-white shadow-[0_12px_24px_rgba(83,31,10,0.2)]">
                <img src={zunoViews[1].src} alt={zunoViews[1].alt} className="w-full" loading="lazy" />
              </figure>
            </div>
            <div className="p-7 sm:p-8">
              <Users className="h-7 w-7 text-[#136975]" />
              <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.14em] text-[#136975]">Community operations</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight">Zuno provider and family communities</h2>
              <p className="mt-4 text-base leading-relaxed text-[#565f61]">Set up and ran Mighty Networks communities designed for providers and families to connect, communicate, and find useful shared information. The experience paired a welcoming front door with useful ways to discover people and spaces.</p>
              <p className="mt-4 text-xs leading-relaxed text-[#6f787b]">Portraits shown are fictional replacements used to protect member privacy.</p>
            </div>
          </article>

          <article className="overflow-hidden border border-[#cdd8e5] bg-white shadow-[0_14px_32px_rgba(15,37,70,0.09)]">
            <div className="grid grid-cols-2 gap-2 bg-[#10233f] p-3 sm:p-4">
              <figure className="col-span-2 overflow-hidden border border-white/15 bg-white"><img src={shorelineViews[0].src} alt={shorelineViews[0].alt} className="w-full" loading="lazy" /></figure>
              <figure className="overflow-hidden border border-white/15 bg-white"><img src={shorelineViews[1].src} alt={shorelineViews[1].alt} className="w-full" loading="lazy" /></figure>
              <figure className="overflow-hidden border border-white/15 bg-white"><img src={shorelineViews[2].src} alt={shorelineViews[2].alt} className="w-full" loading="lazy" /></figure>
            </div>
            <div className="p-7 sm:p-8">
              <Compass className="h-7 w-7 text-[#6541a0]" />
              <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.14em] text-[#6541a0]">Local discovery</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight">The Shoreline directory</h2>
              <p className="mt-4 text-base leading-relaxed text-[#565f61]">Built a public local-business directory that makes it easier to browse, claim, and keep a business presence current. The live product connects a directory home, a practical browse flow, and individual listing pages.</p>
              <a href="https://shorelinedb-vbu33m44.manus.space/" target="_blank" rel="noreferrer" className="ssai-link mt-5">Visit The Shoreline <ExternalLink className="h-4 w-4" /></a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section className="bg-[#eaf9fc] px-5 py-12 sm:px-8 sm:py-16 lg:px-10" aria-labelledby="dharma-heading">
      <article className="ssai-container overflow-hidden border border-[#b0e1ea] bg-white shadow-[0_18px_44px_rgba(19,105,117,0.09)]">
        <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
          <div className="bg-[#043239] p-7 text-white sm:p-10 lg:p-14">
            <img src="/assets/work-proof/dharma-dreams-logo-sunburst.jpg" alt="Dharma Dreams Vocational Center — Where Life Purpose Becomes A Reality" className="h-auto w-[13.5rem] shadow-[0_8px_18px_rgba(0,0,0,0.16)] sm:w-[15.5rem]" />
            <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.14em] text-[#b0e1ea]">Client delivery</p>
            <h2 id="dharma-heading" className="mt-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl">Dharma Dreams reporting portal</h2>
            <p className="mt-5 text-xl leading-relaxed text-[#d6f1f7]">A client should be able to see their own information without another email thread.</p>
            <p className="mt-8 border-t border-white/15 pt-5 text-sm leading-relaxed text-[#b8dce2]">The public organization’s mission informed the vocabulary of this proof point. The dashboard at right is an original portfolio simulation—not a view into the client’s systems.</p>
          </div>
          <div className="p-7 sm:p-10 lg:p-12">
            <p className="max-w-3xl text-lg leading-relaxed text-[#565f61]">Dharma Dreams is a multi-tenant portal built so each client can see their own data and updates in one place. It turns a familiar client-service bottleneck into a clearer, more useful experience.</p>
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {['Client-specific view', 'Updates without email back-and-forth', 'A portal shaped around the real service relationship'].map((item) => (
                <div key={item} className="border-l-2 border-[#1ba653] bg-[#e8fcec] p-4 text-sm font-bold leading-relaxed text-[#005224]"><CheckCircle2 className="mb-3 h-5 w-5 text-[#007033]" />{item}</div>
              ))}
            </div>
            <div className="mt-8"><DharmaDreamsDashboard /></div>
          </div>
        </div>
      </article>
    </section>

    <section className="ssai-section bg-white">
      <div className="ssai-container max-w-5xl border border-[#d0d8db] bg-[#eaf9fc] px-6 py-10 sm:px-10 sm:py-12">
        <p className="ssai-eyebrow">Your work could be next</p>
        <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Bring the process that needs a better way to work.</h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#565f61]">You do not need a finished specification. Start with the task, report, portal, knowledge problem, or community challenge that keeps taking more effort than it should.</p>
        <Link href="/connect" className="ssai-button mt-7">Talk to Scott <ArrowRight className="h-4 w-4" /></Link>
      </div>
    </section>
  </div>
);
