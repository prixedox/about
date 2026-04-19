# Projects section reframe — design

**Date:** 2026-04-19
**File touched:** `index.html` only

## Why

The Projects section currently lists 4 cards that each duplicate a job already described under Experience. Martin plans to AI-develop 3 personal projects next and wants them shown on the site when ready, but they do not exist yet. The live site must not display "coming soon" placeholders.

## Decision

Split the single **Projects** section into two:

- **Work Projects** — active now (the existing 4 cards, heading renamed).
- **Personal Projects** — scaffolded as an HTML comment containing a fully-formed `<section>` with 3 placeholder `<article class="project">` cards. Uncommented and filled in per-project as each one ships.

Navigation keeps a single **"Projects"** entry pointing to the Work Projects section (anchor `#projects` unchanged). A commented-out `<li>` for **"Personal"** sits next to it, to be activated together with the section. At activation, the visible "Projects" label is renamed to "Work".

## Changes to `index.html`

1. Line 161: `<h2>Projects</h2>` → `<h2>Work Projects</h2>`. Keep `id="projects"` so the nav anchor still works.
2. Inside `<ul class="nav-links">`: one new HTML-comment line holding a ready-to-uncomment `<li><a href="#personal-projects">Personal</a></li>`, placed after the existing Projects `<li>`.
3. After the Work Projects section's closing `</section>`: one HTML-comment block containing:
   - A short `TO ACTIVATE:` note listing the 4 activation steps (uncomment nav `<li>`, uncomment this section, rename Work Projects heading + Projects nav label to "Work", fill in 3 cards).
   - A `<section id="personal-projects" class="section">` with `<h2>Personal Projects</h2>` and a `.projects-grid` containing 3 `<article class="project">` templates using placeholder text (`PROJECT_NAME`, `DESCRIPTION …`, `TECH · STACK · HERE`).

## CSS

No changes. `.projects-grid` and `.project` already style both sections.

## Section-alt alternation

Current: `plain, alt, plain, alt, plain, alt, plain`. Inserting Personal Projects with plain `class="section"` (no `section-alt`) gives `…alt, plain, plain…`. Acceptable — the Work/Personal boundary is still visible via the heading, and no further sections break. The activator can flip the class at activation time if they want stricter striping.

## Out of scope

CSS, JS, meta tags, favicon, other sections, actually building the 3 personal projects.

## Verification

1. Browser: site renders identically except heading reads "Work Projects". Nav still shows 6 items. `Projects` nav link scrolls to Work Projects.
2. View source: commented nav `<li>` and commented `<section id="personal-projects">` block both present but not rendered.
3. `git diff index.html`: one heading edit, one added nav comment line, one added section-sized comment block.
4. Mobile ≤640px: hamburger and grid layout unaffected.
