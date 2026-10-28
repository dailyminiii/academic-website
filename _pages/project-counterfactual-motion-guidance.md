---
title: "Counterfactual Badminton Motion Guidance"
permalink: /projects/counterfactual-motion-guidance/
description: "Exploring movement alternatives through model-based counterfactual explanations and visual comparison."
author_profile: true
---

<p class="project-role">IEEE ICRA Workshop on Wearable Robotics · 2024 · Lead author</p>

## What could a different version of this movement look like?

Copying an expert's motion does not directly show how a player's own movement might change. This workshop study explores nearby alternatives that can be compared with the original stroke.

<figure class="project-overview-figure">
  <a href="{{ '/assets/img/CF.png' | relative_url }}"><img src="{{ '/assets/img/CF.png' | relative_url }}" alt="Published pipeline: joint positions, autoencoder latent search, stroke-quality classifier, and an overlay of original and generated motions"></a>
  <figcaption>The existing system overview connects model-based motion generation with visual comparison.</figcaption>
</figure>

## System

MultiSenseBadminton joint-position sequences feed a stroke-quality classifier. An autoencoder-based search generates counterfactual motions in latent space. A Unity visualization overlays generated and original movements.

## Evidence and limits

The [2024 paper](https://arxiv.org/html/2405.11802v1) compares **100 examples per stroke type** with three nearest-neighbor baselines. It evaluates model-based proximity and motion distances. These offline results do not establish that the suggested motions improve a person's performance or learning; user evaluation is future work.

## Resources

<ul class="project-resources">
  <li><a href="https://arxiv.org/abs/2405.11802">Paper</a></li>
  <li><a href="https://youtu.be/o7bDM5yRbtw">Demo</a></li>
  <li><a href="https://doi.org/10.6084/m9.figshare.c.6725706.v1">Data used: MultiSenseBadminton</a></li>
</ul>

Paper title: *Counterfactual Explanation-Based Badminton Motion Guidance Generation Using Wearable Sensors*.

[Back to publications]({{ '/publications/' | relative_url }})
