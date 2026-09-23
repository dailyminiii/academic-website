---
title: "Studies Using My Datasets"
permalink: /dataset-reuse/
description: "Research publications that report using the MultiSenseBadminton, Engagnition, and TimelyTale datasets."
author_profile: true
---

This curated list links to research that reports using data from MultiSenseBadminton, Engagnition, or TimelyTale. It is not a citation count or an exhaustive list of citing papers. Work I co-authored is listed separately from other publications.

{% for dataset in site.data.dataset_reuse.datasets %}
  {% assign source = site.data.research.projects | where: "id", dataset.publication_id | first %}
  <section id="{{ dataset.publication_id }}" class="dataset-reuse-group" aria-labelledby="{{ dataset.publication_id }}-title">
    <h2 id="{{ dataset.publication_id }}-title">{{ source.title | split: ':' | first }}</h2>
    {% if dataset.summary %}<p class="dataset-reuse-summary">{{ dataset.summary }}</p>{% endif %}
    <p class="dataset-reuse-source"><a href="{{ source.pdf }}">Source paper</a> · <a href="{{ dataset.dataset_url }}">Open dataset</a>{% if dataset.citations_url %} · <a href="{{ dataset.citations_url }}">Google Scholar citations</a>{% endif %}</p>
    {% if dataset.independent.size > 0 %}
      <h3>Other publications using the dataset</h3>
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
