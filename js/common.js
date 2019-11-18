$(function () {

	// Custom JS



	$("body").on("click", ".h-d-box-1", function (e) {
		e.preventDefault();
		$(".h-d-box-open").hide();
		$(".h-d-box-closed").css('opacity', '1');
		$(".h-d-box-1 .h-d-box-open").show();
		$(".h-d-box-1 .h-d-box-closed").css('opacity', '0');
		setTimeout(function () {
			$(".h-d-box-1 .h-d-box-open").hide();
			$(".h-d-box-1 .h-d-box-closed").css('opacity', '1');
		}, 1000)
	});

	$("body").on("click", ".h-d-box-2", function (e) {
		e.preventDefault();
		$(".h-d-box-open").hide();
		$(".h-d-box-closed").css('opacity', '1');
		$(".h-d-box-2 .h-d-box-open").show();
		$(".h-d-box-2 .h-d-box-closed").css('opacity', '0');
		setTimeout(function () {
			$(".h-d-box-2 .h-d-box-open").hide();
			$(".h-d-box-2 .h-d-box-closed").css('opacity', '1');
		}, 1000)
	});

	$("body").on("click", ".h-d-box-3", function (e) {
		e.preventDefault();
		$(".h-d-box-open").hide();
		$(".h-d-box-closed").css('opacity', '1');
		$(".h-d-box-3 .h-d-box-open").show();
		$(".h-d-box-3 .h-d-box-closed").css('opacity', '0');
		setTimeout(function () {
			$(".h-d-box-3 .h-d-box-open").hide();
			$(".h-d-box-3 .h-d-box-closed").css('opacity', '1');
		}, 1000)
	});

	$("body").mousemove(function (e) {
		var x = (e.pageX * -1 / 15), y = (e.pageY * -1 / 15);
		//$('.wrap').css('background-position', x + 'px ' + y + 'px');
		if ($(window).width() > 992) {

			$(".hc-plane-img").css({
				"margin-right": -x - 150 + 'px',
				"margin-top": y + 'px',
			});

			$(".pplane-img").css({
				"margin-right": -x - 50 + 'px',
				//"margin-top" : y + 'px',
			});

			$(".plane-bok-img").css({
				//"margin-right" : -x-50 + 'px',
				"margin-bottom": y / 4 + 'px',
			});
			/*
			$(".other-project-item_taxi .other-project-item-img").css({
				"margin-right" : -x/5 + 'px',
				"margin-top" : y/10 + 'px',
			});

			$(".other-project-item_gallery .other-project-item-img").css({
				"margin-right" : x/5 + 'px',
				"margin-top" : y/10 + 'px',
			});

			$(".other-project-item_plane .other-project-item-img").css({
				"margin-right" : -x/5 + 'px',
				"margin-top" : y/10 + 'px',
			});
			*/

			/*
			$(".hc-taxi-img").css({
				"margin-right" : -x/3-120 + 'px',
				"margin-top" : y + 'px',
			});
			*/
		}

	});



	$("h4").animated("fadeInUp");
	$(".case-item").animated("fadeInUp");
	$("h2").animated("fadeInUp");
	$(".feedback-form").animated("fadeIn");
	$(".hc-hashtag").animated("fadeInUp");
	$(".pl-s-block-inner-descr,.pl-s-task-items,.pl-s-solution-descr").animated("fadeInUp");


	$(".result-block,.delivery-third-top-block,.delivery-app-for-courier-top").animated("fadeInUp");
	$(".delivery-s-solution-descr,.taxi-s-task-descr,.taxi-s-solution-descr").animated("fadeInUp");

	$(".taxi-fourth-top-block-img").animated("fadeInUp");
	$(".taxi-fourth-middle-block,.taxi-sixth-top-block,.taxi-result-items").animated("fadeInUp");


	$("body").on("click", ".si-mobile-show-btn", function (e) {
		e.preventDefault();
		$(".si-mobile-hidden").show()
		$(".si-mobile-show-btn-block").hide();
	});

	$("body").on("click", ".ci-mobile-show-btn", function (e) {
		e.preventDefault();
		$(".ci-mobile-hidden").css('display', 'flex')
		$(".ci-mobile-show-btn-block").hide();
	});
	$("body").on("click", ".service-mobile-toggle-link", function (e) {
		e.preventDefault();

		if ($(this).is(".active")) {
			$(this).removeClass('active');
			$(this).parents('.service-item').removeClass('flip');

		}
		else {
			$(this).addClass('active');
			$(this).parents('.service-item').addClass('flip');
		}
	});

	$("body").on("click", ".mobile-menu-btn", function (e) {
		e.preventDefault();
	});

	$("body").on("mouseup", function (e) {
		var mobileMenu = $(".mobile-menu-panel");
		var mobileMenuLink = $(".mobile-menu-btn");
		if (mobileMenuLink.is(e.target)) {
			if ($(".mobile-menu-btn").is(".active")) {
				mobileMenuLink.removeClass("active").next().slideUp(300);
				$('body').css('overflow', 'visible');
			}
			else {
				mobileMenuLink.addClass("active").next().slideDown(300);
				if ($(window).width() < 576) {
					$('body').css('overflow', 'hidden');
					$(".topline").addClass('fixed');
				}

			}
		} else {
			if (!mobileMenu.is(e.target) && mobileMenu.has(e.target).length === 0) {
				if ($(".mobile-menu-btn").is(".active")) {

					mobileMenuLink.removeClass("active").next().slideUp(300);
					$('body').css('overflow', 'visible');
				} else {
				}
			}
		}
	});


	$("body").on('click', '[href*="#section-service"],[href*="#section-cases"],[href*="#section-solutions"],[href*="#section-clients"],[href*="#section-feedback"],[href*="#section-contact"]', function (e) {
		var fixed_offset = 0;
		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
		e.preventDefault();
	});


	$("body").on('click', '.hc-to-next-btn', function (e) {
		var fixed_offset = 0;
		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
		e.preventDefault();
	});


	$("body").on('click', '.plane-prog-sl-item-label-dot-link', function (e) {
		e.preventDefault();
		$(this).parent().next().fadeIn()
	});


	$("body").on('click', '.taxi-prog-sl-item-label-dot-link', function (e) {
		e.preventDefault();
		$(this).parent().next().fadeIn()
	});

	$("body").on('click', '.delivery-prog-sl-item-label-dot-link', function (e) {
		e.preventDefault();
		$(this).parent().next().fadeIn()
	});


	$("body").on('click', '.prog-sl-item-close', function (e) {
		e.preventDefault();
		$(this).parent().fadeOut()
	});

	$("body").on('click', '.pl-prog-function-items-btn-show', function (e) {
		e.preventDefault();
		$('.pl-prog-function-item-wr-hidden').show()
		$('.pl-prog-function-items-btn-block').hide()

	});
	// $("input[name='phone']").mask('+7 (000) 000 00 00', { placeholder: "+7 (000) 000 00 00" });

	if ($(".particles-js").length > 0) {

		particlesJS.load('particles-js', 'js/particles.json', function () {
			console.log('callback - particles.js config loaded');
		});
	}

	sendMail();


	$(".popup-btn").magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		mainClass: 'mfp-fade',
		closeMarkup: '<button title="%title%" type="button" class="mfp-close"></button>'

	});



	$('.stories-slider').slick({
		slidesToShow: 1,
		arrows: true,
		dots: false,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: true,
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 320,
				settings: {
					arrows: true,
					slidesToShow: 1,
				}
			}
		]
	});

	/*
	$('.plane-prog-slider').slick({
		slidesToShow: 1,
		arrows: true,
		dots: false,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				dots: true,
				slidesToShow: 1,
			}
		},
		{
			breakpoint: 320,
			settings: {
				arrows: true,
				slidesToShow: 1,
			}
		}
		]
	});


	$('.taxi-prog-slider').slick({
		slidesToShow: 1,
		arrows: true,
		dots: false,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				dots: true,
				slidesToShow: 1,
			}
		},
		{
			breakpoint: 320,
			settings: {
				arrows: true,
				slidesToShow: 1,
			}
		}
		]
	});
	*/

	createMobileTaxiSlider();

	$(".taxi-compare-images").twentytwenty();



	$('.taxi-compare-mobile-slider').slick({
		slidesToShow: 1,
		arrows: false,
		dots: true,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 320,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	$("body").on('click', '.taxi-compare-mobile-switch-link', function (e) {
		e.preventDefault();
		$('.taxi-compare-mobile-switch-link').removeClass('active');

		$(this).addClass('active');
		if ($(this).is('.taxi-compare-mobile-switch-link-dark')) {
			$('.taxi-compare-mobile-slider-block').addClass('taxi-compare-mobile-slider-block_dark');
		} else {
			$('.taxi-compare-mobile-slider-block').removeClass('taxi-compare-mobile-slider-block_dark');
		}
	});

});


