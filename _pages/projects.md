---
title: "Beyond Research — Projects"
permalink: /projects/
description: "Creative prototypes by Minwoo Seong in immersive interaction and robotics."
author_profile: true
---

This URL is retained for existing links. These prototypes now sit within [Beyond Research]({{ '/extras/' | relative_url }}) so the primary navigation can stay focused on the research program.

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
