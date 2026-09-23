---
title: "Studies Using My Datasets"
permalink: /dataset-reuse/
description: "Research publications that report using the MultiSenseBadminton and Engagnition datasets."
author_profile: true
---

This curated list links to research that reports using data from MultiSenseBadminton or Engagnition. It is not a citation count or an exhaustive list of citing papers. My co-authored follow-up work is listed separately from work by other authors.

{% for dataset in site.data.dataset_reuse.datasets %}
  {% assign source = site.data.research.projects | where: "id", dataset.publication_id | first %}
  <section id="{{ dataset.publication_id }}" class="dataset-reuse-group" aria-labelledby="{{ dataset.publication_id }}-title">
    <h2 id="{{ dataset.publication_id }}-title">{{ source.title | split: ':' | first }}</h2>
    {% if dataset.summary %}<p class="dataset-reuse-summary">{{ dataset.summary }}</p>{% endif %}
    <p class="dataset-reuse-source"><a href="{{ source.pdf }}">Source paper</a> · <a href="{{ dataset.dataset_url }}">Open dataset</a> · <a href="{{ dataset.citations_url }}">Google Scholar citations</a></p>
    {% if dataset.independent.size > 0 %}
      <h3>Research by other authors</h3>
      <ul class="dataset-reuse-list">
        {% for study in dataset.independent %}
          <li><a href="{{ study.paper_url }}">{{ study.title }}</a> <span class="dataset-reuse-meta">{{ study.venue }} · {{ study.year }}</span><br>{{ study.use }}{% if study.evidence_url %} <a href="{{ study.evidence_url }}">Usage evidence</a>{% endif %}</li>
        {% endfor %}
      </ul>
    {% endif %}
    {% if dataset.coauthored.size > 0 %}
      <h3>Co-authored follow-up work</h3>
      <ul class="dataset-reuse-list">
        {% for followup in dataset.coauthored %}
          {% assign paper = site.data.research.projects | where: "id", followup.publication_id | first %}
          <li><a href="{{ paper.pdf }}">{{ paper.title }}</a> <span class="dataset-reuse-meta">{{ paper.conference }} · {{ paper.year }}</span><br>{{ followup.use }}</li>
        {% endfor %}
      </ul>
    {% endif %}
    {% if dataset.note %}<p class="dataset-reuse-note">{{ dataset.note }}</p>{% endif %}
  </section>
{% endfor %}
