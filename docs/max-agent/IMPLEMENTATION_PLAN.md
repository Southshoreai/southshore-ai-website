# Max — South Shore AI Agent

## Purpose

**Max** is South Shore AI’s persistent discovery agent. It helps a visitor describe a business problem or something they want to build, explore practical solution directions, and prepare for a human discovery conversation with South Shore AI.

Max is not a replacement for professional judgment, a binding estimator, or an autonomous delivery system. Its job is to make a useful next step clearer while keeping decisions, pricing approval, and client relationships with people.

## Approved visitor experience

### Entry points

1. **Persistent chat widget** available throughout the main South Shore AI site.
2. A dedicated **`/max` discovery experience** for visitors who want a focused, longer conversation.
3. The existing **`/connect`** page becomes a supporting human-contact route, not a replacement for Max.

### Conversation and lead gate

- A visitor can begin anonymously and describe the problem, desired outcome, people involved, current process, and constraints.
- Before Max reveals the final discovery report or an indicative planning range, it opens the Tally lead gate.
- Field order: **Name**, **Company** (optional), **Role** (optional), **Email**, **Phone** (optional), and an unchecked optional marketing-consent checkbox.
- **Name and Email are required.** Marketing consent is never required to receive the report.
- The visitor receives:
  - an on-page branded web report;
  - a professional PDF attachment by email; and
  - a secure magic link that resumes the same conversation on another device.
- `info@southshore.ai` receives a Tally notification containing the intake and report link.

### Pricing posture

Max may provide an **indicative, non-binding planning range** only when the active knowledge pack contains an approved pricing card that fits the request. It must state that final scope and pricing are confirmed by South Shore AI.

If Max lacks enough information or an approved pricing card, it explains the factors affecting effort and offers a discovery conversation instead of inventing a number.

## Architecture

```text
Visitor
  ├─ Site-wide Max widget
  └─ /max dedicated experience
       │
       ▼
Railway-hosted Express API
  ├─ session and message API
  ├─ policy-aware LLM orchestration
  ├─ report builder and PDF renderer
  ├─ magic-link issuance and verification
  ├─ Tally webhook verifier
  └─ email job worker
       │
       ├─ PostgreSQL (sessions, messages, leads, reports, jobs)
       ├─ production LLM API (server-side only)
       ├─ Resend or equivalent transactional email provider
       └─ Tally lead gate and signed webhook
```

### Why this structure

The current South Shore AI site already runs an Express process on Railway. Max should extend that application rather than expose an LLM key in the browser or depend on a client-only chat widget.

A Railway PostgreSQL service is needed for true persistence, report retention, one-time/expiring magic links, idempotent webhook processing, and job recovery. Browser storage alone is useful before the visitor identifies themselves, but is not enough for cross-device continuation.

A transactional email service is needed for the professional branded report and PDF. Tally’s respondent receipt and PDF of form answers remain useful as an immediate confirmation, but they are not a substitute for the generated discovery report.

## Server responsibilities

### Public API routes

| Route | Purpose |
|---|---|
| `POST /api/max/sessions` | Create anonymous session and return an opaque browser-safe ID. |
| `GET /api/max/sessions/:id` | Restore the visitor’s current conversation only when its secure session cookie or magic link authorizes access. |
| `POST /api/max/sessions/:id/messages` | Validate, redact where appropriate, persist a turn, and request a policy-constrained Max response. |
| `POST /api/max/sessions/:id/report-draft` | Create a structured private report draft and a time-limited report link before the lead gate. Do not return the report body to the visitor yet. |
| `GET /api/max/sessions/:id/tally-url` | Return the published Tally embed URL with signed, minimal hidden fields: session ID, report URL/token, title, and source. |
| `GET /api/max/sessions/:id/lead-status` | Let the embedded client detect that a Tally submission has been reconciled. |
| `POST /api/max/tally-webhook` | Verify Tally HMAC signature, deduplicate events, link the form submission to a session, and enqueue report delivery. |
| `GET /r/:token` | Verify a single-purpose report/magic token, establish a secure session, render the report, and offer “continue with Max.” |

### Background work