$(window).scroll(function () {
	if ($(window).scrollTop() > 0) {

		$(".topline").addClass('fixed');
	} else {
		$(".topline").removeClass('fixed');
	}

	if ( /*$(".hc-btn-blocker").length > 0 &&*/ $(window).scrollTop() > 700 /*$(".hc-btn-blocker").offset().top*/) {
		$(".topline").addClass('or-btn-colored');
	} else {
		$(".topline").removeClass('or-btn-colored');
	}


	if ($(".service-items").length > 0 && $(window).scrollTop() > ($(".service-items").offset().top) - 400) {

		$('.service-item').each(function (i) {
			$(this).delay((i++) * 300).fadeTo(1000, 1);
		})
	}

	if ($(".client-items-1").length > 0 && $(window).scrollTop() > ($(".client-items-1").offset().top) - 400) {

		$('.client-items-1 .client-item').each(function (i) {
			$(this).delay((i++) * 300).fadeTo(1000, 1);
		})
	}

	if ($(".client-items-2").length > 0 && $(window).scrollTop() > ($(".client-items-2").offset().top) - 400) {

		$('.client-items-2 .client-item').each(function (i) {
			$(this).delay((i++) * 300).fadeTo(1000, 1);
		})
	}


	if ($(".pl-s-solution-items").length > 0 && $(window).scrollTop() > ($(".pl-s-solution-items").offset().top) - 400) {

		$('.pl-s-solution-items .pl-s-solution-item').each(function (i) {
			$(this).delay((i++) * 300).fadeTo(1000, 1);
		})
	}


	if ($(".other-project-items").length > 0 && $(window).scrollTop() > ($(".other-project-items").offset().top) - 400) {

		$('.other-project-items .other-project-item').each(function (i) {
			$(this).delay((i++) * 300).fadeTo(1000, 1);
		})
	}

	if ($(".delivery-s-solution-items").length > 0 && $(window).scrollTop() > ($(".delivery-s-solution-items").offset().top) - 400) {

		$('.delivery-s-solution-items .delivery-s-solution-item').each(function (i) {
			$(this).delay((i++) * 300).fadeTo(1000, 1);
		})
	}


	if ($(".d-app-f-courier-items").length > 0 && $(window).scrollTop() > ($(".d-app-f-courier-items").offset().top) - 400) {

		$('.d-app-f-courier-items .d-app-f-courier-item').each(function (i) {
			$(this).delay((i++) * 300).fadeTo(1000, 1);
		})
	}

	if ($(".taxi-s-solution-items").length > 0 && $(window).scrollTop() > ($(".taxi-s-solution-items").offset().top) - 400) {

		$('.taxi-s-solution-items .taxi-s-solution-item').each(function (i) {
			$(this).delay((i++) * 300).fadeTo(1000, 1);
		})
	}


	if ($(".taxi-app-for-passenger-items").length > 0 && $(window).scrollTop() > ($(".taxi-app-for-passenger-items").offset().top) - 400) {
		$('.taxi-app-for-passenger-items .taxi-app-for-passenger-item').each(function (i) {
			$(this).delay((i++) * 300).fadeTo(1000, 1);
		})
	}


	if ($(".taxi-fourth-bottom-items").length > 0 && $(window).scrollTop() > ($(".taxi-fourth-bottom-items").offset().top) - 400) {
		$('.taxi-fourth-bottom-items .taxi-fourth-bottom-item').each(function (i) {
			$(this).delay((i++) * 300).fadeTo(1000, 1);
		})
	}
});




