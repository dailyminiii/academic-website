---
title: "Projects"
permalink: /projects/
author_profile: true
---

Selected prototypes exploring immersive interaction, creative robotics, and embodied experiences.

<div class="project-grid">
{% for mini_project in site.data.outreach.mini_projects %}
  <article class="project-card">
    <img src="{{ mini_project.thumbnail | relative_url }}" alt="{{ mini_project.alt }}" loading="lazy">
    <p class="project-meta">{{ mini_project.type }} · {{ mini_project.time }}</p>
    <h2>{{ mini_project.title }}</h2>
    <p>{{ mini_project.description }}</p>
  </article>
{% endfor %}
</div>