A separate Railway worker process should claim pending delivery jobs from PostgreSQL. It sends the branded HTML email and PDF attachment, retries transient failures, and records delivery outcomes. The Tally webhook should verify, persist, enqueue, and return a 2xx response quickly; it must not wait for an LLM call or email transmission.

## Data model

Use additive migrations and parameterized queries. Store only what is necessary for the service.

| Table | Key fields | Purpose |
|---|---|---|
| `max_sessions` | `id`, `browser_secret_hash`, `status`, `created_at`, `last_active_at` | Anonymous/persistent conversation state. |
| `max_messages` | `id`, `session_id`, `role`, `content`, `redaction_flags`, `created_at` | Conversation history. |
| `max_leads` | `id`, `session_id`, `name`, `email`, `company`, `role`, `phone`, `marketing_consent`, `tally_submission_id` | Reconciled contact record. Encrypt or restrict PII at rest according to provider capability. |
| `max_reports` | `id`, `session_id`, `structured_json`, `html_snapshot`, `pdf_storage_key`, `version`, `created_at` | Approved discovery report output. |
| `max_magic_links` | `id`, `session_id`, `token_hash`, `purpose`, `expires_at`, `consumed_at` | Rotating secure report/continuation links. |
| `max_webhook_events` | `event_id`, `source`, `payload_hash`, `received_at`, `processed_at` | Tally event deduplication and auditability. |
| `max_delivery_jobs` | `id`, `report_id`, `kind`, `status`, `attempts`, `last_error` | Reliable report email/PDF delivery. |

### Retention baseline

Do not silently set indefinite retention. Before launch, choose and publish a retention period for conversations, reports, and leads. A recommended starting policy is:

- anonymous conversations: delete after **30 days** of inactivity;
- identified leads and reports: retain for the sales/discovery lifecycle, then delete or anonymize after the approved business retention period;
- webhook event logs: retain only long enough for delivery troubleshooting;
- marketing consent: retain consent wording/version and timestamp, separate from transactional-report eligibility.

## Knowledge-pack approach

Max will use a curated, versioned knowledge pack held in the repository rather than call a consumer NotebookLM notebook at runtime. This makes every response source-controlled, reviewable, and available to the Railway application.

Use these files as the initial source of truth:

```text
docs/max-agent/
  KNOWLEDGE_PACK.md                # approved services, capabilities, evidence, boundaries
  PRICING_POLICY.example.json       # schema and rules; real values remain server-side configuration
  MAX_SYSTEM_PROMPT.md              # agent conduct and structured-output contract
  REPORT_TEMPLATE.md                # visitor-ready report structure
```

The pack must distinguish:

- current public services and proven examples;
- reasonable adjacent capabilities that require a discovery conversation;
- experimental or partner-dependent ideas;
- unavailable/out-of-scope requests.

It must never claim that a client solution, integration, outcome, price, or timeline is guaranteed without an approved source.

## LLM and report generation

### Production LLM choice

The Railway application needs a user-owned production LLM key. Do **not** reuse the sandbox’s development credentials or put any key in browser code.

The API contract should support a selected provider behind server-only environment variables, for example:

- `MAX_LLM_PROVIDER`
- `MAX_LLM_API_KEY`
- `MAX_LLM_MODEL`

The model should return strict JSON for both conversation turns and reports. Validate all output before storing or rendering it.

### Response contract

Each response should contain:

```json
{
  "visitor_message": "Plain-language response for the visitor.",
  "follow_up_question": "One useful question, or null.",
  "solution_directions": [
    {
      "label": "Short name",
      "summary": "What it could do",
      "confidence": "proven|likely|exploratory",
      "why_it_fits": "Connection to stated need"
    }
  ],
  "readiness": "continue|lead_gate|human_handoff|out_of_scope",
  "pricing_readiness": "not_ready|range_allowed|human_review_required",
  "safety_note": "Optional short privacy or boundary note"
}
```

The final report should be generated from a second strict schema, saved as JSON, rendered to an accessible branded web report, and rendered again to a fixed PDF layout. Never render raw model HTML directly.

## Privacy, safety, and honesty rules

