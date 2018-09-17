---
layout: full-screen-scroll
permalink: /about
title: About
---
<script>document.body.className += ' fade-out';</script>

<div class="swiper-container">
	<div class="swiper-wrapper">
		<div class="swiper-slide">
	      	<div class="post-content" style="width: 70%; text-align: justify;">
	      		<p>I am a Founding Student at the <a style="text-decoration: underline;" href="https://minerva.kgi.edu" target="_blank"> Minerva Schools at KGI</a>, a reinvented university for the 21st century with innovative academics and an immersive global experience.</p>

	      		<p>Prior to Minerva, I briefly studied Aero-Mechanical Engineering at the <a style="text-decoration: underline;" href="https://www.strath.ac.uk/" target="_blank">University of Strathclyde</a> in Scotland, where I launched the university’s <a style="text-decoration: underline;" href="https://www.ted.com/tedx/events/11674" target="_blank">first-ever live TEDx event</a></p>

				<p>In pursuing diverse interests in technology, education and problem-solving, I have collaborated with researchers in labs across 3 continents, helped revise curricula in CS and statistics, worked at a <a style="text-decoration: underline;" href="http://kano.me/" target="_blank">Creative Computer startup</a> on logistics and user research, and built computer simulation models at Apple.</p>
			</div>
	  	</div>
		<div class="swiper-slide" style="background-image:url('/about.jpg'); height: 100%; background-repeat: no-repeat; background-position: center center; background-size: cover; overflow: hidden;">
		</div>
		<div class="swiper-slide">
	      	<div class="post-content" style="position: absolute;"><h1>Currently in:<br />
			<strong>London, UK</strong></h1>
			<p style="font-size:12px;">last updated: Sep, 2018</p>
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
