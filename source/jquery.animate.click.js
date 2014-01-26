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