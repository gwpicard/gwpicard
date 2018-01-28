---
layout: full-screen-scroll
permalink: /about
title: About
---
<script>document.body.className += ' fade-out';</script>

<div class="swiper-container">
	<div class="swiper-wrapper">
		<div class="swiper-slide">
	      	<div class="post-content" style="width: 90%; text-align: justify;">
	      		<p>I am a Founding Student at the <a style="text-decoration: underline;" href="https://minerva.kgi.edu" target="_blank"> Minerva Schools at KGI</a>, a reinvented university for the 21st century with innovative academics and an immersive global experience.</p>

	      		<p>Prior to my transfer to Minerva, I studied Aero-Mechanical Engineering at the <a style="text-decoration: underline;" href="https://www.strath.ac.uk/" target="_blank">University of Strathclyde</a> in Scotland, where I launched and led the university’s <a style="text-decoration: underline;" href="https://www.ted.com/tedx/events/11674" target="_blank">first-ever live TEDx event</a> (still ongoing today).</p>

				<p>In pursuing diverse interests in technology, education and problem-solving, I have collaborated with researchers in the medical sciences and applied physics in labs across 3 continents, helped revise curricula in computer science and statistics at Minerva, worked at an <a style="text-decoration: underline;" href="http://kano.me/" target="_blank">EdTech startup</a> coordinating logistics and running user research workshops, and built simulation models at Apple as a data scientist.</p>
			</div>
	  	</div>
		<div class="swiper-slide" style="background-image:url('/about.jpg'); height: 100%; background-repeat: no-repeat; background-position: center center; background-size: cover; overflow: hidden;">
		</div>
		<div class="swiper-slide">
	      	<div class="post-content" style="position: absolute;"><h1>Currently in:<br />
			<strong>Hyderabad, India</strong></h1>
			<p style="font-size:12px;">last updated: Jan, 2018</p>
			</div>
			<div class="social-media-list">
	          <a href="mailto:{{ site.email }}" target="_blank"><span class="icon icon--mail">{% include icon-mail.svg %}</span></a>

	          <a href="https://github.com/{{ site.github_username }}" target="_blank"><span class="icon icon--mail">{% include icon-github.svg %}</span></a>

	          <a href="https://facebook.com/{{ site.facebook_username }}" target="_blank"><span class="icon icon--mail">{% include icon-facebook.svg %}</span></a>

	          <a href="https://linkedin.com/in/{{ site.linkedin_username }}" target="_blank"><span class="icon icon--mail">{% include icon-linkedin.svg %}</span></a>
	        </div>
	  	</div>
	</div>
	<div class="swiper-button-next swiper-button-black" style="right: 47.5%; top: 92%;   transform: rotate(90deg) translateX(-50%);"></div>
</div>

<script>
	$(document).ready(function(){
	    $('body').removeClass('fade-out');
	});

</script>
