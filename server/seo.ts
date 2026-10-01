import { DEFAULT_OG_IMAGE, SITE_ORIGIN, getSiteSeo, indexableRoutes } from "../shared/siteSeo";

const escapeHtml = (value: string) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/'/g, "&#039;");

const serializeJson = (value: unknown) => JSON.stringify(value).replace(/</g, "\\u003c");

export const renderSitemap = () => {
  const entries = indexableRoutes.map((route) => `<url><loc>${SITE_ORIGIN}${route}</loc><changefreq>weekly</changefreq><priority>${route === "/" ? "1.0" : "0.8"}</priority></url>`).join("");
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>`;
};

export const renderRobots = () => `User-agent: *\nAllow: /\nDisallow: /api/\nSitemap: ${SITE_ORIGIN}/sitemap.xml\n`;

export const renderSeoHtml = (template: string, requestPath: string) => {
  const seo = getSiteSeo(requestPath);
  const isNotFound = !seo;
  const data = seo ?? {
    title: "Page not found | South Shore AI",
    description: "The requested page could not be found.",
    heading: "Page not found",
    summary: "The page you requested is not available.",
    highlights: ["Return to the Togetha homepage"],
    path: requestPath,
  };
  const canonical = `${SITE_ORIGIN}${data.path}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": isNotFound ? "WebPage" : "WebPage",
    name: data.title,
    description: data.description,
    url: canonical,
    isPartOf: { "@type": "WebSite", name: "South Shore AI · Togetha", url: SITE_ORIGIN },
    primaryImageOfPage: { "@type": "ImageObject", contentUrl: DEFAULT_OG_IMAGE },
  };
  const head = `
    <meta name="robots" content="${isNotFound ? "noindex" : "index,follow"}" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="South Shore AI · Togetha" />
    <meta property="og:title" content="${escapeHtml(data.title)}" />
    <meta property="og:description" content="${escapeHtml(data.description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${DEFAULT_OG_IMAGE}" />
    <meta property="og:image:alt" content="Togetha working version welcome screen" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(data.title)}" />
    <meta name="twitter:description" content="${escapeHtml(data.description)}" />
    <meta name="twitter:image" content="${DEFAULT_OG_IMAGE}" />
    <script type="application/ld+json">${serializeJson(jsonLd)}</script>`;
  const snapshot = `<main id="main-content" class="seo-snapshot"><p class="seo-snapshot__eyebrow">South Shore AI · Togetha</p><h1>${escapeHtml(data.heading)}</h1><p>${escapeHtml(data.summary)}</p><ul>${data.highlights.map((highlight) => `<li>${escapeHtml(highlight)}</li>`).join("")}</ul><p class="seo-snapshot__status">Working version preparing for supervised volunteer testing in Massachusetts. Not open for public account creation.</p></main>`;

  return template
    .replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(data.title)}</title>`)
    .replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/>/, `<meta name="description" content="${escapeHtml(data.description)}" />`)
    .replace("</head>", `${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${snapshot}</div>`);
};

export const hasSeoRoute = (path: string) => Boolean(getSiteSeo(path));
