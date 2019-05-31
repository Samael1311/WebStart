$(document).ready(()=>{

	let btnUp = $('#up');

	btnUp.click(()=> {
		$("html, body").animate({ scrollTop: 0 }, "slow");

	});


})