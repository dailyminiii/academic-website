---
title: "Publications & Research Outputs"
permalink: /publications/
description: "Selected publications and research outputs by Minwoo Seong, organized by authorship, research theme, and status."
author_profile: true
---

Only published or accepted work is listed here. For citation counts and the latest indexing updates, visit [Google Scholar]({{ site.data.about.scholar }}).

{% assign sorted_projects = site.data.research.projects | sort: "year" | reverse %}
{% assign selected_projects = site.data.research.projects | where: "status", "published" | where: "selected", true | sort: "selected_order" %}
<div class="publication-tabs" data-publication-tabs>
  <div class="publication-tablist" role="tablist" aria-label="Publication views">
    <button id="publication-tab-selected" class="publication-tab" type="button" role="tab" aria-selected="true" aria-controls="publication-panel-selected">Selected Publications</button>
    <button id="publication-tab-all" class="publication-tab" type="button" role="tab" aria-selected="false" aria-controls="publication-panel-all" tabindex="-1">Publications & Research Outputs</button>
  </div>

  <section id="publication-panel-selected" class="publication-section publication-tabpanel" role="tabpanel" aria-labelledby="publication-tab-selected">
    <div class="section-heading">
      <p class="section-eyebrow">Research highlights</p>
      <h2 id="selected-publications">Selected Publications</h2>
      <p>A curated selection of lead-author work and notable collaborations spanning physical skill learning, multimodal human modeling, and embodied interaction.</p>
    </div>
    <div class="publication-list publication-list--selected">
      {% for project in selected_projects %}
        {% include publication-card.html project=project show_abstract=true %}
      {% endfor %}
    </div>
  </section>

  <section id="publication-panel-all" class="publication-section publication-tabpanel" role="tabpanel" aria-labelledby="publication-tab-all" hidden>
    <div class="section-heading">
      <p class="section-eyebrow">Publication record</p>
      <h2>Publications & Research Outputs</h2>
      <p>Search by title, author, venue, year, or keyword, and filter by authorship or research theme.</p>
    </div>

    <form class="publication-controls" data-publication-controls role="search" aria-label="Search and filter publications and research outputs" onsubmit="return false;">
      <label class="publication-search" for="publication-search">
        <span>Search</span>
        <input id="publication-search" type="search" placeholder="Search by title, author, venue, year, or keyword" autocomplete="off">
      </label>

      <fieldset class="filter-group" data-filter-group="authorship" aria-describedby="authorship-help">
        <legend>Authorship</legend>
        <div class="filter-buttons">
          {% for filter in site.data.publication_metadata.authorship_filters %}
            <button type="button" class="filter-button" data-filter-value="{{ filter.value }}" data-filter-query="{{ filter.query }}" aria-pressed="{% if filter.value == 'all' %}true{% else %}false{% endif %}">{{ filter.label }}</button>
          {% endfor %}
        </div>
        <p id="authorship-help" class="filter-help">Lead author includes first and co-first authorship. Co-author shows publications where Minwoo Seong was not a lead author.</p>
      </fieldset>

      <fieldset class="filter-group" data-filter-group="theme" aria-describedby="theme-help">
        <legend>Research themes</legend>
        <div class="filter-buttons">
          {% for filter in site.data.publication_metadata.theme_filters %}
            <button type="button" class="filter-button" data-filter-value="{{ filter.value }}" data-filter-query="{{ filter.query }}" aria-pressed="{% if filter.value == 'all' %}true{% else %}false{% endif %}">{{ filter.label }}</button>
          {% endfor %}
        </div>
        <p id="theme-help" class="filter-help">Select one or more themes. Multiple themes are combined with OR.</p>
      </fieldset>
      <div class="publication-results-row">
        <p id="publication-results" class="publication-results" aria-live="polite"></p>
        <button class="filter-reset" type="button" data-reset-filters hidden>Reset filters</button>
      </div>
    </form>

    <section class="publication-status-group" aria-labelledby="published-title">
      <h3 id="published-title">Published / Accepted Research Outputs</h3>
      <div class="publication-list" data-publication-list>
        {% for project in sorted_projects %}
          {% if project.status == "published" or project.status == "accepted" %}
            {% include publication-card.html project=project nested=true %}
          {% endif %}
        {% endfor %}
      </div>
      <p class="empty-state publication-no-results" hidden>No research outputs match the current search and filters.</p>
      <p class="publication-note">* Equal contribution.</p>
    </section>
  </section>
</div>
