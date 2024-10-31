/*-----------------------------------------------------------------

Template Name: Stratify - Business Consulting HTML Template
Author:  ThemeMascot
Author URI: https://themeforest.net/user/thememascot/portfolio
Developer: Kawser Ahmed Roni
Version: 1.0.0
Description: Stratify - Business Consulting HTML Template

-------------------------------------------------------------------
CSS TABLE OF CONTENTS
-------------------------------------------------------------------

01. preloader
02. color switcher
03. header
04. gsap animation
05. js animation
06. fullScreen search
07. swiper slider
08. hover add class remove class
09. search screen
10. background image
11. magnificPopup
12. coundawn
13. counterup
14. back to top
15. wow animation

------------------------------------------------------------------*/

(function ($) {
	("use strict");

	var swiper = new Swiper(".project__slider", {
		spaceBetween: 0,
		speed: 1000,
		pagination: false,
		navigation: {
			nextEl: ".project__arry-next",
			prevEl: ".project__arry-prev",
		},
		mousewheel: false,
		keyboard: true,
		autoplay: false,
		loop: false,
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			480: {
				slidesPerView: 2,
			},
			787: {
				slidesPerView: 3,
			},
			991: {
				slidesPerView: 4,
			},
			1200: {
				slidesPerView: 4,
			},
		},
	});

	// projects change background
	$(".project-area .swiper-slide").on("mouseenter click", function () {
		var tab_id = $(this).attr("data-tab");
		$(".project-area .swiper-slide").removeClass("active");
		$(this).addClass("active");

		$(".project__image .tab-img ").removeClass("active");
		$("#" + tab_id).addClass("active");

		if ($(this).hasClass("active")) {
			return false;
		}
	});

	$(".project-area .swiper-button-next").on("click", function () {
		$(".project-area .swiper-slide-next").click();
	});
	$(".project-area .swiper-button-prev").on("click", function () {
		$(".project-area .swiper-slide-prev").click();
	});
	// end projects change background
})(jQuery);
