---
layout: full-screen-scroll
permalink: /about
title: About
---
<script>document.body.className += ' fade-out';</script>

<div class="swiper-container">
	<div class="swiper-wrapper">
		<div class="swiper-slide">
	      	<div class="post-content" style="width: 90%;">
	      		<h1 class="portfolio-link">Highly analytical <i style="font-size: 0.7em" class="em em-computer"></i>, <nobr>infinitely curious <i style="font-size: 0.7em" class="em em-curly_loop"></i></nobr> <br />
				I love to create things, and solve <a style="text-decoration: underline;" href="/portfolio">problems</a>.</h1>
			</div>
	  	</div>
		<div class="swiper-slide" style="background-image:url('/about.jpg'); height: 100%; background-repeat: no-repeat; background-position: center center; background-size: cover; overflow: hidden;">
		</div>
		<div class="swiper-slide">
	      	<div class="post-content" style="position: absolute;"><h1>Currently in:<br />
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
	<div class="swiper-button-next swiper-button-black" style="right: 50%; top: 92%;   transform: rotate(90deg) translateX(-50%);"></div>
</div>

<script>
	$(document).ready(function(){
	    $('body').removeClass('fade-out');
	});

</script>