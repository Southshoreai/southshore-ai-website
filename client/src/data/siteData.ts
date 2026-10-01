export const CALENDLY_LINK = "https://calendly.com/scottpralinsky/togetha-demo";
export const SSAI_EMAIL = "info@southshore.ai";
export const TOGETHA_EMAIL = "hello@togetha-app.com";
export const PHONE_NUMBER = "+1 218-506-8426";

export interface DemoScreenshot {
  id: string;
  filename: string;
  title: string;
  subtitle: string;
  audience: string;
  highlight: string;
  description: string;
}

export const DEMO_SCREENSHOTS: DemoScreenshot[] = [
  {
    id: "01-welcome",
    filename: "01-welcome.png",
    title: "Welcome Screen",
    subtitle: "Front page of the Togetha experience",
    audience: "All visitors",
    highlight: "Calm, welcoming, plain language",
    description: "Introduces Togetha as a safe place to meet friends and find love in Massachusetts. Features quick provider-code entry."
  },
  {
    id: "03-guided-home",
    filename: "03-guided-home.png",
    title: "Guided Mode Home",
    subtitle: "One step at a time with supporter assist",
    audience: "Future Members & Families",
    highlight: "Ask Supporter for Help button on every screen",
    description: "Designed for members who prefer focused steps without clutter or sensory overwhelm. Clearly shows connected supporters."
  },
  {
    id: "04-discover-guided",
    filename: "04-discover-guided-mode.png",
    title: "Discover in Guided Mode",
    subtitle: "Paced connection, 0 of 10 looked at today",
    audience: "Members & Providers",
    highlight: "Pacing is a safety feature",
    description: "Limits daily profile discovery to 10 by default to prevent impulse fatigue and emotional overwhelm."
  },
  {
    id: "05-discover-standard",
    filename: "05-discover-standard-mode.png",
    title: "Discover in Standard Mode",
    subtitle: "Rich compatibility insights",
    audience: "Members & Coaches",
    highlight: "Provider-checked badge & shared hobbies",
    description: "Displays common interests, communication preferences, and provider affiliation badges while keeping private details protected."
  },
  {
    id: "08-safety-tip",
    filename: "08-safety-tip-in-chat.png",
    title: "In-Chat Safety Intervention",
    subtitle: "Warn, don't block",
    audience: "Safety & Families",
    highlight: "Pattern-based safety guidance",
    description: "Surfaces coaching tips when sharing phone numbers or addresses: offers 'Edit message' or 'Send anyway' without paternalistic lockouts."
  },
  {
    id: "09-money-held",
    filename: "09-message-held-for-review.png",
    title: "Financial Scam Interception",
    subtitle: "Held for human moderator review",
    audience: "Providers & Regulators",
    highlight: "Held for trained human review",
    description: "Catches money or gift-card solicitations and holds them for human moderation before the member ever sees the message."
  },
  {
    id: "10-help",
    filename: "10-help.png",
    title: "Emergency & Safety Support",
    subtitle: "Help button on every screen",
    audience: "Members & Supporters",
    highlight: "Layered escalation path",
    description: "Direct one-tap access to 911 first, designated personal safety supporters, 988 Crisis Line, and the Massachusetts DPPC hotline."
  },
  {
    id: "11-display-settings",
    filename: "11-display-settings.png",
    title: "Accessibility Display Controls",
    subtitle: "Everyday, Standard, Simplified & Guided",
    audience: "Accessibility & DDS",
    highlight: "WCAG 2.1 AA automated auditing",
    description: "Allows members to toggle reading level (simpler words), text magnification, high contrast, audio cues, and reduced motion."
  },
  {
    id: "12-my-supporters",
    filename: "12-my-supporters.png",
    title: "Supporter Permissions Control",
    subtitle: "Member autonomy first",
    audience: "Members & Families",
    highlight: "Instant member revocation",
    description: "Members choose Co-Pilot, Shadow, or Full Delegate levels per supporter, and can instantly revoke access at any time."
  },
  {
    id: "14-event",
    filename: "14-event.png",
    title: "Supported Community Events",
    subtitle: "Safe in-person meetups across Massachusetts",
    audience: "Coaches & Members",
    highlight: "Clear public-place verification",
    description: "Public library and community center gatherings. Attendees receive meet-up safety checklists with reminders that they can leave anytime."
  },
  {
    id: "16-copilot-dash",
    filename: "16-supporter-copilot-dashboard.png",
    title: "Supporter Co-Pilot Dashboard",
    subtitle: "Support without surveillance",
    audience: "Families & Caregivers",
    highlight: "Counts, not content",
    description: "Supporters see summaries and can suggest draft replies in a private queue. The member must explicitly approve every message before it sends."
  },
  {
    id: "18-agency-overview",
    filename: "18-agency-overview.png",
    title: "Provider Agency Dashboard",
    subtitle: "Multi-tenant scoped oversight",
    audience: "Provider Agencies & DDS",
    highlight: "Agencies NEVER read messages or see matches",
    description: "Agency leadership manages member invitations and aggregate safety metrics across their caseload without compromising client dignity."
  },
  {
    id: "20-moderator-queue",
    filename: "20-moderator-safety-queue.png",
    title: "Moderation Safety Queue",
    subtitle: "Human review with scoped evidence",
    audience: "Safety & Governance",
    highlight: "Immutable audit trail",
    description: "Moderators see only the flagged snippet and reason, never full chat histories. Every action is permanently logged for accountability."
  }
];
