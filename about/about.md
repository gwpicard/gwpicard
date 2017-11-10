---
layout: full-screen-scroll
permalink: /about
title: About
---

<div class="swiper-container">
	<div class="swiper-wrapper">
		<div class="swiper-slide">
	      	<div><h1>I love to write, learn and <br />
			work on interesting projects.</h1>
			</div>
	  	</div>
		<div class="swiper-slide" style="background-image:url('/about.jpg'); height: 100%; background-repeat: no-repeat; background-position: center center; background-size: cover; overflow: hidden;">
		</div>
		<div class="swiper-slide">
	      	<div style="position: absolute;"><h1>Currently based in:<br />
			<strong>Seoul, South Korea</strong></h1>
			<p style="font-size:12px;">last updated: Nov, 2017</p>
			</div>
			<div class="social-media-list">
	          <a href="mailto:{{ site.email }}"><span class="icon icon--mail">{% include icon-mail.svg %}</span></a>

	          {% if site.github_username %}
	            {% include icon-github.html username=site.github_username %}
	          {% endif %}

	          {% if site.facebook_username %}
	            {% include icon-facebook.html username=site.facebook_username %}
	          {% endif %}

	          {% if site.linkedin_username %}
	            {% include icon-linkedin.html username=site.linkedin_username %}
	          {% endif %}

	        </div>
	  	</div>
	</div>
</div>
