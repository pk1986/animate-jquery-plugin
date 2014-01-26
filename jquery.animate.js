/*
	jquery.animate
	@version 1.0.0
	@author Giovanni Luca Murabito
	@homepage: http://digiapps.it
	@date 26/01/2014
*/


// Source: ./source/jquery.animate.click.js

(function ($) {
	$.fn.animateClick = function ( animation ) {
		element = $(this);
		var classAdded = false;
		element.click (
			function() {
				if (!element.hasClass('animated ' + animation)) {
					element.addClass('animated ' + animation);  
				} 
			}
			, function(){
				window.setTimeout( function(){
					element.removeClass('animated ' + animation);
				}, 1); 
			}
		);
	};
}( window.jQuery ));


// Source: ./source/jquery.animate.hover.js

(function ($) {
	$.fn.animateHover = function ( animation ) {
		element = $(this);
		var classAdded = false;
		element.hover (
			function() {
				if (!element.hasClass('animated ' + animation)) {
					element.addClass('animated ' + animation);  
				} 
			}
			, function(){
				window.setTimeout( function(){
					element.removeClass('animated ' + animation);
				}, 1); 
			}
		);
	};
}( window.jQuery ));