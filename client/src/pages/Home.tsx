import React from 'react';
import { Link } from 'wouter';
import { CALENDLY_LINK } from '@/data/siteData';
import { ConceptVideo } from '@/components/ConceptVideo';
import { PerspectiveDial } from '@/components/PerspectiveDial';
import { ProofRibbon } from '@/components/ProofRibbon';
import { ScreenshotShowcase } from '@/components/ScreenshotShowcase';
import { 
  Calendar, Eye, Shield, Heart, Award, 
  ArrowRight, HeartHandshake, Layers, CheckCircle2 
} from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="space-y-24 pb-20 overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 lg:pt-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#6F47C6]/20 via-[#0D9488]/15 to-transparent rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-300 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
            <span className="font-semibold text-white">South Shore AI Flagship</span>
            <span className="text-slate-500">·</span>
            <span>Togetha Connection Framework</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] max-w-5xl mx-auto">
            Connection Deserves a <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-tealLight via-white to-togetha-purpleLight">
              Better Way In.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-serif">
            A statewide framework expanding access to safe, supported relationships for autistic adults and adults with intellectual and developmental disabilities in Massachusetts—to combat loneliness and isolation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-orange to-brand-orangeHover text-white font-semibold shadow-xl glow-orange flex items-center gap-2 hover:scale-[1.02] transition-transform"
            >
              <Calendar className="w-4 h-4" />
              <span>Book 30-Min Walkthrough</span>
            </a>

            <Link
              href="/views"
              className="px-6 py-3.5 rounded-xl bg-brand-card hover:bg-brand-slate text-slate-200 border border-white/15 font-semibold transition-all flex items-center gap-2"
            >
              <Eye className="w-4 h-4 text-brand-tealLight" />
              <span>Explore 5 System Views</span>
            </Link>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-brand-teal" />
              SSAI Technology & Operations
            </span>
            <span className="flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-togetha-purpleLight" />
              Hopeful Hearts Statewide Governance
            </span>
            <span className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-brand-orange" />
              Eunice Kennedy Shriver Center Research
            </span>
          </div>

          <div className="pt-10 max-w-5xl mx-auto">
            <ConceptVideo />
          </div>
        </div>
      </section>

      {/* 2. VERIFIED EVIDENCE RIBBON */}
      <ProofRibbon />

      {/* 3. PERSPECTIVE SWITCHER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-brand-tealLight">
            One Framework · Multiple Perspectives
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Built for Everyone in the Connection Ecosystem
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Togetha aligns the priorities of investors, DDS providers, dating coaches, members, and families into one dignified, privacy-first model.
          </p>
        </div>

        <PerspectiveDial />
      </section>

      {/* 4. THE TWO HALVES MODEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-mono uppercase tracking-wider text-togetha-purpleLight font-semibold">
                The Core Architecture
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Two Halves, One Coach.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-serif">
                Technology alone does not solve social isolation. Togetha is explicitly engineered in two complementary parts, joined by trained, paid human dating coaches.
              </p>
              <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-xs text-slate-300 space-y-2">
                <p className="font-semibold text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                  Crucial Distinction:
                </p>
                <p>
                  The app does not deliver coaching or run events. Dating coaches guide in-person matching events and skills training; the app provides a calm, safe place to meet people between events.
                </p>
              </div>
              <Link
                href="/partners/coaches"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-tealLight hover:text-white transition-colors"
              >
                <span>Read the Dating Coach & WORK Inc Model</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-brand-navy border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-togetha-purple/20 border border-togetha-purple/30 flex items-center justify-center text-togetha-purpleLight">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">The Human Program</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Trained, paid dating coaches, relationship skills workshops, and in-person matching events run with the Shriver Center and WORK Inc.
                </p>
                <ul className="text-xs text-slate-400 space-y-1.5 pt-2 border-t border-white/5">
                  <li>• 70-page co-developed manual</li>
                  <li>• Safe, calm public venues</li>
                  <li>• Focus on communication confidence</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-brand-navy border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-brand-teal/20 border border-brand-teal/30 flex items-center justify-center text-brand-tealLight">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">The Digital Platform</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  The Togetha web app: a calm, accessible statewide space to meet people between events for friendship and dating at your own pace.
                </p>
                <ul className="text-xs text-slate-400 space-y-1.5 pt-2 border-t border-white/5">
                  <li>• 4 accessible screen styles</li>
                  <li>• Paced discovery (10 profiles/day)</li>
                  <li>• Member-controlled supporters</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DEMO SCREENSHOT SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-brand-tealLight">
            Verified Working Build
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            See the Working Experience
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Explore 13 verified screens captured directly from the Togetha build. Every name and conversation is demo data seeded for supervised testing.
          </p>
        </div>

        <ScreenshotShowcase />
      </section>

      {/* 6. CALL TO ACTION / CONVERSION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-brand-orange/30 shadow-2xl relative overflow-hidden text-center space-y-6 glow-orange">
          <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-brand-orange/20 text-brand-orange border border-brand-orange/40 inline-block">
            Next Concrete Step
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Ready to See Togetha in Action?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-serif">
            Schedule a private 30-minute interactive walkthrough of the working build with South Shore AI founder Scott Pralinsky.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-brand-orange to-brand-orangeHover text-white font-bold text-base shadow-xl flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <Calendar className="w-5 h-5" />
              <span>Book 30-Minute Walkthrough</span>
            </a>
            <Link
              href="/connect"
              className="px-6 py-4 rounded-xl bg-brand-card hover:bg-brand-slate text-slate-200 border border-white/10 font-medium text-base transition-colors"
            >
              Direct Contact Directory
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
