	ymaps.ready(init);

		function init() {

		}
		ymaps.ready(function () {
			var myMap = new ymaps.Map('map', {
					center: [55.611409, 37.201122],
					zoom: 9
				}, {
					searchControlProvider: 'yandex#search'
				}),


				MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
					'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
				),

				myPlacemark = new ymaps.Placemark(myMap.getCenter(), {

					hintContent: 'Ремонт квартир. Качественно и быстро! ',
					balloonContent: 'Москва ул. Ленина, д. 10, корпус 2, оф. 308'
				}, {

					iconLayout: 'default#image',
					iconImageHref: 'img/map-img.png',
					iconImageSize: [30, 30]
					//iconImageOffset: [-5, -38]
				})

			myMap.geoObjects
				.add(myPlacemark);

		});