# Confluence Rwanda

A responsive, data-driven build of the three connected "Confluence Rwanda" screens from your Figma file (Home / Project List / Project Detail). Built as a dependency-free static site — no build step, no npm install — so it opens anywhere and is trivial to deploy (drag the folder onto Netlify/Vercel/GitHub Pages, or open `index.html` directly).

## Pages

- `index.html` — Home ("Confluence Rwanda"): hero, overview, impact stats, featured projects, narratives, ecosystem map, community resources.
- `projects.html` — Project list: live search + filter by type/stage over the shared dataset, links into each project.
- `project.html?id=<project-id>` — Project detail: reads the `id` query param, pulls the matching record from `js/data.js`, and renders tabs, sidebar, participants, sustainability checklist. Falls back to the wheelchair project if no id is given, so the page is never empty.

All three pages share one project dataset (`js/data.js`, 6 projects) — clicking any card on the home page or list page carries you to a fully populated detail page, so the flow behaves like a real connected app rather than three disconnected mockups.

## Responsive strategy (the scalability piece)

Built mobile-first, with two breakpoints matching what you asked for, plus a light tablet step in between:

- **Base (mobile)** — tuned around an iPhone-width viewport (~390–430px): single-column stacked layout, hamburger nav, sidebar drops below main content on the detail page, tab bar scrolls horizontally.
- **≥700px (tablet)** — 2-column card grids.
- **≥1200px (desktop)** — matches the Figma layout: horizontal nav, 3-column project/narrative/resource grids, 4-column stat grid, sidebar sits beside the main content on the detail page.

To preview: open in Chrome, then use DevTools' device toolbar and pick "iPhone 14/15" for the mobile view, or just widen the window past 1200px for desktop.

## Structure

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
```

## Note on imagery

The sandbox this was built in couldn't reach Figma's asset CDN to pull the real photos, so photo/map spots use styled gradient placeholders instead of the source images. Everything else (copy, structure, spacing, interactions) is built from the Figma file. Swap in real photography by replacing the `.media-placeholder` divs with `<img>` tags — the aspect ratios are already set up for each spot.
