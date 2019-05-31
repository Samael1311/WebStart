$(document).ready(() => {

	let btnUp = $('#up');

	btnUp.click(() => {
		$("html, body").animate({
			scrollTop: 0
		}, "slow");

	});

	let currentScroll =0,
	nextScroll;

	$(window).scroll(() => {
		// if ($(window).scrollTop() == $(document).height() - $(window).height()) {
		// 	btnUp.addClass('up_active');
		// 	console.log('конец');
		// } else {
		// 	btnUp.removeClass('up_active');
		// }
	nextScroll = $(window).scrollTop();

		if(nextScroll > currentScroll){
			btnUp.addClass('up_active');
		} else {
			btnUp.removeClass('up_active');
		}
		currentScroll = nextScroll;

	});



})