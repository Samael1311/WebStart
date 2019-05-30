'use strict'

let btn = document.querySelector('#button'),
	modal = document.querySelector('.modal'),
	btnClose = document.querySelector('#close');

function closeModal(){
	modal.classList.remove('modal_active');
}

btnClose.addEventListener('click', ()=>{
	closeModal();
});

btn.addEventListener('click', ()=>{
	modal.classList.add('modal_active');
	setTimeout(closeModal, 5000);
});



