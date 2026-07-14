/* ==========================================================================
   Project detail page: reads ?id= from the URL, looks the project up in the
   shared dataset (data.js), and populates the page. Falls back to the
   wheelchair project so the page always has content to show.
   ========================================================================== */
(function () {
  "use strict";

  function getParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  function badge(text, cls) {
    return '<span class="badge badge--' + cls + '">' + text + '</span>';
  }

  function renderIcons() {
    document.querySelectorAll("[data-icon]").forEach(function (node) {
      var key = node.getAttribute("data-icon");
      if (window.ICONS[key]) {
        node.innerHTML = window.ICONS[key] + " " + node.textContent;
      }
    });
  }

  function populate(p) {
    document.title = p.title + " — Confluence";
    document.getElementById("breadcrumb-title").textContent = p.title;

    document.getElementById("proj-title").textContent = p.title;
    document.getElementById("proj-description").textContent = p.description;
    document.getElementById("proj-media").className = window.mediaClassFor(p.media) + " project-hero__media";

    document.getElementById("proj-badges").innerHTML =
      badge(p.sector, p.sectorBadge) +
      badge("&bull; " + p.status, p.stageIsCollab ? "orange" : "green") +
      badge("&bull; " + p.stage, "neutral");

    document.getElementById("proj-opportunity").textContent = p.opportunity;
    document.getElementById("proj-body").textContent = p.description;

    document.getElementById("proj-narrative-title").textContent = p.narrativeCard.title;
    document.getElementById("proj-narrative-location").textContent = p.narrativeCard.location;
    document.getElementById("proj-narrative-body").textContent = p.narrativeCard.body;

    document.getElementById("proj-sustainability").innerHTML = p.sustainability
      .map(function (item) { return "<li>" + item + "</li>"; })
      .join("");

    document.getElementById("proj-country").textContent = p.country;
    document.getElementById("proj-type").textContent = p.sector;
    document.getElementById("proj-stage").textContent = p.stage;
    document.getElementById("proj-visibility").textContent = p.visibility;

    document.getElementById("proj-participants").innerHTML = p.participants
      .map(function (person) {
        var initials = person.name.split(" ").map(function (n) { return n[0]; }).slice(0, 2).join("");
        return (
          '<li class="participant">' +
            '<span class="participant__who"><span class="avatar">' + initials + '</span>' + person.name + '</span>' +
            badge(person.role, person.role === "Initiator" ? "green" : "neutral") +
          '</li>'
        );
      })
      .join("");

    document.getElementById("proj-team-list").innerHTML = p.participants
      .map(function (person) { return "<li>" + person.name + " &mdash; " + person.role + "</li>"; })
      .join("");

    document.getElementById("proj-support-text").textContent = p.supportNeeded + ". Reach out via Contact Team if your organization can help.";
  }

  function initTabs() {
    var tabs = Array.prototype.slice.call(document.querySelectorAll(".tab"));
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (t) {
          t.setAttribute("aria-selected", "false");
          document.getElementById(t.getAttribute("data-tab-target")).hidden = true;
        });
        tab.setAttribute("aria-selected", "true");
        document.getElementById(tab.getAttribute("data-tab-target")).hidden = false;
      });
    });
  }

  function initFollowSave() {
    var follow = document.getElementById("follow-btn");
    var save = document.getElementById("save-btn");
    if (follow) {
      follow.addEventListener("click", function () {
        var active = follow.classList.toggle("btn--primary");
        follow.classList.toggle("btn--secondary", !active);
        follow.lastChild.textContent = active ? " Following" : " Follow Project";
      });
    }
    if (save) {
      save.addEventListener("click", function () {
        var active = save.classList.toggle("btn--primary");
        save.classList.toggle("btn--secondary", !active);
        save.lastChild.textContent = active ? " Saved" : " Save";
      });
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    var toggle = document.querySelector("[data-nav-toggle]");
    if (toggle) toggle.innerHTML = window.ICONS.menu;

    var id = getParam("id");
    var project = (id && window.getProjectById(id)) || window.RWANDA_PROJECTS[0];
    populate(project);
    renderIcons();
    initTabs();
    initFollowSave();
  });
})();
