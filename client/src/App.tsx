import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'wouter';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageMetadata } from '@/components/PageMetadata';
import { TogethaSubnav } from '@/components/TogethaSubnav';
import { LogoIntro } from '@/components/LogoIntro';
import { Home } from '@/pages/Home';
import { Services } from '@/pages/Services';
import { OurWork } from '@/pages/OurWork';
import { TogethaPlatform } from '@/pages/TogethaPlatform';
import { MemberExperience } from '@/pages/MemberExperience';
import { Supporters } from '@/pages/Supporters';
import { Providers } from '@/pages/Providers';
import { Coaches } from '@/pages/Coaches';
import { FoundingPartners } from '@/pages/FoundingPartners';
import { SafetyAndTrust } from '@/pages/SafetyAndTrust';
import { SystemViews } from '@/pages/SystemViews';
import { About } from '@/pages/About';
import { Connect } from '@/pages/Connect';
import { Max } from '@/pages/Max';
import { MaxPrivacy } from '@/pages/MaxPrivacy';
import { MaxLauncher } from '@/components/MaxLauncher';

const projectRoutes = new Set([
  '/togetha/member-experience',
  '/togetha/supporters',
  '/providers',
  '/partners/coaches',
  '/founding-partners',
  '/safety-and-trust',
  '/views',
]);

function ScrollToPageStart({ location }: { location: string }) {
  useEffect(() => {
    if (window.location.hash) return;

    const frame = window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location]);

  return null;
}

export function App() {
  const [location] = useLocation();
  const inTogethaContext = location.startsWith('/togetha') || projectRoutes.has(location);
  const isLegacyProjectDetail = projectRoutes.has(location);
  const normalizedLocation = location === '/' ? '/' : location.replace(/\/+$/, '');
  const isMaxExperience = normalizedLocation === '/max' || normalizedLocation === '/max/privacy';

  return (
    <div className="min-h-screen bg-[#f2f5f6] text-[#272d2e]">
      <PageMetadata location={normalizedLocation} />
      <ScrollToPageStart location={location} />
      {!isMaxExperience && <LogoIntro />}
      {!isMaxExperience && <Navbar />}
      {inTogethaContext && <TogethaSubnav />}
      <main className={isLegacyProjectDetail ? 'project-detail-shell' : undefined}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/work" component={OurWork} />
          <Route path="/togetha" component={TogethaPlatform} />
          <Route path="/togetha/member-experience" component={MemberExperience} />
          <Route path="/togetha/supporters" component={Supporters} />
          <Route path="/providers" component={Providers} />
          <Route path="/partners/coaches" component={Coaches} />
          <Route path="/founding-partners" component={FoundingPartners} />
          <Route path="/safety-and-trust" component={SafetyAndTrust} />
          <Route path="/views" component={SystemViews} />
          <Route path="/about" component={About} />
          <Route path="/connect" component={Connect} />
          <Route path="/max/privacy" component={MaxPrivacy} />
          <Route path="/max" component={Max} />
          <Route><Home /></Route>
        </Switch>
      </main>
      {!isMaxExperience && <Footer />}
      <MaxLauncher />
    </div>
  );
}

export default App;
