---
layout: full-screen-scroll
title: Technical Drawing
permalink: '/technical-drawing'
---
<script>document.body.className += ' fade-out';</script>

<div class="swiper-container">
	<div class="swiper-wrapper">
		<div class="swiper-slide">
	      	<div class="post-content" style="text-align: justify; width: 55%;">
	      	<p>I learned <strong>technical drawing</strong> and <strong>computer-aided design</strong> (CAD) all throughout high school, and during my first year at university for aeromechanical engineering.</p>
	      	</div>
		</div>
		<div class="swiper-slide">
			<div class="post-content">
				<img src="{{ site.git_assets_url }}/cross_section_0.jpg" style="min-width: 600px; width: 60%;"/>
				<p style="margin-top: 20px;">Computer Mouse: Orthographic cross-section<br>
				<i>Hand Technical Drawing</i></p>
			</div>
		</div>
		<div class="swiper-slide">
			<div class="post-content">
				<img src="{{ site.git_assets_url }}/cross_section.jpg" style="min-width: 600px; width: 60%;"/>
				<p style="margin-top: 20px;">Computer Mouse: Isometric cross-section<br>
				<i>Hand Technical Drawing</i></p>
			</div>
		</div>
		<div class="swiper-slide">
			<div class="post-content">
				<img src="{{ site.git_assets_url }}/exploded_view.png" style="min-width: 600px;"/>
				<p style="margin-top: 20px;">Travel Adapter: Exploded view<br>
				<i>PTC Creo</i></p>
			</div>
		</div>
		<div class="swiper-slide">
			<div class="post-content">
				<img src="{{ site.git_assets_url }}/iso_2.png" style="min-width: 600px;"/>
				<p style="margin-top: 20px;">Travel Adapter: Orthographic view<br>
				<i>PTC Creo</i></p>
			</div>
		</div>
		<div class="swiper-slide">
			<div class="post-content">
				<img src="{{ site.git_assets_url }}/rendered.png" style="min-width: 600px;"/>
				<p style="margin-top: 20px;">Travel Adapter: 3-D Rendering<br>
				<i>PTC Creo</i></p>
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
