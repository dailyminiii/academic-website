---
permalink: /
title: "Minwoo Seong"
description: "I study how wearable sensing, AI, and XR interfaces can help people understand their movements and shape their own practice."
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
    {% for paragraph in site.data.research_program.hero.paragraphs %}
      <p class="hero-summary">{{ paragraph }}</p>
    {% endfor %}
    <p class="hero-affiliation">I am a Ph.D. candidate at the <a href="{{ site.data.about.lab_url }}">Human-Centered Intelligent Systems Lab</a> at the <a href="{{ site.data.about.institution_url }}">Gwangju Institute of Science and Technology</a>, advised by <a href="{{ site.data.about.advisor_url }}">Prof. {{ site.data.about.advisor_name }}</a>.</p>
    <nav class="hero-actions" aria-label="Profile resources">
      <a class="btn btn--primary" href="{{ '/publications/' | relative_url }}">Publications</a>
      <a class="btn" href="{{ site.data.about.cv }}" target="_blank" rel="noopener">CV</a>
      <a class="btn" href="mailto:{{ site.data.about.email }}">Email</a>
    </nav>
  </div>
</section>

<section id="research-areas" class="research-section research-areas" aria-labelledby="research-areas-title">
  <div class="section-heading section-heading--compact"><h2 id="research-areas-title">Research Areas</h2></div>
  <div class="research-focus-grid">
    {% for area in site.data.research_program.areas %}
      <article aria-labelledby="{{ area.id }}">
        <h3 id="{{ area.id }}">{{ area.title }}</h3>
        <p>{{ area.description }}</p>
        <a href="{{ area.work_url | relative_url }}">{{ area.work_title }} <span aria-hidden="true">→</span></a>
      </article>
    {% endfor %}
  </div>
</section>

<section id="selected-research" class="research-section" aria-labelledby="selected-research-title">
  <div class="section-heading">
    <p class="section-eyebrow">Research trajectory</p>
    <h2 id="selected-research-title">Selected Publications</h2>
    <p>Six works on sensing, modeling, and coaching physical skills, with a broader application of multimodal human sensing.</p>
  </div>
  {% assign publication_groups = site.data.research.projects | group_by_exp: "project", "project.published_date | default: project.accepted_date | default: project.year | append: ''" | sort: "name" | reverse %}
  <div class="publication-list publication-list--home">
    {% for publication_group in publication_groups %}
      {% for project in publication_group.items %}
        {% if project.selected and project.homepage_featured %}
          {% include publication-card.html project=project show_abstract=true show_dataset_reuse=true home_compact=true %}
        {% endif %}
      {% endfor %}
    {% endfor %}
  </div>
  <a class="btn btn--primary section-action" href="{{ '/publications/' | relative_url }}#selected-publications">View all selected publications →</a>
</section>

<section id="academic-service" class="research-section research-section--secondary" aria-labelledby="academic-service-title">
  <div class="section-heading section-heading--compact"><h2 id="academic-service-title">Academic Service</h2></div>
  <h3>Reviewer</h3>
  <h4 id="service-conferences-title">Conferences and Workshops</h4>
  <ul id="service-conferences" aria-labelledby="service-conferences-title">
    {% for item in site.data.service.reviewer.conferences_workshops %}
      <li>{{ item.venue }} {{ item.year }}{% if item.track %} — {{ item.track }}{% endif %}</li>
    {% endfor %}
  </ul>
  <h4 id="service-journals-title">Journals</h4>
  <ul id="service-journals" aria-labelledby="service-journals-title">
    {% for item in site.data.service.reviewer.journals %}
      <li>{{ item.venue }} ({{ item.years }})</li>
    {% endfor %}
  </ul>
  <h3 id="service-organizing-title">Organizing Committee</h3>
  <ul id="service-organizing" aria-labelledby="service-organizing-title">
    {% for item in site.data.service.organizing_committee %}
      <li>{{ item.venue }} — {{ item.role }}<br><em>{{ item.workshop }}</em></li>
    {% endfor %}
  </ul>
  <h3 id="service-volunteering-title">Student Volunteer</h3>
  <ul id="service-volunteering" aria-labelledby="service-volunteering-title">
    {% for item in site.data.service.student_volunteer %}
      <li>{{ item.venue }} {{ item.year }}</li>
    {% endfor %}
  </ul>
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
