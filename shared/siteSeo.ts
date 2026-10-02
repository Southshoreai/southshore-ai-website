export const SITE_ORIGIN = "https://www.southshore.ai";
export const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/screenshots/01-welcome.png`;

export type SiteSeo = {
  path: string;
  title: string;
  description: string;
  heading: string;
  summary: string;
  highlights: string[];
};

export const siteSeo: Record<string, SiteSeo> = {
  "/": {
    path: "/",
    title: "Togetha | Supported Connection in Massachusetts",
    description: "Togetha is a working, accessible framework for safe, supported friendship and dating for autistic adults and adults with I/DD in Massachusetts.",
    heading: "Connection deserves a better way in.",
    summary: "Togetha is a working version preparing for supervised volunteer testing. It joins a calm, accessible platform with trained human support and real-world connection opportunities.",
    highlights: ["Friendship, dating, or both", "Member-paced discovery and consent-based support", "Safety and accessibility built in from the start"],
  },
  "/togetha": {
    path: "/togetha",
    title: "Togetha Platform | Accessible Friendship & Dating",
    description: "Explore Togetha’s accessible platform for friendship and dating: member-paced discovery, four screen styles, supporter choice, and visible safety tools.",
    heading: "A calm, accessible digital space for friendship and dating.",
    summary: "The working Togetha platform is designed around member autonomy, sensory comfort, privacy, and safety without paternalistic barriers.",
    highlights: ["Four member-chosen screen styles", "Display settings separate from screen style", "Supporter permissions can be granted and revoked by the member"],
  },
  "/togetha/member-experience": {
    path: "/togetha/member-experience",
    title: "Member Experience | Togetha",
    description: "See how Togetha supports members who want friendship, dating, or both with calm pacing, clear choices, and accessible controls.",
    heading: "The member experience: choice, pace, and connection.",
    summary: "Togetha is being prepared for supervised volunteer testing. It is not open for public account creation.",
    highlights: ["Choose friendship, dating, or both", "Move at a member-chosen pace", "Use support only when it is wanted"],
  },
  "/togetha/supporters": {
    path: "/togetha/supporters",
    title: "Supporter Choice & Consent | Togetha",
    description: "Togetha lets members invite a trusted supporter, choose the help they want, and revoke access at any time.",
    heading: "Support can be close without taking control.",
    summary: "Supporter access is member-granted, consent-based, and scoped to the role a member chooses.",
    highlights: ["Co-Pilot, Shadow, and Full Delegate roles", "Member controls what a supporter can see", "Access can be removed instantly"],
  },
  "/providers": {
    path: "/providers",
    title: "Provider Agencies & DDS | Togetha",
    description: "Explore Togetha’s provider perspective: agency support, accessible connection, privacy boundaries, and an evidence-led statewide framework.",
    heading: "A provider role without private-message surveillance.",
    summary: "Provider agencies can support access and community participation without reading members’ private conversations or match lists.",
    highlights: ["Agency tools without private-message access", "Member-led supporter permissions", "Working version preparing for supervised testing"],
  },
  "/partners/coaches": {
    path: "/partners/coaches",
    title: "Dating Coaches & WORK Inc | Togetha",
    description: "Learn how Togetha joins a working digital platform to trained dating coaches, relationship skills support, and in-person matching events.",
    heading: "Technology and trained human support work together.",
    summary: "The app does not deliver coaching or run events. Coaches and program partners guide in-person support while the platform offers a calm place to connect between events.",
    highlights: ["Trained, paid dating coaches", "Relationship skills and matching events", "Digital connection between real-world opportunities"],
  },
  "/founding-partners": {
    path: "/founding-partners",
    title: "Founding Partner Opportunity | Togetha",
    description: "Explore Togetha’s evidence, supervised-test readiness, human program, safety infrastructure, and founding partner briefing opportunities.",
    heading: "Help open the door to supported connection.",
    summary: "Founding partners can focus a private briefing on the supervised volunteer test, dating coach training, matching events, safety, or scholarship access.",
    highlights: ["35 adults volunteered to help test the working build", "Pilot evidence is shown with source context", "No public ROI calculator or invented outcomes"],
  },
  "/safety-and-trust": {
    path: "/safety-and-trust",
    title: "Safety & Trust | Togetha",
    description: "See how Togetha approaches safety: practical guidance, human review of money requests, visible help, reporting options, and member control.",
    heading: "Coaching and protection, not surveillance.",
    summary: "Togetha distinguishes warnings, held-for-review messages, emergency help, reporting, and supporter access so members and families can understand the choices.",
    highlights: ["Warn, do not silently block", "Money and gift-card requests are held for trained review", "Members can report, block, mute, or end a conversation"],
  },
  "/views": {
    path: "/views",
    title: "Five System Views | Togetha",
    description: "Explore Togetha through the perspectives of members, supporters, providers, coaches, and founding partners.",
    heading: "One framework, multiple perspectives.",
    summary: "The same Togetha framework offers different benefits to members, families, providers, coaches, and founding partners without changing its member-first foundation.",
    highlights: ["Member dignity and choice", "Supporter access only by consent", "Evidence for providers and funders"],
  },
  "/coalition": {
    path: "/coalition",
    title: "Coalition Model | Togetha",
    description: "Meet the Togetha coalition: members, Hopeful Hearts, the Shriver Center, WORK Inc, dating coaches, and South Shore AI—each with a clear role.",
    heading: "A coalition with clear roles and a member at the center.",
    summary: "Togetha connects mission governance, research and training, program partners, coaches, and technology operations around member choice and consent.",
    highlights: ["Hopeful Hearts leads mission and scholarship administration", "South Shore AI builds and operates the platform", "Members remain at the center of relationship and consent decisions"],
  },
  "/field-notes": {
    path: "/field-notes",
    title: "Field Notes | Togetha",
    description: "Read short, sourced Togetha field notes on connection, pacing, supporter consent, human coaching, privacy, and public readiness.",
    heading: "Field notes from building a better way in.",
    summary: "A small editorial library explaining the documented evidence and product principles behind Togetha’s supported-connection framework.",
    highlights: ["Every note names its author, date, sources, and public status", "No fabricated participant stories", "Evidence and context remain linked"],
  },
  "/readiness": {
    path: "/readiness",
    title: "Public Readiness | Togetha",
    description: "See Togetha’s transparent public status: what is built now, what is preparing for supervised testing, and what evidence comes next.",
    heading: "Clear about where we are and what comes next.",
    summary: "Togetha is a working version with demo data, preparing for supervised volunteer testing. It is not launched or open for public account creation.",
    highlights: ["Working app, safety, accessibility, and supporter tools", "Preparing for supervised volunteer testing", "Learning will use aggregate experience and safety evidence"],
  },
  "/accessibility": {
    path: "/accessibility",
    title: "Accessibility Statement | South Shore AI",
    description: "Read how the South Shore AI marketing site supports keyboard navigation, motion preferences, contrast, Calm View, and direct accessibility support.",
    heading: "Accessibility is part of how this site works.",
    summary: "The public marketing site includes keyboard focus visibility, a skip link, motion preferences, a Calm View, and clear contact routes for accessibility feedback.",
    highlights: ["Keyboard and focus support", "Calm View and reduced-motion support", "Direct accessibility feedback contact"],
  },
  "/about": {
    path: "/about",
    title: "About South Shore AI | Human Systems",
    description: "Meet South Shore AI and founder Scott Pralinsky, the team building Togetha and other serious, human-centered systems.",
    heading: "South Shore AI builds serious, human systems.",
    summary: "South Shore AI is the commercial technology venture that builds and operates the Togetha platform under contract while preserving a member-first, mission-led framework.",
    highlights: ["Executive leadership and technical operations", "Togetha is the South Shore AI flagship", "Mission-aligned technology execution"],
  },
  "/connect": {
    path: "/connect",
    title: "Connect With South Shore AI | Togetha",
    description: "Contact South Shore AI or request a private walkthrough of the Togetha working build for founding partners, providers, and coalition stakeholders.",
    heading: "Start the right conversation.",
    summary: "Request a private briefing, find the appropriate contact route, or learn how to discuss the Togetha working build with the team.",
    highlights: ["Private walkthrough requests", "Contact routes for stakeholder conversations", "Working version preparing for supervised testing"],
  },
  "/resources": {
    path: "/resources",
    title: "SSAI Resources | Free Everyday Muse Starter Guide",
    description: "Get South Shore AI’s free Everyday Muse Starter Guide: five real-life examples, seven prompts to copy, and a review-before-action rule.",
    heading: "Muse, make room.",
    summary: "A colorful, practical guide for using Muse to carry the research, planning, reminders, and first drafts forward.",
    highlights: ["Five everyday life and work examples", "Seven copy-ready prompts", "A clear human-control rule"],
  },
  "/resources/muse": {
    path: "/resources/muse",
    title: "Muse, Make Room | Everyday Starter Guide by SSAI",
    description: "A practical, no-jargon South Shore AI field guide to starting with Muse: five real-life examples, seven prompts, and a review-before-action rule.",
    heading: "Muse, make room.",
    summary: "Start with one real task, clear boundaries, and review-before-action guidance.",
    highlights: ["A ten-minute setup", "Five human-sized scenarios", "A seven-day experiment"],
  },
};

export const getSiteSeo = (path: string): SiteSeo | undefined => {
  const normalized = path === "/" ? "/" : path.replace(/\/+$/, "");
  return siteSeo[normalized];
};

export const indexableRoutes = Object.keys(siteSeo).filter((path) => path !== "/connect");
