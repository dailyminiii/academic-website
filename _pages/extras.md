---
title: "Extras"
permalink: /extras/
author_profile: true
---

{{ site.data.gallery.introduction }}

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
