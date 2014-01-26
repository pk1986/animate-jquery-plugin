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