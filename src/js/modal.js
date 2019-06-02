$(document).ready(function(){
	let btn = $('#button'),
			modal = $('.modal'),
			close = $('#close');

	btn.on('click' , ()=> {
		modal.addClass('modal_active');
	});

	close.on('click', ()=>{
		modal.removeClass('modal_active');
	});


});