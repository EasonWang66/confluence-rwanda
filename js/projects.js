/* ==========================================================================
   Project list page: renders + filters the shared RWANDA_PROJECTS dataset.
   ========================================================================== */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var toggle = document.querySelector("[data-nav-toggle]");
    if (toggle) toggle.innerHTML = window.ICONS.menu;

    var grid = document.getElementById("project-grid");
    var count = document.getElementById("results-count");
    var empty = document.getElementById("empty-state");
    var qInput = document.getElementById("q");
    var typeSelect = document.getElementById("type");
    var stageSelect = document.getElementById("stage");

    function matches(p, query, type, stage) {
      var haystack = (p.title + " " + p.localNeed + " " + p.partners).toLowerCase();
      var qOk = !query || haystack.indexOf(query.toLowerCase()) !== -1;
      var typeOk = !type || p.sector === type;
      var stageOk = !stage || p.status === stage;
      return qOk && typeOk && stageOk;
    }

    function render() {
      var query = qInput.value.trim();
      var type = typeSelect.value;
      var stage = stageSelect.value;
      var results = window.RWANDA_PROJECTS.filter(function (p) {
        return matches(p, query, type, stage);
      });

      count.textContent = String(results.length);
      grid.innerHTML = results.map(function (p) { return window.renderProjectCard(p); }).join("");
      empty.hidden = results.length > 0;
      grid.hidden = results.length === 0;
    }

    qInput.addEventListener("input", render);
    typeSelect.addEventListener("change", render);
    stageSelect.addEventListener("change", render);

    render();
  });
})();
