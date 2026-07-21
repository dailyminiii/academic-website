(function () {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function samePageAnchor(anchor) {
    if (!anchor.hash) return null;
    const targetUrl = new URL(anchor.href, window.location.href);
    const currentUrl = new URL(window.location.href);
    if (targetUrl.origin !== currentUrl.origin || targetUrl.pathname !== currentUrl.pathname) return null;
    try {
      return document.getElementById(decodeURIComponent(targetUrl.hash.slice(1)));
    } catch (_error) {
      return null;
    }
  }

  document.addEventListener("click", function (event) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const anchor = event.target.closest("a[href*='#']");
    if (!anchor) return;
    const target = samePageAnchor(anchor);
    if (!target) return;

    event.preventDefault();
    event.stopImmediatePropagation();
    target.scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth", block: "start" });
    window.history.pushState(null, "", anchor.hash);
    const focusTarget = target.querySelector("h1, h2, h3") || target;
    if (!focusTarget.hasAttribute("tabindex")) focusTarget.setAttribute("tabindex", "-1");
    focusTarget.focus({ preventScroll: true });
  }, true);

  const themeControl = document.querySelector("#theme-toggle [role='button']");
  if (themeControl) {
    themeControl.addEventListener("keydown", function (event) {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      themeControl.click();
    });
  }

  const publicationTabs = document.querySelector("[data-publication-tabs]");
  if (publicationTabs) {
    const tabs = Array.from(publicationTabs.querySelectorAll("[role='tab']"));

    function activatePublicationTab(tab, moveFocus) {
      tabs.forEach(function (candidate) {
        const active = candidate === tab;
        const panel = document.getElementById(candidate.getAttribute("aria-controls"));
        candidate.setAttribute("aria-selected", String(active));
        candidate.setAttribute("tabindex", active ? "0" : "-1");
        if (panel) panel.hidden = !active;
      });
      if (moveFocus) tab.focus();
    }

    tabs.forEach(function (tab, index) {
      tab.addEventListener("click", function () {
        activatePublicationTab(tab, false);
      });
      tab.addEventListener("keydown", function (event) {
        let nextIndex = null;
        if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (index + 1) % tabs.length;
        if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (index - 1 + tabs.length) % tabs.length;
        if (event.key === "Home") nextIndex = 0;
        if (event.key === "End") nextIndex = tabs.length - 1;
        if (nextIndex === null) return;
        event.preventDefault();
        activatePublicationTab(tabs[nextIndex], true);
      });
    });

    const filterQuery = new URLSearchParams(window.location.search);
    if (filterQuery.has("theme") || filterQuery.has("role") || filterQuery.has("q")) {
      const allOutputsTab = tabs.find(function (tab) { return tab.id === "publication-tab-all"; });
      if (allOutputsTab) activatePublicationTab(allOutputsTab, false);
    }
  }

  const controls = document.querySelector("[data-publication-controls]");
  const publicationList = document.querySelector("[data-publication-list]");

  if (controls && publicationList) {
    const cards = Array.from(publicationList.querySelectorAll("[data-publication]"));
    const search = controls.querySelector("input[type='search']");
    const results = document.getElementById("publication-results");
    const noResults = document.querySelector(".publication-no-results");
    const reset = controls.querySelector("[data-reset-filters]");
    const state = { authorship: "all", themes: new Set(), query: "" };
    const queryParams = new URLSearchParams(window.location.search);

    function findFilterButton(groupName, queryValue) {
      const group = controls.querySelector('[data-filter-group="' + groupName + '"]');
      if (!group) return null;
      return Array.from(group.querySelectorAll("[data-filter-value]")).find(function (button) {
        return button.dataset.filterValue === queryValue || button.dataset.filterQuery === queryValue;
      }) || null;
    }

    const roleParam = queryParams.get("role");
    const roleButton = roleParam ? findFilterButton("authorship", roleParam) : null;
    if (roleButton && roleButton.dataset.filterValue !== "all") {
      state.authorship = roleButton.dataset.filterValue;
    }

    queryParams.getAll("theme").flatMap(function (value) {
      return value.split(",");
    }).forEach(function (queryTheme) {
      const themeButton = findFilterButton("theme", queryTheme);
      if (themeButton && themeButton.dataset.filterValue !== "all") {
        state.themes.add(themeButton.dataset.filterValue);
      }
    });

    const queryText = queryParams.get("q");
    if (queryText) {
      state.query = queryText.trim().toLowerCase();
      if (search) search.value = queryText;
    }

    function syncButtons(groupName) {
      const group = controls.querySelector('[data-filter-group="' + groupName + '"]');
      if (!group) return;
      group.querySelectorAll("[data-filter-value]").forEach(function (button) {
        const value = button.dataset.filterValue;
        const pressed = groupName === "theme"
          ? (value === "all" ? state.themes.size === 0 : state.themes.has(value))
          : value === state.authorship;
        button.setAttribute("aria-pressed", String(pressed));
      });
    }

    function hasActiveFilters() {
      return state.authorship !== "all" || state.themes.size > 0 || Boolean(state.query);
    }

    function syncUrl() {
      const url = new URL(window.location.href);
      url.searchParams.delete("role");
      url.searchParams.delete("theme");
      url.searchParams.delete("q");

      if (state.authorship !== "all") {
        const role = findFilterButton("authorship", state.authorship);
        if (role) url.searchParams.set("role", role.dataset.filterQuery || role.dataset.filterValue);
      }

      const themeGroup = controls.querySelector('[data-filter-group="theme"]');
      if (themeGroup) {
        themeGroup.querySelectorAll("[data-filter-value]").forEach(function (button) {
          if (state.themes.has(button.dataset.filterValue)) {
            url.searchParams.append("theme", button.dataset.filterQuery || button.dataset.filterValue);
          }
        });
      }

      if (state.query) url.searchParams.set("q", state.query);
      window.history.replaceState(null, "", url.pathname + url.search + url.hash);
    }

    function applyFilters() {
      let visibleCount = 0;
      cards.forEach(function (card) {
        const authorshipMatch = state.authorship === "all" ||
          (state.authorship === "first" && card.dataset.role === "first") ||
          (state.authorship === "collaborative" && card.dataset.role === "collaborative");
        const themes = (card.dataset.themes || "").split(/\s+/);
        const themeMatch = state.themes.size === 0 || Array.from(state.themes).some(function (theme) {
          return themes.includes(theme);
        });
        const searchable = (card.textContent + " " + card.dataset.themes).toLowerCase();
        const searchMatch = !state.query || searchable.includes(state.query);
        const visible = authorshipMatch && themeMatch && searchMatch;
        card.hidden = !visible;
        if (visible) visibleCount += 1;
      });

      if (results) {
        const noun = hasActiveFilters()
          ? (visibleCount === 1 ? " result" : " results")
          : (visibleCount === 1 ? " research output" : " research outputs");
        results.textContent = visibleCount + noun;
      }
      if (noResults) noResults.hidden = visibleCount !== 0;
      if (reset) reset.hidden = !hasActiveFilters();
    }

    controls.querySelectorAll("[data-filter-group]").forEach(function (group) {
      group.addEventListener("click", function (event) {
        const button = event.target.closest("[data-filter-value]");
        if (!button) return;
        const groupName = group.dataset.filterGroup;
        const value = button.dataset.filterValue;
        if (groupName === "theme") {
          if (value === "all") state.themes.clear();
          else if (state.themes.has(value)) state.themes.delete(value);
          else state.themes.add(value);
        } else {
          state.authorship = value === "all" || state.authorship === value ? "all" : value;
        }
        syncButtons(groupName);
        applyFilters();
        syncUrl();
      });
    });

    if (search) {
      search.addEventListener("input", function () {
        state.query = search.value.trim().toLowerCase();
        applyFilters();
        syncUrl();
      });
    }

    if (reset) {
      reset.addEventListener("click", function () {
        state.authorship = "all";
        state.themes.clear();
        state.query = "";
        if (search) search.value = "";
        syncButtons("authorship");
        syncButtons("theme");
        applyFilters();
        syncUrl();
        if (search) search.focus();
      });
    }

    syncButtons("authorship");
    syncButtons("theme");
    applyFilters();
  }

  const navAnchors = Array.from(document.querySelectorAll("#site-nav a[href]"));
  const homeSections = navAnchors.map(function (anchor) {
    const url = new URL(anchor.href, window.location.href);
    if (url.pathname !== "/") return null;
    if (!url.hash && anchor.textContent.trim() !== "Home") return null;
    const section = document.getElementById(url.hash ? url.hash.slice(1) : "home");
    return section ? { anchor: anchor, section: section } : null;
  }).filter(Boolean);

  function setActiveNav(activeAnchor) {
    navAnchors.forEach(function (anchor) {
      const active = anchor === activeAnchor;
      anchor.classList.toggle("is-active", active);
      if (active) anchor.setAttribute("aria-current", "location");
      else anchor.removeAttribute("aria-current");
    });
  }

  if (window.location.pathname === "/" && homeSections.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function (entries) {
      const visible = entries.filter(function (entry) { return entry.isIntersecting; })
        .sort(function (a, b) { return b.intersectionRatio - a.intersectionRatio; });
      if (visible[0]) {
        const match = homeSections.find(function (item) { return item.section === visible[0].target; });
        if (match) setActiveNav(match.anchor);
      }
    }, { rootMargin: "-20% 0px -65%", threshold: [0, 0.1, 0.5] });
    homeSections.forEach(function (item) { observer.observe(item.section); });
  } else {
    const current = navAnchors.find(function (anchor) {
      const url = new URL(anchor.href, window.location.href);
      return !url.hash && url.pathname === window.location.pathname;
    });
    if (current) setActiveNav(current);
  }

  const menuButton = document.querySelector(".greedy-nav > button");
  const hiddenLinks = document.querySelector(".greedy-nav .hidden-links");
  if (menuButton && hiddenLinks) {
    menuButton.addEventListener("click", function () {
      window.setTimeout(function () {
        menuButton.setAttribute("aria-expanded", String(!hiddenLinks.classList.contains("hidden")));
      }, 0);
    });
  }
}());
