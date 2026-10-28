---
title: "MultiSenseBadminton"
permalink: /projects/multisensebadminton/
description: "A multimodal dataset for studying badminton movement and performance across skill levels."
author_profile: true
---

<p class="project-role">Scientific Data · 2024 · Lead author</p>

## How can we study a stroke beyond its outcome?

A successful shot alone does not describe the movement, muscle activity, or gaze behind it. MultiSenseBadminton brings these signals together for analysis across skill levels.

<figure class="project-overview-figure">
  <a href="{{ '/assets/img/MultiSenseBadminton.png' | relative_url }}"><img src="{{ '/assets/img/MultiSenseBadminton.png' | relative_url }}" alt="Existing MultiSenseBadminton overview showing wearable sensors and recorded signal streams"></a>
  <figcaption>Wearable setup and recorded streams. Open the image for a larger view.</figcaption>
</figure>

## Dataset and approach

The dataset contains **7,763 strokes from 25 players**, covering forehand clears and backhand drives. It combines body motion, gaze, muscle activity, foot pressure, video, and annotations. Three professional coaches informed its design.

## Evidence and limits

The [published study](https://pmc.ncbi.nlm.nih.gov/articles/PMC10997636/) reports technical validation and preliminary classification benchmarks. These demonstrate analysis possibilities, not improvements in learning. Two strokes in a launcher-based setting, sensor noise and missing recordings, subjective labels, and class imbalance limit generalization to match play.

## My contribution

As stated in the paper's author contributions, I conceived and conducted data collection, preprocessed the dataset, performed technical validation, and drafted the manuscript.

## Resources

<ul class="project-resources">
  <li><a href="https://www.nature.com/articles/s41597-024-03144-z">Paper</a></li>
  <li><a href="https://github.com/dailyminiii/MultiSenseBadminton">Code</a></li>
  <li><a href="https://doi.org/10.6084/m9.figshare.c.6725706.v1">Data</a></li>
  <li><a href="{{ '/dataset-reuse/' | relative_url }}#multisensebadminton">Studies using this dataset</a></li>
</ul>

[Back to publications]({{ '/publications/' | relative_url }})