1. Show a short, plain-language notice before the first visitor message: **do not include confidential client data, health/medical information, legal matters, financial-account information, passwords, Social Security numbers, or other sensitive personal data.**
2. Max does not provide medical, legal, financial, employment, or emergency advice. It should encourage qualified professional help where appropriate.
3. Max must not promise a project outcome, data-security certification, regulatory compliance, exact delivery date, or binding price.
4. Max must identify itself as **“Max, the South Shore AI Agent.”**
5. Max must explain when a recommendation is an illustrative direction rather than a current SSAI offering.
6. Visitor-side text input needs a length cap, rate limiting, abuse protection, and a clear error/retry state.
7. Never use customer data to train a model unless the user has made a separate, explicit decision and the provider agreement supports it.
8. Add a dedicated privacy notice and link it from the widget, `/max`, lead gate, and report.

## Tally lead gate

A draft form has been created in the **SSAI New Website Oct 2026** Tally workspace. It is deliberately **not published or embedded** yet.

It contains:

- Name and Email required;
- Company, Role, Phone, and marketing consent optional;
- the approved field order;
- CAPTCHA;
- hidden fields for Max session/report handoff;
- a branded Tally confirmation/PDF setting;
- owner notification configured for `info@southshore.ai`;
- respondent confirmation configured for the generated report link.

Before launch:

1. Publish only after the server webhook URL and signing secret are configured.
2. Configure Tally’s webhook with a signing secret and verify the `Tally-Signature` HMAC using the raw request body.
3. Set Tally respondent email delivery against the verified sender configuration and confirm plan eligibility for custom sender/PDF options.
4. Replace test/placeholder report URLs with server-created, expiring report links.
5. Test the exact embedded form callback and the email/PDF delivery path.

## Required production configuration

These values belong in Railway’s secure environment configuration, never source control or client bundles:

| Key | Purpose |
|---|---|
| `MAX_DATABASE_URL` | Railway PostgreSQL connection string. |
| `MAX_LLM_PROVIDER` / `MAX_LLM_API_KEY` / `MAX_LLM_MODEL` | Server-side production LLM access. |
| `MAX_TALLY_FORM_ID` | Published Max lead gate form identifier. |
| `MAX_TALLY_WEBHOOK_SECRET` | HMAC verification for Tally webhook requests. |
| `MAX_MAGIC_LINK_SECRET` | Key material for hashing/signing magic tokens. |
| `MAX_EMAIL_PROVIDER` / `MAX_EMAIL_API_KEY` | Transactional report email provider. |
| `MAX_EMAIL_FROM` | Verified South Shore AI sender address. |
| `MAX_EMAIL_REPLY_TO` | `info@southshore.ai`. |
| `MAX_PUBLIC_ORIGIN` | `https://www.southshore.ai`. |
| `MAX_PDF_STORAGE_*` | Durable, private report-PDF storage configuration. |

## User interface direction

### Widget

- Compact, non-intrusive launcher with the label **“Talk with Max”**.
- Expands to a focused panel, preserving keyboard navigation, readable contrast, clear loading state, and an obvious close control.
- Starts with: “Tell me what’s getting in the way—or what you want to build.”
- Links to the focused `/max` experience for larger conversations.

### Dedicated `/max` page

- Two-column desktop layout: calm conversational area plus a visible “What you’ll receive” ledger.
- Mobile-first stacked interaction with persistent input and clear progress toward a report.
- Tally gate opens inline or in an accessible modal only after Max indicates that the report is ready to prepare.
- The final web report uses the site’s teal, warm off-white, restrained orange, and existing typography—not a generic chatbot dashboard.

## Delivery sequence

1. Provision Railway PostgreSQL, transactional-email sender, production LLM key, private file storage, and Tally webhook secret.
2. Add server/database dependencies and migrations.
3. Implement session, chat, report, magic-link, Tally-webhook, and job-worker routes.
4. Add `/max`, the site-wide widget, the privacy notice, and the embedded Tally handoff.
5. Curate and approve the knowledge pack and pricing cards.
6. Configure and publish the Tally form, then connect its signed webhook.
7. Perform a staged end-to-end test with a non-production recipient before production release.

## Explicit non-goals for the first release

- No autonomous project delivery, purchasing, account creation, or external system changes.
- No binding quote, contract, or credit decision.
- No use of an unreviewed consumer NotebookLM notebook as a live public data source.
- No hidden marketing opt-in.
- No broad CRM synchronization until the lead-routing destination and retention policy are approved.
