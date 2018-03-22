$(document).ready(function(){

	function accordion(){
		$(".example-accordion").accordion();
	}

	function mobileMenu(){
		$(".close, .hamburger").click(function(e){
			e.preventDefault();
			$('nav').toggleClass('opened');
		});
	}

	function smoothScroll(){
		var scroll = new SmoothScroll('.navigation a[href*="#"], p a[href*="#"]', {
			speed: 500, // How fast to complete the scroll in milliseconds
			offset: 0, // If you have a sticky nav, it may overlap part of the destination. Add the height of your header here in pixels
		});
	}

	function popup(){
		$('#magnific-popup').magnificPopup({
		  items: {
		      type: 'inline',
					src: '#test-popup',
		  }
		});
	}

	function photoGallery(){
		$('.popup-gallery a').magnificPopup({
			type: 'image',
			gallery:{
				enabled:true
			}
		});
	}

	function flexSlider(){
		$('.flexslider').flexslider({
	    animation: "slide"
	  });
	}

	accordion();
	mobileMenu();
	smoothScroll();
	popup();
	photoGallery();
	flexSlider();
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 160) {
        $('.back-to-top').fadeIn();
    } else {
        $('.back-to-top').fadeOut();
    }
});
