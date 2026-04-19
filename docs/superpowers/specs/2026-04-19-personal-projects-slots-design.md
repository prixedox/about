# Personal project slots 2 & 3 — pitch & research-backed design

**Date:** 2026-04-19
**Scope:** Content for the two remaining `placeholder` cards in the Personal section of `index.html`. Also records the reasoning, so future "why did we pick these?" questions have an answer.

## Goal

Pick two personal projects that Martin will AI-develop next, specifically to strengthen senior-backend job applications. Constraint: projects must be personal (not paired with Arex work), and the pair together must close the gaps that the current portfolio leaves open.

## Research summary (April 2026)

Web research across 2026 hiring-signal articles converged on:

- 3–5 polished, deployed projects beat many half-finished repos.
- Observability is no longer optional for senior backend — OpenTelemetry, traces, metrics, a public dashboard.
- AI/agentic skills command the biggest salary premium in 2026; RAG, agents, MCP servers are the specific sub-skills.
- Production-ready signals: real auth, non-trivial data models, measured latency numbers.
- Public validation (a clickable URL, GitHub stars, visitor counts) separates hireable portfolios from learning projects.
- Called out by name as the 2026-impressive project: "personal life OS agent with deep context management, proactive burnout detection, privacy-first architecture."

Sources kept in conversation transcript; top three: nucamp.co "Top 10 Backend Portfolio Projects for 2026", the-ai-corner.com "AI engineer roadmap 2026", zibtek.com "Backend Development in 2026."

## Gaps in current portfolio

Before these two additions, the page has:

- **Work Projects** (6 cards) — all backend, but not clickable for recruiters (Arex/Innomotics, proprietary).
- **Personal / Vzdělej.se** — substantial frontend/education project, not backend, not AI.

No public backend service with observability. No AI-agentic build to back the "AI-augmented workflows" claim in the Stack section. Both are the specific 2026 hiring signals.

## Budget

User chose: slot 2 = 1–2 weeks of effort, slot 3 = 1–2 month flagship. This is the research-identified sweet spot and the "this-got-me-hired" tier respectively.

## Slot 2 — DeepWork (b-tier, 1–2 weeks)

Public focus-session tracker API.

- Real auth flow (non-trivial data model, user isolation)
- Rate limiting on public endpoints
- Full OpenTelemetry tracing
- Public Grafana dashboard exposing live request latency and error rates — clickable URL that proves "I ship production systems"
- Dockerized, CI/CD to Azure Container Apps

**Stack:** `.NET · Postgres · OpenTelemetry · Grafana · Azure Container Apps · Docker · GitHub Actions`

**Why this scoped hook:** matches Martin's .NET/Azure stack (deepens existing expertise, doesn't introduce a new language), small enough to ship in 1–2 weeks, public-facing so recruiters can click, the Grafana dashboard is the single most visually-confirming piece of "senior backend" evidence.

## Slot 3 — Personal Life OS (c-tier, 1–2 month flagship)

AI agent with deep memory over Martin's own data.

- Local-first RAG over notes, calendar, workouts, reading, habits
- Private self-hosted vector store — no third-party data sharing (privacy-first architecture = the research-identified differentiator)
- Exposed as an MCP server so Claude Code queries it natively
- Observability: every agent run traced (token cost, latency), evals scored against a curated question set tracked over time — shows he thinks about LLM-engineering rigor, not just "I called the API"

**Stack:** `Python · Claude API · MCP SDK · pgvector · FastAPI · OpenTelemetry · Docker`

**Why this scoped flagship:** the research specifically called out this archetype as the 2026-impressive project. It's genuinely personal (Martin's data), backs the AI-augmented claim already made on the page, and the eval/observability framing adds senior-engineer rigor that most AI side-projects lack.

## Card styling

Both inserted as `<article class="project placeholder">` — dashed border + 80% opacity retained since neither is built yet. Once shipped, remove the `placeholder` class and add a `project-link` anchor (same pattern as Vzdělej.se) pointing to the public URL or GitHub repo.

## Out of scope for this spec

Actually building either project. This spec is about the portfolio-card content and the rationale for picking these two, not an implementation plan for the underlying systems.
