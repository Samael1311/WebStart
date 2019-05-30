'use strict'

let btn = document.querySelector('#button'),
	modal = document.querySelector('.modal'),
	btnClose = document.querySelector('#close');

btn.addEventListener('click', ()=>{
	modal.classList.add('modal_active');
});

btnClose.addEventListener('click', ()=>{
	modal.classList.remove('modal_active');
});

