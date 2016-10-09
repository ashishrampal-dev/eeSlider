/*
Plugin: eeSlider
Author: Ashish Rampal
Version: 1.0
License: OpenGL
*/

(function($){
	$.fn.eeSlider = function(options){
		var settings = $.extend({
			width: 1000,
			height: 400
		}, options);
		
		$(this).each(function(i, el) {
            var base = el, $base = $(el);
			
			base.init = function(){
				
				// needed variables
				
				
				base.setCSS();
			}
			
			base.setCSS = function(){

				// Remove Scroll from the $base
				$base.css({overflow: "hidden"});

				// Set the width and height of eeSlider
				$base.css({width: settings.width + "px", height: settings.height + "px"});

				// Set the width and height of slides equal to eeSlider
				$base.find(".slide").css({width: settings.width + "px", height: settings.height + "px"});
				
				//alert("running");
				$base.wrapInner("<div class='eeSlider-inner-wrap'></div>");

			}
			
			base.init();
			
        });
	
		

	};
})(jQuery);