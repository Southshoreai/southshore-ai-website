import { lazy, Suspense, useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CalmViewNotice } from "@/components/CalmViewNotice";
import { PageMetadata } from "@/components/PageMetadata";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { CalmViewProvider, useCalmView } from "./contexts/CalmViewContext";
import { ThemeProvider } from "./contexts/ThemeContext";

const Home = lazy(() => import("./pages/Home").then((module) => ({ default: module.Home })));
const TogethaPlatform = lazy(() => import("./pages/TogethaPlatform").then((module) => ({ default: module.TogethaPlatform })));
const MemberExperience = lazy(() => import("./pages/MemberExperience").then((module) => ({ default: module.MemberExperience })));
const Supporters = lazy(() => import("./pages/Supporters").then((module) => ({ default: module.Supporters })));
const Providers = lazy(() => import("./pages/Providers").then((module) => ({ default: module.Providers })));
const Coaches = lazy(() => import("./pages/Coaches").then((module) => ({ default: module.Coaches })));
const FoundingPartners = lazy(() => import("./pages/FoundingPartners").then((module) => ({ default: module.FoundingPartners })));
const SafetyAndTrust = lazy(() => import("./pages/SafetyAndTrust").then((module) => ({ default: module.SafetyAndTrust })));
const SystemViews = lazy(() => import("./pages/SystemViews").then((module) => ({ default: module.SystemViews })));
const About = lazy(() => import("./pages/About").then((module) => ({ default: module.About })));
const Coalition = lazy(() => import("./pages/Coalition").then((module) => ({ default: module.Coalition })));
const FieldNotes = lazy(() => import("./pages/FieldNotes").then((module) => ({ default: module.FieldNotes })));
const Readiness = lazy(() => import("./pages/Readiness").then((module) => ({ default: module.Readiness })));
const Accessibility = lazy(() => import("./pages/Accessibility").then((module) => ({ default: module.Accessibility })));
const Connect = lazy(() => import("./pages/Connect"));
const NotFound = lazy(() => import("@/pages/NotFound"));

function RouteTransition() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    requestAnimationFrame(() => document.getElementById("main-content")?.focus({ preventScroll: true }));
  }, [location]);

  return null;
}

function Router() {
  const { isCalmView } = useCalmView();
  const calmSurfaceStyle = isCalmView ? { backgroundColor: "#F2F5F6", color: "#28365A" } : undefined;

  return (
    <div className="app-shell min-h-screen flex flex-col bg-[#0A0E1A] text-slate-100" style={calmSurfaceStyle}>
      <RouteTransition />
      <PageMetadata />
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar />
      <CalmViewNotice />
      <main id="main-content" tabIndex={-1} className="flex-1" style={calmSurfaceStyle}>
        <Suspense fallback={<div role="status" className="mx-auto flex min-h-[45vh] max-w-7xl items-center px-4 text-sm text-slate-300">Preparing your view…</div>}>
          <Switch>
            <Route path={"/"} component={Home} />
            <Route path={"/togetha"} component={TogethaPlatform} />
            <Route path={"/togetha/member-experience"} component={MemberExperience} />
            <Route path={"/togetha/supporters"} component={Supporters} />
            <Route path={"/providers"} component={Providers} />
            <Route path={"/partners/coaches"} component={Coaches} />
            <Route path={"/founding-partners"} component={FoundingPartners} />
            <Route path={"/safety-and-trust"} component={SafetyAndTrust} />
            <Route path={"/views"} component={SystemViews} />
            <Route path={"/coalition"} component={Coalition} />
            <Route path={"/field-notes"} component={FieldNotes} />
            <Route path={"/readiness"} component={Readiness} />
            <Route path={"/accessibility"} component={Accessibility} />
            <Route path={"/about"} component={About} />
            <Route path={"/connect"} component={Connect} />
            <Route path={"/404"} component={NotFound} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <CalmViewProvider>
        <ThemeProvider
          defaultTheme="light"
          // switchable
        >
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </CalmViewProvider>
    </ErrorBoundary>
  );
}

export default App;
