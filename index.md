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
    <p>Seven selected works tracing my research from multimodal human sensing to adaptive and embodied systems.</p>
  </div>
  {% assign selected_projects = site.data.research.projects | where: "selected", true | where: "homepage_featured", true | sort: "homepage_order" %}
  <div class="publication-list publication-list--home">
    {% for project in selected_projects %}
      {% include publication-card.html project=project show_abstract=true %}
    {% endfor %}
  </div>
  <a class="btn btn--primary section-action" href="{{ '/publications/' | relative_url }}#selected-publications">View all selected publications →</a>
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
