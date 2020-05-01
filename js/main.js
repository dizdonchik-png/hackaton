(function($) {

	"use strict";

	/*---------------------------------------------------- */
	/* Preloader
	------------------------------------------------------ */ 
   $(window).load(function() {
    	$("#loader").fadeOut("slow", function(){
        $("#preloader").delay(300).fadeOut("slow");

      });       

  	})




	/*----------------------------------------------------*/
  	/* Smooth Scrolling
  	------------------------------------------------------*/
  	$('.smoothscroll').on('click', function (e) {
	 	
	 	e.preventDefault();

   	var target = this.hash,
    	$target = $(target);

    	$('html, body').stop().animate({
       	'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
      	window.location.hash = target;
      });

		});  	

})(jQuery);