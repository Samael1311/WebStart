$(document).ready(() => {

	// $('.slider').slick({
	// 	slidesToShow: 3,
	// 	slidesToScroll: 1,
	// 	prevArrow: $('.arrows__left'),
	// 	nextArrow: $('.arrows__right'),
	// 	responsive:[
	// 		{
	// 			breakpoint: 1200,
	// 			settings: {
	// 				slidesToShow: 2,
	// 				slidesToScroll: 1
	// 			}
	// 		},
	// 		{
	// 			breakpoint: 768,
	// 			settings: {
	// 				slidesToShow: 1,
	// 				slidesToScroll: 1
	// 			}
	// 		}

	// 	]
	// });

	var owl=$('.slider');
	$('.arrows__right').click(function(){
		owl.trigger('next.owl.carousel');
	});
	$('.arrows__left').click(function(){
		owl.trigger('prev.owl.carousel');
	});
	owl.owlCarousel({

		loop: true,
		margin: 10,
		responsiveClass: true,
		nav: false,
		loop: true,
		responsive: {
			0: {
				items: 1,

			},
			547: {
				items: 2,

			},
			768: {
				items: 3,

			},
			1200: {
				items: 3
			}
		}

	});






});