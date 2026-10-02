import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

const STORAGE_KEY = "ssai-calm-view";

// Applied only while Calm View is active. Keeping this small cascade in the
// application bundle makes the quiet-reading state reliable even if a browser
// retains a prior immutable stylesheet while a new site release is rolling out.
const CALM_VIEW_RUNTIME_CSS = `
html[data-calm-view="true"] body,
html[data-calm-view="true"] .app-shell,
html[data-calm-view="true"] main { background: #F2F5F6 !important; color: #28365A !important; }
html[data-calm-view="true"] .site-header,
html[data-calm-view="true"] .site-nav-menu,
html[data-calm-view="true"] .site-footer { background: #FFFFFF !important; border-color: #C6D4E3 !important; box-shadow: none !important; }
html[data-calm-view="true"] .site-status-banner,
html[data-calm-view="true"] .site-footer-cta { background: #EAF2F7 !important; border-color: #C6D4E3 !important; }
html[data-calm-view="true"] .glass-panel,
html[data-calm-view="true"] .brand-control-group,
html[data-calm-view="true"] .constellation-shell,
html[data-calm-view="true"] .constellation-control-group,
html[data-calm-view="true"] .constellation-active-panel,
html[data-calm-view="true"] main .bg-brand-navy,
html[data-calm-view="true"] main .bg-brand-card { background: #FFFFFF !important; border-color: #D3DCE7 !important; box-shadow: none !important; }
html[data-calm-view="true"] :is(.site-header, .site-footer, main) .text-white,
html[data-calm-view="true"] :is(.site-header, .site-footer, main) .text-slate-100,
html[data-calm-view="true"] :is(.site-header, .site-footer, main) .text-slate-200 { color: #18233F !important; }
html[data-calm-view="true"] :is(.site-header, .site-footer, main) .text-slate-300,
html[data-calm-view="true"] :is(.site-header, .site-footer, main) .text-slate-400 { color: #4B5973 !important; }
html[data-calm-view="true"] .brand-page-title,
html[data-calm-view="true"] .brand-heading-spectrum,
html[data-calm-view="true"] .home-hero-title,
html[data-calm-view="true"] main h1:not(.home-hero-title) { color: #28365A !important; background-image: none !important; -webkit-text-fill-color: #28365A !important; }
html[data-calm-view="true"] .brand-button,
html[data-calm-view="true"] .brand-button-connect,
html[data-calm-view="true"] .brand-control-active,
html[data-calm-view="true"] .brand-control-safe { color: #FFFFFF !important; box-shadow: none !important; }
`;

type CalmViewContextValue = {
  isCalmView: boolean;
  toggleCalmView: () => void;
};

const CalmViewContext = createContext<CalmViewContextValue | undefined>(undefined);

function readStoredPreference() {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(STORAGE_KEY) === "true";
}

export function CalmViewProvider({ children }: { children: ReactNode }) {
  const [isCalmView, setIsCalmView] = useState(readStoredPreference);

  useEffect(() => {
    const root = document.documentElement;

    if (isCalmView) {
      root.dataset.calmView = "true";
    } else {
      delete root.dataset.calmView;
    }

    window.localStorage.setItem(STORAGE_KEY, String(isCalmView));
  }, [isCalmView]);

  const value = useMemo(
    () => ({
      isCalmView,
      toggleCalmView: () => setIsCalmView((current) => !current),
    }),
    [isCalmView],
  );

  return (
    <CalmViewContext.Provider value={value}>
      {isCalmView && <style id="calm-view-runtime-styles">{CALM_VIEW_RUNTIME_CSS}</style>}
      {children}
    </CalmViewContext.Provider>
  );
}

export function useCalmView() {
  const context = useContext(CalmViewContext);

  if (!context) {
    throw new Error("useCalmView must be used within CalmViewProvider");
  }

  return context;
}
