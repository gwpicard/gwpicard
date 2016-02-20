---
layout: page
permalink: /projects
title: Projects
---

### Past Projects

{% for post in site.posts %}
{% if post.categories contains 'project' %}
 * &raquo; [ {{ post.title }} ]({{ site.url | append: post.permalink }})
  {% endif %}
{% endfor %}