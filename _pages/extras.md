---
title: "Beyond Research"
permalink: /extras/
description: "Creative prototypes, visiting-research memories, music, photography, and life beyond Minwoo Seong’s primary research program."
author_profile: true
---

This lower-priority collection preserves creative prototypes and personal moments alongside the main research program.

## Fun Projects

<div class="project-grid">
{% for mini_project in site.data.outreach.mini_projects %}
  <article class="project-card">
    <img src="{{ mini_project.thumbnail | relative_url }}" alt="{{ mini_project.alt }}" loading="lazy">
    <p class="project-meta">{{ mini_project.type }} · {{ mini_project.time }}</p>
    <h3>{{ mini_project.title }}</h3>
    <p>{{ mini_project.description }}</p>
  </article>
{% endfor %}
</div>

## Moments and Hobbies

<p>{{ site.data.gallery.introduction }}</p>

<div class="gallery-grid">
{% for picture in site.data.gallery.pictures %}
  <figure class="gallery-item">
    <a href="{{ picture.source | relative_url }}">
      <img src="{{ picture.source | relative_url }}" alt="{{ picture.caption }}" loading="lazy">
    </a>
    <figcaption>{{ picture.caption }} <span>{{ picture.year }}</span></figcaption>
  </figure>
{% endfor %}
</div>

## Elsewhere

- [Piano and performance videos]({{ site.data.about.youtube }})
- [Photography and field notes]({{ site.data.about.instagram }})
- [Open-source work and prototypes]({{ site.data.about.github }})
