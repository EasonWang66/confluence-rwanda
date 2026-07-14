# Confluence Rwanda

## Description

This project showcases part of my contribution to the development of **Confluence**, an assistive technology innovation platform, during my role as Lead Developer at Georgia Tech's Center for Inclusive Design and Innovation (CIDI). In that role, I managed the center's GitHub infrastructure, established the platform's design system, and led its development from initial concept to first release (0→1).

This build highlights three core interfaces of the Confluence platform — the country hub landing page, project discovery, and project detail views — with a focus on **scalability** (a fully responsive layout spanning a 1200px+ desktop experience down to a mobile viewport) and **accessibility** (semantic HTML, keyboard-navigable interactions, ARIA labeling, visible focus states, and skip-to-content support).

## Link to Live Demo

[https://confluence-rwanda.vercel.app/index.html](https://confluence-rwanda.vercel.app/index.html)

## Tools and Technologies Used

- **HTML5** — semantic, accessible markup across all three views
- **CSS3** — custom properties (design tokens), Flexbox, CSS Grid, mobile-first responsive design with tiered breakpoints
- **JavaScript (Vanilla)** — DOM rendering, client-side search/filtering, tabbed navigation, dynamic routing via URL query parameters
- **Figma** — source of truth for design, translated to code via Figma's Dev Mode MCP server
- **Git & GitHub** — version control
- **Vercel** — static hosting and continuous deployment
- **Google Fonts (Inter)** — typography

## Pages

- `index.html` — Home: hero, platform overview, impact stats, featured projects, community narratives, ecosystem map, community resources.
- `projects.html` — Project discovery: live search and filtering by type/stage across the shared dataset.
- `project.html?id=<project-id>` — Project detail: dynamically rendered from a shared dataset, including tabs, sidebar metadata, participants, and a sustainability checklist.

All three pages read from one shared dataset (`js/data.js`), so navigating between them behaves like a connected application rather than static mockups.

## Responsive Strategy

Built mobile-first with three tiers:

- **Base (mobile, ~390–430px)** — single-column layout, hamburger navigation, stacked sidebar, horizontally scrollable tabs.
- **≥700px (tablet)** — 2-column card grids.
- **≥1200px (desktop)** — full layout: horizontal nav, 3-column grids, 4-column stat grid, sidebar alongside main content.

## Project Structure

```
confluence-rwanda/
  index.html / projects.html / project.html
  css/
    tokens.css       design tokens (color, type, spacing)
    base.css         reset, typography, layout/grid utilities
    components.css   header/nav, footer, buttons, badges, cards, tabs...
    home.css / projects.css / detail.css   page-specific layout
  js/
    data.js          shared project dataset
    main.js           nav toggle, icons, shared card renderer
    projects.js       search/filter logic for the list page
    detail.js         populates the detail page from the URL + dataset
  img/
    logo.svg          brand mark
```
