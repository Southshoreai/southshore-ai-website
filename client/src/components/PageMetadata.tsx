import { useEffect } from 'react';

type Metadata = {
  title: string;
  description: string;
};

const ORIGIN = 'https://www.southshore.ai';

const PAGE_METADATA: Record<string, Metadata> = {
  '/': {
    title: 'South Shore AI | Custom Apps, Automation & AI Training',
    description: 'Practical AI for businesses and organizations. South Shore AI builds custom apps, automates workflows, and helps teams choose and use the right tools.',
  },
  '/services': {
    title: 'AI Services | South Shore AI',
    description: 'Explore practical AI services: workflow automation, custom applications, tool selection, team training, and executive briefings.',
  },
  '/work': {
    title: 'Our Work | South Shore AI',
    description: 'See how South Shore AI turns complex needs into working, human-centered applications, including the Togetha project.',
  },
  '/togetha': {
    title: 'Togetha | A Featured South Shore AI Project',
    description: 'Explore Togetha, a platform for friendship and dating for autistic adults and adults with intellectual and developmental disabilities.',
  },
  '/about': {
    title: 'About South Shore AI',
    description: 'Learn how South Shore AI helps leaders understand AI, choose useful tools, and turn ideas into working solutions.',
  },
  '/connect': {
    title: 'Talk to Scott | South Shore AI',
    description: 'Start a practical conversation about an AI challenge, workflow, custom app idea, training session, or briefing.',
  },
  '/max': {
    title: 'Talk with Max | South Shore AI',
    description: 'Explore a stuck process, an idea, or a practical AI next step with Max, South Shore AI’s AI guide.',
  },
};

const projectMetadata: Metadata = {
  title: 'Togetha | South Shore AI',
  description: 'Learn about Togetha’s member choice, accessibility, supporter permissions, and safety tools for supervised volunteer testing.',
};

const setMeta = (attribute: 'name' | 'property', key: string, value: string) => {
  const selector = `meta[${attribute}="${key}"]`;
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, key);
  element.content = value;
};

export const PageMetadata = ({ location }: { location: string }) => {
  useEffect(() => {
    const metadata = PAGE_METADATA[location] ?? (location.startsWith('/togetha') || ['/providers', '/partners/coaches', '/founding-partners', '/safety-and-trust', '/views'].includes(location)
      ? projectMetadata
      : PAGE_METADATA['/']);
    const url = `${ORIGIN}${location === '/' ? '/' : location}`;

    document.title = metadata.title;
    setMeta('name', 'description', metadata.description);
    setMeta('property', 'og:title', metadata.title);
    setMeta('property', 'og:description', metadata.description);
    setMeta('property', 'og:url', url);
    setMeta('name', 'twitter:title', metadata.title);
    setMeta('name', 'twitter:description', metadata.description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [location]);

  return null;
};
