---
title: "Publications"
permalink: /publications/
author_profile: true
---

Peer-reviewed work across human-computer interaction, ubiquitous computing, robotics, accessibility, and intelligent systems. For citation counts and the latest updates, visit [Google Scholar]({{ site.data.about.scholar }}).

<div class="publication-list">
{% for project in site.data.research.projects %}
  {% assign pub_number = site.data.research.projects.size | minus: forloop.index0 %}
  <article class="publication-entry publication-entry--with-image">
    <div class="publication-thumb">
      <img src="{{ project.gif | relative_url }}" alt="Visual overview for {{ project.title }}" loading="lazy">
    </div>
    <div class="publication-body">
      <p class="publication-venue">[{{ pub_number }}] {{ project.conference }} · {{ project.category }}</p>
      <h2>{{ project.title }}</h2>
      <p class="publication-authors">{{ project.authors }}</p>
      <div class="publication-actions">
        {% if project.pdf %}<a class="paper-link" href="{{ project.pdf }}" target="_blank" rel="noopener">Paper</a>{% endif %}
        {% if project.code %}<a class="paper-link" href="{{ project.code }}" target="_blank" rel="noopener">Code</a>{% endif %}
        {% if project.demo %}<a class="paper-link" href="{{ project.demo }}" target="_blank" rel="noopener">Demo</a>{% endif %}
        {% if project.slides %}<a class="paper-link" href="{{ project.slides }}" target="_blank" rel="noopener">Slides</a>{% endif %}
        {% if project.talk %}<a class="paper-link" href="{{ project.talk }}" target="_blank" rel="noopener">Talk</a>{% endif %}
      </div>
    </div>
  </article>
{% endfor %}
</div>
