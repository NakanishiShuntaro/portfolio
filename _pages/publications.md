---
layout: page
permalink: /publications/
title: publications
description: Conference presentations; scheduled work is explicitly marked.
years: [2026, 2025]
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers --group_by none -q @*[year={{y}}]* %}
{% endfor %}

</div>