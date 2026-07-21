---
permalink: /
title: "About me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

I am a Ph.D. candidate in the [Human-Centered Intelligent Systems Lab]({{ site.data.about.lab_url }}) at the [Gwangju Institute of Science and Technology]({{ site.data.about.institution_url }}), advised by [Prof. {{ site.data.about.advisor_name }}]({{ site.data.about.advisor_url }}).

{{ site.data.about.intro }} {{ site.data.about.summary }}

<div class="profile-actions">
  <a class="btn btn--primary" href="{{ site.data.about.cv }}" target="_blank" rel="noopener">Curriculum Vitae</a>
  <a class="btn" href="mailto:{{ site.data.about.email }}">Email</a>
</div>

## Research interests

<div class="research-area-list">
{% for area in site.data.about.research_areas %}
  <article class="research-area">
    <span>{{ area.label }}</span>
    <h3>{{ area.title }}</h3>
    <p>{{ area.description }}</p>
  </article>
{% endfor %}
</div>

## Featured research

<div class="feature-grid">
{% for work in site.data.about.featured_work %}
  <article class="feature-card">
    <a href="{{ work.url }}" target="_blank" rel="noopener">
      <img src="{{ work.image | relative_url }}" alt="{{ work.image_alt }}" loading="lazy">
    </a>
    <p class="feature-meta">{{ work.venue }}</p>
    <h3><a href="{{ work.url }}" target="_blank" rel="noopener">{{ work.title }}</a></h3>
    <p>{{ work.description }}</p>
  </article>
{% endfor %}
</div>

## Selected publications

<div class="publication-list publication-list--compact">
{% for project in site.data.research.projects limit:5 %}
  {% assign pub_number = site.data.research.projects.size | minus: forloop.index0 %}
  <article class="publication-entry publication-entry--with-image">
    <div class="publication-thumb">
      <img src="{{ project.gif | relative_url }}" alt="Visual overview for {{ project.title }}" loading="lazy">
    </div>
    <div class="publication-body">
      <p class="publication-venue">[{{ pub_number }}] {{ project.conference }} · {{ project.category }}</p>
      <h3>{{ project.title }}</h3>
      <p class="publication-authors">{{ project.authors }}</p>
      {% if project.pdf %}<a class="paper-link" href="{{ project.pdf }}" target="_blank" rel="noopener">Paper</a>{% endif %}
      {% if project.code %}<a class="paper-link" href="{{ project.code }}" target="_blank" rel="noopener">Code</a>{% endif %}
      {% if project.demo %}<a class="paper-link" href="{{ project.demo }}" target="_blank" rel="noopener">Demo</a>{% endif %}
    </div>
  </article>
{% endfor %}
</div>

[View all publications →]({{ '/publications/' | relative_url }}){: .btn .btn--primary }

## Education

<div class="education-list">
{% for item in site.data.about.education %}
  <div class="education-entry">
    <div>
      <strong>{{ item.degree }}</strong>
      <span>{{ item.school }}</span>
    </div>
    <time>{{ item.period }}</time>
  </div>
{% endfor %}
</div>
