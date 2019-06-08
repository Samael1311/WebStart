new WOW().init();

		$(document).ready(()=>{

				$('#brif-form').validate({
					rules: {
						username: {
							required: true,
							// minlength: 2,
							// maxlength: 15
							rangelength: [2, 15]
						},
						phone:{
							required: true
						},
						email: {
							required: true,
							email: true
						}
					},
					messages: {
						username: {
							required: "Заполните поле",
							rangelength: jQuery.validator.format("Количесвто символов должно составлять от 2 до 15"),
							// maxlength: jQuery.validator.format("Максимальное количество 15 символов")
						},
						phone: {
						required: "Заполните поле"
		
					},
						email: {
							required: "Заполните поле",
							email: jQuery.validator.format("Введите корректный email")
							
						}
					},
					errorClass: "invalid",
					validClass: "success",
					errorElement: "div"			

				});
				$('#offer-form').validate({
					rules: {
						username: {
							required: true,
							rangelength: [2, 15]
						},
						phone:{
							required: true
						}
					},
					messages: {
						username: {
							required: "Заполните поле",
							rangelength: jQuery.validator.format("Количесвто символов должно составлять от 2 до 15")
						},
						phone: {
						required: "Заполните поле"
		
					}
					},
					errorClass: "invalid",
					validClass: "success",
					errorElement: "div"			

				});


				$('.phone').mask('8 (999) 999-99-99');

				let inputName = document.querySelectorAll('.input-name');
				inputName.forEach(e => {
					e.addEventListener('keyup', function(e){
						e.target.value = e.target.value.replace(/[^a-z,A-Z,а-я,А-Я]/g,'');
					});
				});
			
					
		})