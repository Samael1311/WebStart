$(document).ready(()=>{

	let btnUp = $('#up');

	btnUp.click(()=> {
		$("html, body").animate({ scrollTop: 0 }, "slow");

	});

	if($(window).scroll() + $(window).height() == $(document).height()){
		btn.addClass('up_active');
	} else {
		btn.removeClass('up_active');
	}


})