import React from 'react';
import { Link } from 'wouter';
import { AppWindow, ArrowRight, Compass, GraduationCap, Landmark, Repeat2, SearchCheck } from 'lucide-react';

const services = [
  { icon: SearchCheck, title: 'Find your first AI win', text: 'We look at how work moves today, identify a realistic place AI can help, and give you a clear next step.' },
  { icon: Repeat2, title: 'Automate repetitive work', text: 'Reduce handoffs, copying, chasing, and manual updates with workflows shaped around the way your business already works.' },
  { icon: AppWindow, title: 'Build a custom app', text: 'Turn an idea, spreadsheet, or awkward workaround into a practical tool that people can actually use.' },
  { icon: Compass, title: 'Choose the right tools', text: 'Get plain guidance about which AI tools fit your needs, budget, policies, and existing systems.' },
  { icon: GraduationCap, title: 'Train your team', text: 'Build confidence through practical sessions tied to the tasks your team needs to complete.' },
  { icon: Landmark, title: 'Brief your board or audience', text: 'Make AI understandable with tailored keynotes, executive briefings, and useful demonstrations.' },
];

const serviceSteps = [
  ['01', 'Make sense of it', 'Find the work that is taking more time than it should.'],
  ['02', 'Put it to work', 'Choose, configure, or build the right practical solution.'],
  ['03', 'Help people use it', 'Leave your team with a clear, confident way forward.'],
];

export const Services: React.FC = () => (
  <div className="ssai-page overflow-hidden">
    <section className="bg-[#eaf9fc] px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-12">
      <div className="ssai-container overflow-hidden rounded-lg border border-[#b0e1ea] bg-[#0e1112] shadow-[0_28px_60px_rgba(4,50,57,0.18)]">
        <div className="grid min-h-[590px] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative z-10 flex flex-col justify-center p-7 text-white sm:p-12 lg:p-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(21,130,146,0.62),transparent_42%),linear-gradient(145deg,#0e1112_4%,#043239_100%)]" aria-hidden="true" />
            <div className="relative">
              <p className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#b0e1ea]"><span className="h-px w-7 bg-[#b0e1ea]" />Services</p>
              <h1 className="mt-6 max-w-xl text-5xl font-extrabold leading-[0.94] tracking-[-0.055em] text-white sm:text-6xl">Useful AI, built around <span className="text-[#fea877]">how work really happens.</span></h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#d0d8db] sm:text-xl">South Shore AI helps leaders move from an annoying, unclear problem to a useful next step—without adding another pile of tools for people to manage.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/connect" className="ssai-button">Talk through a problem <ArrowRight className="h-4 w-4" /></Link>
                <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/12">See the ways we help</a>
              </div>
            </div>
          </div>

          <div className="relative min-h-[400px] overflow-hidden p-5 sm:p-9 lg:p-12">
            <img src="/assets/ssai-redesign/new-england-team-proof.jpg" alt="Business leaders collaborating in a New England workspace" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(14,17,18,0.78),rgba(14,17,18,0.24)_68%,rgba(14,17,18,0.42))]" aria-hidden="true" />
            <div className="relative flex h-full items-center">
              <div className="w-full max-w-[34rem] border border-white/20 bg-[#ffffffed] p-5 shadow-[0_24px_48px_rgba(0,0,0,0.28)] backdrop-blur sm:p-7">
                <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#136975]">A practical working session</p>
                <p className="mt-3 text-2xl font-extrabold leading-tight text-[#272d2e]">We make the next right move visible.</p>
                <div className="mt-6 space-y-3">
                  {serviceSteps.map(([number, title, text]) => (
                    <div key={number} className="grid grid-cols-[2.7rem_1fr] gap-3 border-l-2 border-[#ef7723] bg-[#f2f5f6] p-4">
                      <span className="text-xs font-extrabold tracking-[0.14em] text-[#b95500]">{number}</span>
                      <div><h2 className="font-extrabold text-[#272d2e]">{title}</h2><p className="mt-1 text-sm leading-relaxed text-[#565f61]">{text}</p></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="services" className="bg-[#f2f5f6] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="ssai-container">
        <div className="max-w-3xl">
          <p className="ssai-eyebrow">Ways we can help</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-[1.02] sm:text-5xl">Choose a clear next step—not a generic transformation plan.</h2>
          <p className="mt-5 text-lg leading-relaxed text-[#565f61]">You may need a short advisory conversation, a better workflow, a working tool, or a room full of people who need to understand what is changing. We can meet you where the work is.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="ssai-card group p-7 transition hover:-translate-y-1 hover:border-[#87cdda] hover:shadow-[0_18px_36px_rgba(19,105,117,0.12)]">
                <span className="grid h-11 w-11 place-items-center rounded-md bg-[#eaf9fc] text-[#136975]"><Icon className="h-5 w-5" /></span>
                <h3 className="mt-5 text-2xl font-extrabold">{service.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-[#565f61]">{service.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>

    <section className="ssai-section bg-white">
      <div className="ssai-container grid gap-8 border border-[#d0d8db] bg-[#fff3ed] p-7 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:p-14">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.15em] text-[#b95500]"><span className="h-px w-7 bg-[#ef7723]" />Not sure where to begin?</p>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Start with the part of work that keeps getting in the way.</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#565f61]">You do not need a finished technology plan. Bring the frustrating task, decision, or app idea, and we will help you identify a sensible next step.</p>
        </div>
        <div className="lg:text-right"><Link href="/connect" className="ssai-button">Talk to Scott <ArrowRight className="h-4 w-4" /></Link></div>
      </div>
    </section>
  </div>
);