$(window).resize(function () {
	createMobileTaxiSlider();
});

function createMobileTaxiSlider() {


	if ($(window).width() <= 767) {


		if (!($('.taxi-app-for-passenger-items-slider').is('.slick-slider'))) {

			$('.taxi-app-for-passenger-items-slider').slick({
				infinite: false,
				slidesToShow: 1,
				arrows: false,
				dots: false,
				prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
				nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
				responsive: [
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1,
						}
					}
				]
			});
		}



		if (!($('.taxi-fourth-bottom-items-slider').is('.slick-slider'))) {

			$('.taxi-fourth-bottom-items-slider').slick({
				infinite: false,
				slidesToShow: 1,
				arrows: false,
				dots: false,
				prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
				nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
				responsive: [
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1,
						}
					}
				]
			});
		}

	} else {

		if ($('.taxi-app-for-passenger-items-slider').is('.slick-slider')) {
			$('.taxi-app-for-passenger-items-slider').slick('unslick');
		}

		if ($('.taxi-fourth-bottom-items-slider').is('.slick-slider')) {
			$('.taxi-fourth-bottom-items-slider').slick('unslick');
		}

	}
}


// Определяем переменную map
var map;

// Функция initMap которая отрисует карту на странице
function initMap() {
	// В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
	if ($('#map').length > 0) {

		var map = new google.maps.Map($('#map')[0], {
			zoom: 5,
			center: new google.maps.LatLng(55.086535, 32.776353),
			scrollwheel: false
		});
	}




	// Add a marker
	var marker = new google.maps.Marker({
		map: map,
		position: new google.maps.LatLng(55.805782, 37.594875),
		icon: 'img/svg/pin.svg'
	});
	var marker2 = new google.maps.Marker({
		map: map,
		position: new google.maps.LatLng(53.907693, 27.549672),
		icon: 'img/svg/pin.svg'
	});
}




