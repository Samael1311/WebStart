$(document).ready(() => {

	let btnUp = $('#up');

	btnUp.click(() => {
		$("html, body").animate({
			scrollTop: 0
		}, "slow");

	});

	$(window).scroll(() => {
		if ($(window).scrollTop() == $(document).height() - $(window).height()) {
			btnUp.addClass('up_active');
			console.log('конец');
		} else {
			btnUp.removeClass('up_active');
		}


	});



})