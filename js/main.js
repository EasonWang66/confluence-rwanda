/* ==========================================================================
   Shared behavior: mobile nav toggle, icons, project card rendering.
   Loaded on every page, after data.js.
   ========================================================================== */
(function () {
  "use strict";

  window.ICONS = {
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    arrowLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    chevronDown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
    userPlus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v16H4z" opacity="0"/><path d="M22 6 12 13 2 6"/><path d="M2 6h20v12H2z"/></svg>',
    bookmark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21 12 16l-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>',
    mapPin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    fileText: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/></svg>',
    leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 4 13c0-5 5-11 11-11 0 6 0 13-4 18Z"/><path d="M7 15c3-2 6-4 8-9"/></svg>'
  };

  function sectorBadgeClass(sectorBadge) {
    return "badge badge--" + (sectorBadge || "neutral");
  }
  function statusBadgeClass(stageIsCollab) {
    return "badge " + (stageIsCollab ? "badge--orange" : "badge--green");
  }
  window.sectorBadgeClass = sectorBadgeClass;
  window.statusBadgeClass = statusBadgeClass;

  function mediaClassFor(mediaKey) {
    switch (mediaKey) {
      case "alt": return "media-placeholder media-placeholder--alt";
      case "map": return "media-placeholder media-placeholder--map";
      case "tall": return "media-placeholder media-placeholder--tall";
      default: return "media-placeholder";
    }
  }
  window.mediaClassFor = mediaClassFor;

  /* Renders one project card. `compact` = true hides the "Follow" link (used
     in tighter 3-up grids on the home page). */
  window.renderProjectCard = function (p, opts) {
    opts = opts || {};
    return (
      '<article class="project-card card">' +
        '<div class="' + mediaClassFor(p.media) + '">' + window.ICONS.leaf + '</div>' +
        '<div class="card__body">' +
          '<div class="badge-row project-card__badges">' +
            '<span class="' + sectorBadgeClass(p.sectorBadge) + '">' + p.sector + '</span>' +
            '<span class="' + statusBadgeClass(p.stageIsCollab) + '">&bull; ' + p.status + '</span>' +
          '</div>' +
          '<h3 class="project-card__title">' + p.title + '</h3>' +
          '<p class="project-card__meta"><strong>Local need:</strong> ' + p.localNeed + '</p>' +
          '<p class="project-card__meta"><strong>Partners:</strong> ' + p.partners + '</p>' +
          '<p class="project-card__support">Support needed: ' + p.supportNeeded + '</p>' +
          '<div class="project-card__actions">' +
            '<a class="btn btn--primary btn--sm" href="project.html?id=' + p.id + '">View Project</a>' +
            (opts.compact ? "" : '<a class="btn btn--secondary btn--sm" href="#follow">Follow</a>') +
          '</div>' +
        '</div>' +
      '</article>'
    );
  };

  function initNav() {
    var toggle = document.querySelector("[data-nav-toggle]");
    var nav = document.querySelector("[data-nav]");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.innerHTML = isOpen ? window.ICONS.close : window.ICONS.menu;
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.innerHTML = window.ICONS.menu;
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.innerHTML = window.ICONS.menu;
      }
    });
  }

  function initFooterYear() {
    var el = document.querySelector("[data-year]");
    if (el) el.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", function () {
    initNav();
    initFooterYear();
  });
})();
