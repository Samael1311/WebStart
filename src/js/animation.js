window.addEventListener('DOMContentLoaded', function(){
'use strict'
let heroItem = document.querySelectorAll('.hero-list__item'),
	offerInput = document.querySelectorAll('.offer__input');

heroItem.forEach(e => {
	e.addEventListener('mouseover', ()=>{
		e.classList.add('animated', 'bounce');
	});
	e.addEventListener('mouseout', ()=>{
		e.classList.remove('animated', 'bounce');
	});
});

offerInput.forEach(e =>{
	e.addEventListener('mouseover', ()=>{
		e.classList.add('animated', 'pulse');
	});
	e.addEventListener('mouseout', ()=>{
		e.classList.remove('animated', 'pulse');
	});
});







})