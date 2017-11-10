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
	          <a href="mailto:{{ site.email }}" target="_blank"><span class="icon icon--mail">{% include icon-mail.svg %}</span></a>

	          <a href="https://github.com/{{ site.github_username }}" target="_blank"><span class="icon icon--mail">{% include icon-github.svg %}</span></a>

	          <a href="https://facebook.com/{{ site.facebook_username }}" target="_blank"><span class="icon icon--mail">{% include icon-facebook.svg %}</span></a>

	          <a href="https://linkedin.com/in/{{ site.linkedin_username }}" target="_blank"><span class="icon icon--mail">{% include icon-linkedin.svg %}</span></a>
	        </div>
	  	</div>
	</div>
</div>
