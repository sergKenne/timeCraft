window.addEventListener('resize', function () {
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  if (viewportWidth < 1025) {
    location.reload();
  }
}, false);

jQuery(document).ready(function($) {

	var navbar = document.getElementById("nav-bar");
	var sticky = navbar.offsetTop;
	var width  = window.outerWidth;

	function myFunction() {
	  if( width > 768) {
	  	  if (window.pageYOffset >= sticky) {
		  	navbar.classList.add("js-fixed")
		  } else {
		  	navbar.classList.remove("js-fixed");
		  }
	  }	
	 
	}

	window.onscroll = myFunction;


	var arr = document.getElementById('js-sub-currency').children;
	for(var i=0; i<arr.length; i++) { 
		arr[i].addEventListener('click', function(e) {
			var result = e.target.innerHTML;
			document.getElementById('current-devise').innerHTML = result;
		 
		});
	}



	//toggle nav-bar
	$('#js-bars').click(function() {
		$('#js-cell-bars').toggle();
	});


	$('#js-currency').click(function() {
		$('#js-sub-currency').toggle();

		if( $('#js-sub-currency').is(':visible') ) {
			$(this).find('.fa-angle-down').addClass('js-rotate');
		} else {
			$(this).find('.fa-angle-down').removeClass('js-rotate');
		}
	});


	if( width > 768 ) {

		//toggle search form for navbar
		$('#nav-search').click(function() {
			$('#nav-form').fadeToggle();
		});

		$('#js-sub-currency li').click(function() {
			 $('#js-currency').find('.fa-angle-down').removeClass('js-rotate');
			 $(this).parent('ul').hide();
		});

	}// end of if desktop

	//show menu for mobile

	if( width <= 768) {
		$("#js-hidden-Bar").click(function(){
			$('#js-wrap-item').fadeToggle('fast');

			if( $('#js-wrap-item').is(':visible') ) {
				$(this).find('.fa-angle-down').addClass('js-sub-icon');
				//$(this).find('.angle-header').addClass('js-icon-header');
				$(this).find('.angle-header').removeClass('js-sub-icon');
			} else {
				$(this).find('.fa-angle-down').removeClass('js-sub-icon');
				//$(this).find('.angle-header').addClass('js-icon-header');
				$(this).find('.angle-header').removeClass('js-sub-icon');
			}
		});

		$('#js-nav-sub').click(function() {
			$('.nav-menu__sub-list').toggle();

			if( $('.sub-nav').is(':visible') ) {
				$(this).addClass('js-sub-icon');
				$(this).closest('.nav-menu__link').css({color:"#000"});
			}else {
				$(this).removeClass('js-sub-icon');
				$(this).closest('.nav-menu__link').css({color:"#000"});
			}
			
		});


		$('.js-sub-title').click(function(even){
			//console.log(even.target);
			$(this).parent().next().toggle();

			if( $('.js-elt-list').is(':visible') ) {
				$(this).addClass('js-sub-icon');
			}else {
				$(this).removeClass('js-sub-icon');
			}

		});

	}//end of if mobile
	

	//swiper slider

	var slidesPerView = (width<=768)? 3:4; 
	
    var swiper = new Swiper('.swiper-container', {
	      slidesPerView: slidesPerView,
	      speed: 400,
	      spaceBetween: 30,
	      slidesPerGroup: 1,
	      loop: true,
	      loopFillGroupWithBlank: true,
	      pagination: {
	        el: '.swiper-pagination',
	        clickable: true,
	      },
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	      },
    });


}); //end of ready 