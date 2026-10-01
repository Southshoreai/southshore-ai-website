import { useEffect } from "react";
import { useLocation } from "wouter";
import { DEFAULT_OG_IMAGE, SITE_ORIGIN, getSiteSeo } from "@shared/siteSeo";

function upsertMeta(attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

export function PageMetadata() {
  const [location] = useLocation();

  useEffect(() => {
    const seo = getSiteSeo(location);
    if (!seo) {
      document.title = "Page not found | South Shore AI";
      upsertMeta("name", "robots", "noindex");
      return;
    }

    const canonical = `${SITE_ORIGIN}${seo.path}`;
    document.title = seo.title;
    upsertMeta("name", "description", seo.description);
    upsertMeta("name", "robots", "index,follow");
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", "South Shore AI · Togetha");
    upsertMeta("property", "og:title", seo.title);
    upsertMeta("property", "og:description", seo.description);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:image", DEFAULT_OG_IMAGE);
    upsertMeta("property", "og:image:alt", "Togetha working version welcome screen");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", seo.title);
    upsertMeta("name", "twitter:description", seo.description);
    upsertMeta("name", "twitter:image", DEFAULT_OG_IMAGE);

    let canonicalLink = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;
  }, [location]);

  return null;
}
