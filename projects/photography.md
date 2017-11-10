---
layout: default
permalink: /photography
title: Projects
---
<script>document.body.className += ' fade-out';</script>
<div style="height: 100%; display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;">
	<div class="swiper-container-inner">
		<div class="swiper-wrapper">
			<div class="swiper-slide" style="background-image:url('/chicago-in-clouds.jpg'); background-size: cover; background-repeat: no-repeat; background-position: 40% 40%; width: 100%;">
		  	</div>
			<div class="swiper-slide" style="background-image:url('/assets/photo_1.jpg'); background-size: cover; background-repeat: no-repeat; background-position: center; width: 100%;">
		  	</div>
		  	<div class="swiper-slide" style="background-image:url('/about.jpg'); background-size: cover; background-repeat: no-repeat; background-position: center; width: 100%;">
		  	</div>
		  	<div class="swiper-slide" style="background-image:url('/assets/photo_2.jpg'); background-size: cover; background-repeat: no-repeat; background-position: 65% 65%; width: 100%;">
		  	</div>
		  	<div class="swiper-slide" style="background-image:url('/assets/photo_3.jpg'); background-size: auto 100%; background-repeat: no-repeat; background-position: center; width: 100%;">
		  	</div>
		  	<div class="swiper-slide" style="background-image:url('/assets/photo_4.jpg'); background-size: cover; background-repeat: no-repeat; background-position: 75%; width: 100%;">
		  	</div>
		  	<div class="swiper-slide post-content" style="width: 35%; text-align: center;">
				<p>/ Photography</p>
		  	</div>
		</div>
	</div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.5/js/swiper.js"></script>
<script type="text/javascript">
$(document).ready(function () {
//initialize swiper when document ready
var mySwiper = new Swiper ('.swiper-container-inner', {
  // Optional parameters
  centeredSlides: true,
  slidesPerView: 'auto',
  slideToClickedSlide: true,
  mousewheel: {
  	sensitivity: 2,
  },
  //freeMode: true,
  //freeModeSticky: true,
  spaceBetween: 10,
  keyboard: {
    enabled: true,
  },
  loop: true,
  loopedSlides: 10,
  preloadImages: true,
});
});
</script>
<script>
	$(document).ready(function(){
	    $('body').removeClass('fade-out');
	});

</script>

 