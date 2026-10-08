# Max Implementation To Do

- [x] **Create the Max lead-capture form as a Tally draft in the SSAI New Website Oct 2026 workspace.** Use the exact order Name, Company, Role, Email, Phone; require Name and Email; make Company, Role, and Phone optional; include an unchecked optional marketing-consent checkbox; add CAPTCHA and minimal hidden fields for the Max session/report handoff. Do not publish or embed the form before a signed webhook and report delivery path exist.

- [x] **Configure the Max Tally draft with the South Shore AI visual language and lead-routing intent.** Set a notification to `info@southshore.ai`; prepare a respondent confirmation and form-answer PDF attachment; keep final report delivery separate so a generated professional report can be sent with its own branded PDF and secure continuation link.

- [x] **Define the durable knowledge, conversation, pricing, reporting, safety, and privacy architecture for Max.** Support both a site-wide widget and `/max`; allow anonymous exploration; gate the final report and any indicative non-binding planning range behind the approved lead form; use a curated source-controlled knowledge pack; preserve human review and final scope/pricing confirmation.

- [ ] **Provision the production services before exposing Max to public visitors.** Add Railway PostgreSQL, a user-owned production LLM credential, a verified transactional email sender, private PDF/report storage, a Tally webhook signing secret, and the final data-retention policy. Do not place any secret in source control or client code.

- [ ] **Implement the persistent Max server and delivery worker.** Create secure session/message/report records; use server-only LLM calls; validate structured output; create expiring magic links; verify and deduplicate Tally webhook events; send a branded HTML report and PDF; and support safe retry/recovery when a delivery fails.

- [ ] **Implement the visitor-facing Max experience.** Add both the persistent site-wide “Talk with Max” widget and the dedicated `/max` page; preserve keyboard/mobile accessibility and reduced-motion behavior; include clear sensitive-data boundaries and a privacy notice; show the published Tally lead gate only when a report is ready; and never make the marketing checkbox a condition of report delivery.

- [ ] **Review and approve the curated knowledge pack and pricing cards before enabling indicative ranges.** Include public SSAI services, proven work, approved adjacent capabilities, source owners, boundaries, and actual pricing cards; preserve the notice “Final scope and pricing are confirmed by South Shore AI”; never allow Max to invent price, timeline, outcomes, or service claims.

- [ ] **Validate a staged end-to-end visitor journey before production release.** Use a non-production recipient to check anonymous chat, lead gate, Tally HMAC validation, owner notice to `info@southshore.ai`, respondent confirmation, generated branded web report, attached PDF, magic-link resumption, optional consent handling, and error/retry behavior. Do not publish the Max feature until the full flow succeeds.