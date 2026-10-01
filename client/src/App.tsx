import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Home } from "./pages/Home";
import { TogethaPlatform } from "./pages/TogethaPlatform";
import { MemberExperience } from "./pages/MemberExperience";
import { Supporters } from "./pages/Supporters";
import { Providers } from "./pages/Providers";
import { Coaches } from "./pages/Coaches";
import { FoundingPartners } from "./pages/FoundingPartners";
import { SafetyAndTrust } from "./pages/SafetyAndTrust";
import { SystemViews } from "./pages/SystemViews";
import { About } from "./pages/About";
import Connect from "./pages/Connect";

function Router() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0E1A] text-slate-100">
      <Navbar />
      <main className="flex-1">
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
          <Route path={"/about"} component={About} />
          <Route path={"/connect"} component={Connect} />
          <Route path={"/404"} component={NotFound} />
          {/* Final fallback route */}
          <Route component={NotFound} />
        </Switch>
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
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
