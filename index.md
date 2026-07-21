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
  <nav class="profile-actions" aria-label="Research profile links">
    <a class="btn btn--primary" href="#selected-research">Selected Research</a>
    <a class="btn" href="{{ '/publications/' | relative_url }}">Publications</a>
    <a class="btn" href="{{ site.data.about.scholar }}" target="_blank" rel="noopener">Google Scholar</a>
    <a class="btn" href="{{ site.data.about.github }}" target="_blank" rel="noopener">GitHub</a>
    <a class="btn" href="{{ site.data.about.cv }}" target="_blank" rel="noopener">CV</a>
    <a class="btn" href="mailto:{{ site.data.about.email }}">Email</a>
  </nav>
</section>

<section id="selected-research" class="research-section" aria-labelledby="selected-research-title">
  <div class="section-heading">
    <p class="section-eyebrow">Research trajectory</p>
    <h2 id="selected-research-title">Selected Research</h2>
    <p>Published work on capturing human performance and translating sensed differences into actionable guidance.</p>
  </div>
  <div class="research-program-list">
    {% for item in site.data.research_program.selected_research %}
      {% assign linked_publication = nil %}
      {% if item.publication_id %}
        {% assign linked_publication = site.data.research.projects | where: "id", item.publication_id | first %}
      {% endif %}
      <article class="research-program-card{% if linked_publication.gif %} research-program-card--with-image{% endif %}">
        {% if linked_publication.gif %}
          <div class="research-program-card__image">
            <img src="{{ linked_publication.gif | relative_url }}" alt="Visual summary for {{ linked_publication.title | escape }}" loading="lazy">
          </div>
        {% endif %}
        <div class="research-program-card__body">
          <div class="research-program-card__meta">
            <span class="stage-badge">{{ item.research_stage }}</span>
            {% if linked_publication.year %}<span>{{ linked_publication.year }}</span>{% endif %}
            {% if linked_publication.status %}<span class="status-badge status-badge--{{ linked_publication.status }}">{{ linked_publication.status | replace: "-", " " | capitalize }}</span>{% endif %}
          </div>
          <h3>{{ item.title }}</h3>
          <p class="research-contribution">{{ item.contribution }}</p>
          {% if linked_publication.my_role %}<p class="research-role"><strong>Role:</strong> {% if linked_publication.my_role == "first" %}First / co-first author{% else %}Collaborative author{% endif %}</p>{% endif %}
          {% if linked_publication.authors %}<p class="publication-authors">{{ linked_publication.authors }}</p>{% endif %}
          {% if linked_publication.pdf or linked_publication.code or linked_publication.demo %}
            <div class="publication-actions" aria-label="Resources for {{ item.title | escape }}">
              {% if linked_publication.pdf %}<a class="paper-link" href="{{ linked_publication.pdf }}" target="_blank" rel="noopener">Paper</a>{% endif %}
              {% if linked_publication.code %}<a class="paper-link" href="{{ linked_publication.code }}" target="_blank" rel="noopener">Code</a>{% endif %}
              {% if linked_publication.demo %}<a class="paper-link" href="{{ linked_publication.demo }}" target="_blank" rel="noopener">Demo</a>{% endif %}
            </div>
          {% endif %}
        </div>
      </article>
    {% endfor %}
  </div>
  <a class="btn btn--primary section-action" href="{{ '/publications/' | relative_url }}">View all publications</a>
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
