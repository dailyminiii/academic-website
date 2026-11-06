---
permalink: /
title: "Minwoo Seong"
description: "I design and study interactive technologies for self-directed sports practice. My goal is to help people understand their movements and make informed decisions about how to practice. My experience spans collecting multimodal datasets, developing training systems with wearable sensing and extended reality (XR), and evaluating these systems through user studies."
excerpt: "I design and study interactive technologies for self-directed sports practice. My goal is to help people understand their movements and make informed decisions about how to practice. My experience spans collecting multimodal datasets, developing training systems with wearable sensing and extended reality (XR), and evaluating these systems through user studies."
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

<section id="awards" class="research-section research-section--secondary" aria-labelledby="awards-title">
  <div class="section-heading section-heading--compact"><h2 id="awards-title">Honors, Awards, and Scholarships</h2></div>
  <ul>
    <li><strong>Special Recognitions for Outstanding Reviews</strong> — CHI 2027 Papers (3 recognitions)</li>
    <li>
      <strong>2025 GIST RA Scholarship (Outstanding Doctoral Student)</strong> — Dec. 2025<br>
      GIST Scholarship.
    </li>
    <li>
      <strong>2024 Top-Student Award</strong> — Dec. 2024<br>
      GIST Scholarship.
    </li>
    <li>
      <strong>KCC 2024 Honorable Mention Award in Undergraduate Division</strong> — Jul. 2024<br>
      Awarded for <em>Badminton Swing Posture Analysis and Visualization Using Deep Learning-Based Encoder-Decoder Architecture</em>.
    </li>
    <li>
      <strong>CHI 2024 Honorable Mention Award (Top 5%)</strong> — May 2024<br>
      Awarded for <em>ErgoPulse: Electrifying Your Lower Body With Biomechanical Simulation-based Electrical Muscle Stimulation Haptic System in Virtual Reality</em>.
    </li>
    <li>
      <strong>GIST Scholarship (Ph.D.)</strong> — Sep. 2023 – Present<br>
      Government-supported full funding.
    </li>
    <li>
      <strong>IJCAI CoachAI Badminton Challenge 2023 Runner-Up (Rank 2)</strong> — Aug. 2023<br>
      Awarded for <em>MuLMINet: Multi-Layer Multi-Input Transformer Network with Weighted Loss</em>.
    </li>
    <li>
      <strong>KCC 2022 Best Paper Award (Top 3%)</strong> — Jun. 2022<br>
      Awarded for <em>VR Interface Design to Improve Grasping Experience in Block Stacking Activities in Virtual Environments</em>.
    </li>
    <li>
      <strong>GIST Scholarship (M.S.)</strong> — Sep. 2021 – Aug. 2023<br>
      Government-supported full funding.
    </li>
    <li>
      <strong>GIST Scholarship for GIST Infinite Challenge Project</strong> — Mar. 2021 – Dec. 2021<br>
      <em>WMVW: Production of VR GIST Campus Map</em>.
    </li>
    <li>
      <strong>GIST Scholarship for GIST Infinite Challenge Project</strong> — Mar. 2020 – Dec. 2020<br>
      <em>G-Base: Producing and Composing Songs &amp; Music Video</em>.
    </li>
    <li>
      <strong>GIST Scholarship (B.S.)</strong> — Feb. 2017 – Aug. 2021<br>
      Government-supported full funding.
    </li>
  </ul>
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