function sendMail() {
	$('#Name').on('focus', function () {
		$(this).css('border-bottom', '1px solid #303030');
	});
	$('#Phone').on('focus', function () {
		$(this).css('border-bottom', '1px solid #303030');
	});


	$('#BtmSend').click(function () {
		var data = {};
		data.name = $('#Name').val();
		data.phone = $('#Phone').val();
		data.msg = $('#Message').val();

		if (!data.name) {
			$('#Name').css('border-bottom', '1px solid red');
			return;
		}

		if (!data.phone) {
			$('#Phone').css('border-bottom', '1px solid red');
			return;
		}

		var regName = /^[A-Za-zА-Яа-я ]+$/i
		var regMsg = /^[A-Za-zА-Яа-я0-9,. \(\)\-\"\'?!]+$/i

		if (!regMsg.test(data.msg)) {
			$('#Message').css('border', '1px solid red');
			return;
		}

		if (!regName.test(data.name)) {
			$('#Message').css('border-bottom', '1px solid red');
			return;
		}


		var formData = new FormData();
		formData.append("name", data.name);
		formData.append("phone", data.phone);
		formData.append("msg", data.msg);
		formData.append("recaptcha_token", $.cookie('recaptcha_token'));

		$.ajax({
			url: 'http://app.uxt-02.net-fi.com:9099/',
			type: 'POST',
			data: formData,
			processData: false,
			contentType: false,
			beforeSend: function () {
				$.fancybox.open({
					src: '#popup-success'
				});
			}
		});


	})
}