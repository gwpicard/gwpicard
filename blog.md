---
layout: page
permalink: /blog
title: Projects
---

## Blog Posts

{% for post in site.posts %}
{% if post.categories contains 'blog' %}
 * {{ post.date | date_to_string }} &raquo; [ {{ post.title }} ]({{ post.url }})
 {% endif %}
{% endfor %}