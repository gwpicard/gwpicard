---
layout: default
permalink: /portfolio
title: Projects
---

<script type="text/javascript" src="{{ "/css/jquery.collapsible.min.js" | prepend: site.baseurl }}"></script>



<div style="height: 100%; position: relative;">
  	<div class="post-content" style="width: 75%; top: 50%; transform: translateY(-50%); position: relative; margin: auto; text-align: left;">
	  	<div id="collapse" style="opacity: 0;">
		  <h2>/ Projects</h2>
		  <div style="margin-left: 30px;">
		    <h3 class="portfolio-link"><a href="/project-pico">/ Project Pico _2012</a></h3>
		  </div>
		  <h2>/ Creative</h2>
		  <div style="margin-left: 30px;">
		    <h3 class="portfolio-link"><a href="/photography">/ Photography</a></h3>
		  </div>
		</div>
	</div>
</div>

<script type="text/javascript">
	$('#collapse').collapsible({
		accordion: true,
	});

	$('#collapse').fadeTo(800, 1);
</script>