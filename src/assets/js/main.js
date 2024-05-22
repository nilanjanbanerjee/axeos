(function ($) {
	"use strict";

    $(document).ready(function($){
		
		

        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
		
		

		//Fixed nav on scroll
		$(document).on('scroll',function(){
			var scrollTop = $(document).scrollTop();
			if(scrollTop > $('nav').height()){
				$('.btco-hover-menu').addClass('navbar-fixed-top');
				$('#logo').attr('src', 'images/logo-2.png');
			}
			else {
				$('.btco-hover-menu').removeClass('navbar-fixed-top');
				$('#logo').attr('src', 'images/logo-1.png');
			}
		});
		
		//Search
		$("#addClass").on('click',function () {
          $('#qnimate').addClass('popup-box-on');
        });
          
        $("#removeClass").on('click',function () {
          $('#qnimate').removeClass('popup-box-on');
        });
		
		
		
		//Testimonial
		$('.testimonials-cont').owlCarousel({
                loop: true,
                margin: 30,
                responsiveClass: true,
                responsive: {
                  0: {
                    items: 1,
                    nav: false
                  },
                  600: {
                    items: 1,
                    nav: false
                  },
                  1000: {
                    items: 1,
                    nav: false,
                 
                  }
                }
		});

        
		
		//Portfolio Popup
		$('.magnific-popup').magnificPopup({type:'image'});
		
		


    });


    $(window).on('load',function(){
		
		//Preloader
		$('.preloader').delay(200).fadeOut('slow');
		$('body').delay(200).css({'overflow':'visible'});
		
		//Portfolio container			
		var $container = $('.portfolioContainer .row');
		$container.isotope({
			filter: '*',
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			}
		});
 
		$('.portfolioFilter a').on('click', function(){
			$('.portfolioFilter a').removeClass('current');
			$(this).addClass('current');
	 
			var selector = $(this).attr('data-filter');
			$container.isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			 });
			 return false;
		}); 
		
		
		//WOW js
		new WOW().init();
        
    });
	

}(jQuery));	