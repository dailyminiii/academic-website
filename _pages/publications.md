---
title: "Publications"
permalink: /publications/
description: "Selected and complete publications by Minwoo Seong, organized by contribution, research theme, and status."
author_profile: true
---

My work spans human–AI skill learning, multimodal sensing, adaptive interaction, accessibility, robotics, and immersive systems. Only published or accepted work is listed here. For citation counts and the latest indexing updates, visit [Google Scholar]({{ site.data.about.scholar }}).

{% assign sorted_projects = site.data.research.projects | sort: "year" | reverse %}
<div class="publication-tabs" data-publication-tabs>
  <div class="publication-tablist" role="tablist" aria-label="Publication views">
    <button id="publication-tab-selected" class="publication-tab" type="button" role="tab" aria-selected="true" aria-controls="publication-panel-selected">Selected Publications</button>
    <button id="publication-tab-all" class="publication-tab" type="button" role="tab" aria-selected="false" aria-controls="publication-panel-all" tabindex="-1">All Publications</button>
  </div>

  <section id="publication-panel-selected" class="publication-section publication-tabpanel" role="tabpanel" aria-labelledby="publication-tab-selected">
    <div class="section-heading">
      <p class="section-eyebrow">Manually curated</p>
      <h2>Selected Publications</h2>
      <p>First- and co-first-author research, work central to the current research program, and selected collaborative outcomes.</p>
    </div>
    <div class="publication-list publication-list--selected">
      {% for project in sorted_projects %}
        {% if project.featured == true %}
          {% if project.status == "published" or project.status == "accepted" %}
            {% include publication-card.html project=project show_abstract=true %}
          {% endif %}
        {% endif %}
      {% endfor %}
    </div>
  </section>

  <section id="publication-panel-all" class="publication-section publication-tabpanel" role="tabpanel" aria-labelledby="publication-tab-all" hidden>
    <div class="section-heading">
      <p class="section-eyebrow">Complete record</p>
      <h2>All Publications</h2>
      <p>Search and contribution or research-theme filters work together.</p>
    </div>

    <form class="publication-controls" data-publication-controls role="search" aria-label="Filter publications" onsubmit="return false;">
      <label class="publication-search" for="publication-search">
        <span>Search publications</span>
        <input id="publication-search" type="search" placeholder="Title, author, venue, year, or research tag" autocomplete="off">
      </label>

      <fieldset class="filter-group" data-filter-group="contribution">
        <legend>Contribution</legend>
        <div class="filter-buttons">
          {% for filter in site.data.publication_metadata.contribution_filters %}
            <button type="button" class="filter-button" data-filter-value="{{ filter.value }}" aria-pressed="{% if filter.value == 'all' %}true{% else %}false{% endif %}">{{ filter.label }}</button>
          {% endfor %}
        </div>
      </fieldset>

      <fieldset class="filter-group" data-filter-group="theme">
        <legend>Research theme</legend>
        <div class="filter-buttons">
          {% for filter in site.data.publication_metadata.theme_filters %}
            <button type="button" class="filter-button" data-filter-value="{{ filter.value }}" aria-pressed="{% if filter.value == 'all' %}true{% else %}false{% endif %}">{{ filter.label }}</button>
          {% endfor %}
        </div>
      </fieldset>
      <p id="publication-results" class="publication-results" aria-live="polite"></p>
    </form>

    <section class="publication-status-group" aria-labelledby="published-title">
      <h3 id="published-title">Published / Accepted</h3>
      <div class="publication-list" data-publication-list>
        {% for project in sorted_projects %}
          {% if project.status == "published" or project.status == "accepted" %}
            {% include publication-card.html project=project nested=true %}
          {% endif %}
        {% endfor %}
      </div>
      <p class="empty-state publication-no-results" hidden>No publications match the current search and filters.</p>
    </section>
  </section>
</div>
