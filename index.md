---
permalink: /
title: "Minwoo Seong"
description: "Human–AI skill learning through multimodal sensing, adaptive coaching, mixed reality, and embodied robot intelligence."
author_profile: true
hide_title: true
redirect_from:
  - /about/
  - /about.html
---

<section id="home" class="research-section research-hero" aria-labelledby="home-title">
  <p class="section-eyebrow">Human-centered intelligent systems</p>
  <h1 id="home-title">{{ site.data.research_program.hero.headline }}</h1>
  <div class="hero-copy">
    <p>I am a Ph.D. candidate at the <a href="{{ site.data.about.lab_url }}">Human-Centered Intelligent Systems Lab</a> at the <a href="{{ site.data.about.institution_url }}">Gwangju Institute of Science and Technology</a>, advised by <a href="{{ site.data.about.advisor_url }}">Prof. {{ site.data.about.advisor_name }}</a>.</p>
    {% for paragraph in site.data.research_program.hero.paragraphs %}
      <p>{{ paragraph }}</p>
    {% endfor %}
  </div>
</section>

<section id="selected-research" class="research-section" aria-labelledby="selected-research-title">
  <div class="section-heading">
    <p class="section-eyebrow">Research trajectory</p>
    <h2 id="selected-research-title">Selected Publications</h2>
    <p>Five selected works tracing my research from multimodal human sensing to adaptive and embodied systems.</p>
  </div>
  {% assign selected_projects = site.data.research.projects | where: "selected", true | where: "homepage_featured", true | sort: "homepage_order" %}
  <div class="publication-list publication-list--home">
    {% for project in selected_projects %}
      {% include publication-card.html project=project show_abstract=true %}
    {% endfor %}
  </div>
  <a class="btn btn--primary section-action" href="{{ '/publications/' | relative_url }}#selected-publications">View all selected publications →</a>
</section>

<section id="dataset-reuse" class="research-section" aria-labelledby="dataset-reuse-title">
  <div class="section-heading">
    <p class="section-eyebrow">Dataset impact</p>
    <h2 id="dataset-reuse-title">Documented dataset reuse</h2>
    <p>These papers report using the released data for new analyses. Publication counts are not citation counts or counts of distinct research projects.</p>
  </div>
  {% for dataset in site.data.dataset_reuse.datasets %}
    {% assign source = site.data.research.projects | where: "id", dataset.publication_id | first %}
    {% assign independent_count = dataset.independent | size %}
    {% assign coauthored_count = dataset.coauthored | size %}
    {% assign reuse_count = independent_count | plus: coauthored_count %}
    <div class="dataset-reuse-group">
      <h3>{{ source.title | split: ':' | first }}</h3>
      {% if dataset.summary %}<p class="dataset-reuse-summary">{{ dataset.summary }}</p>{% endif %}
      <p class="dataset-reuse-count"><strong>{{ independent_count }}</strong> externally authored {% if independent_count == 1 %}paper{% else %}papers{% endif %}{% if coauthored_count > 0 %} · <strong>{{ coauthored_count }}</strong> co-authored follow-ups{% endif %}</p>
      <p class="dataset-reuse-source"><a href="{{ source.pdf }}">Source paper</a> · <a href="{{ dataset.dataset_url }}">Open dataset</a> · <a href="{{ dataset.citations_url }}">Google Scholar citations</a></p>
      <details class="dataset-reuse-details">
        <summary>View documented uses ({{ reuse_count }} {% if reuse_count == 1 %}paper{% else %}papers{% endif %})</summary>
        <h4>Externally authored publications</h4>
        <ul class="dataset-reuse-list">
          {% for study in dataset.independent %}
            <li><a href="{{ study.paper_url }}">{{ study.title }}</a> <span class="dataset-reuse-meta">{{ study.venue }} · {{ study.year }}</span><br>{{ study.use }}{% if study.evidence_url %} <a href="{{ study.evidence_url }}">Usage evidence</a>{% endif %}</li>
          {% endfor %}
        </ul>
        {% if coauthored_count > 0 %}
          <h4>Co-authored follow-ups</h4>
          <ul class="dataset-reuse-list">
            {% for followup in dataset.coauthored %}
              {% assign paper = site.data.research.projects | where: "id", followup.publication_id | first %}
              <li><a href="{{ paper.pdf }}">{{ paper.title }}</a> <span class="dataset-reuse-meta">{{ paper.conference }} · {{ paper.year }}</span><br>{{ followup.use }}</li>
            {% endfor %}
          </ul>
        {% endif %}
        {% if dataset.note %}<p class="dataset-reuse-note">{{ dataset.note }}</p>{% endif %}
      </details>
    </div>
  {% endfor %}
</section>

<section id="education" class="research-section research-section--secondary" aria-labelledby="education-title">
  <div class="section-heading section-heading--compact"><h2 id="education-title">Education</h2></div>
  <div class="education-list">
    {% for item in site.data.about.education %}
      <div class="education-entry">
        <div><strong>{{ item.degree }}</strong><span>{{ item.school }}</span></div>
        <time>{{ item.period }}</time>
      </div>
    {% endfor %}
  </div>
  <p class="manual-update"><strong>Last updated:</strong> {{ site.last_updated }}</p>
</section>
