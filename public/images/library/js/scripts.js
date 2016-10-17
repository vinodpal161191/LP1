// Begin FlexSlider 
jQuery(window).load(function() {
  jQuery('.flexslider').flexslider({
    animation: "slide",
    slideshow: true,
    animationLoop: true,
    directionNav: true,
    controlNav: false,
    controlsContainer: ".controls",
    //useCSS : false
  });
}); 
// End FlexSlider

// All site-specific js is in here!
jQuery(document).ready(function($) {

  // Assign correct parent to Portfolio custom post type
  if (jQuery("body").is(".single-fhoke_portfolio, .page-template-fhoke_portfolio-php")) {
    jQuery("li#menu-item-17").removeClass("current_page_parent");
    jQuery("li#menu-item-46").addClass("current_page_parent");
  }
  
  // Contact //
  if (jQuery("body").is(".page-template-contact-php")) {
	  jQuery(function() {
	      if ( document.location.href.indexOf('#thanks') > -1 ) {
	          jQuery('.overlay-container').delay(300).fadeIn();
	          jQuery('.overlay-form').fadeIn();
	          jQuery('.overlay-form').html("<h2>THANKS</h2><p>We'll be in touch shortly.</p><a class='overlay-close button' href='#'>Close</a>");
	      }
	  });
	  jQuery('a.overlay-close').live("click", function(event){
	  	event.preventDefault();
	      jQuery('.overlay-container, .overlay-form').fadeOut();
  });
  }
  
  // End Contact
  
  // Portfolio //
  
  
  
  
   var $container = jQuery('#portfolio-list');
   // initialize isotope
   $container.isotope({
  	 layoutMode : 'fitRows',
       animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: true
          }
   });
   
   
   
   
   
   // filter items when filter link is clicked
   jQuery('#portfolio-filter a').click(function(){
     var selector = $(this).attr('data-filter');
     $container.isotope({ filter: selector });
     return false;
   });
   
  
   
  	// update active state for filter clicked
   jQuery('#portfolio-filter a li').click(function (e) {
   		e.preventDefault();
           jQuery('#portfolio-filter a li').removeClass("selected");
           jQuery(this).addClass("selected");
   });
  
  // End Portfolio
  
  // small tweak for Firefox form fields
  if (navigator.userAgent.match(/Firefox/i)) {
  	jQuery('body').addClass("ff");
  }
  
  // small tweak for Chrome project button height
  if (navigator.userAgent.match(/Chrome/i)) {
  	jQuery('body').addClass("chrome");
  }


  // Immediately Grab viewport width
  var responsive_viewport = $(window).width();


  // All Pages //
  if (responsive_viewport >= 768) {

    jQuery(window).scroll( function() {
      var value = $(this).scrollTop();
      if ( value > 100 )
          jQuery("header.header").addClass("brdr");
      else
          jQuery("header.header").removeClass("brdr"); 
      });

    // Div Toggles
    jQuery("#nav-drop").css("#nav-drop", "display: block !important;"); 
    jQuery("a.trigger-nav").removeClass("active");

    jQuery("a.trigger-nav").click(function(){
      jQuery(this).toggleClass("active");
      jQuery(this).parents().next("#nav-drop").slideToggle('fast');
    return false; });

    // Dropkick for 'select' menus
    $('.gfield_select').dropkick();

    // Scrolling Functions //
    if (jQuery("body").is(".home, .page-template-about-php, .page-template-contact-php")) {
      jQuery(window).scroll( function() {
        var value = $(this).scrollTop();
        if ( value > 100 )
          jQuery("#lead").addClass("read");
        else
            jQuery("#lead").removeClass("read");
        });
    }

    // Home //
    if (jQuery("body").is(".home")) {

      

      $(function() {$('#tabwrap').tabs({ fxFade: true, fxSpeed: 'fast' }); });

    }



    // Portfolio //
    /* if (jQuery("body").is(".page-template-fhoke_portfolio-php")) {

      jQuery(".portfolio-item").addClass("show");
    
      jQuery("#portfolio-filter a").click(function(e){
        e.preventDefault();
        var type = $(this).attr("href").replace("#", "");
        jQuery(".portfolio-item").removeClass("show");
        jQuery(".portfolio-item." + type).addClass("show");
        jQuery("#portfolio-filter a li").removeClass("selected");
        jQuery(this).children("li:first").addClass("selected");
      });
    
      // End Portfolio Filtering
    }
	*/
	
	
	
	

    // Services //
    if (jQuery("body").is(".page-template-services-php")) {
      var offsetBy = -185; //Integer; negative = above, positive = below
      
      $("#portfolio-filter a").click(function(e){
        e.preventDefault();
        $("#portfolio-filter a li").removeClass("selected");
        jQuery(this).children("li:first").addClass("selected");
        var sectionId = $(this).attr("href");
        var finalYPos = $(sectionId).offset().top + offsetBy;
        $(window).scrollTo({'top': finalYPos + 'px'}, 800, {'axis': 'y'});
      });
    }



    // Blog //
    if (jQuery("body").is(".blog, .single, .archive, .search")) {

      // Div Toggles
      jQuery("#categories").hide(); 
      jQuery("a.trigger").removeClass("active");

      jQuery("a.trigger").click(function(){
        jQuery(this).toggleClass("active");
        jQuery(this).parents().next("#categories").slideToggle('fast');
      return false; });
    }



    // Blog > Single //
    if (jQuery("body").is(".single-post")) {

      jQuery(window).scroll( function() {
        var value = $(this).scrollTop();
        if ( value > 300 )
            jQuery("ul#post-share").addClass("fixed");
        else
            jQuery("ul#post-share").removeClass("fixed"); 
      });

      jQuery(window).scroll( function() {
        var value = $(this).scrollTop();
        if ( value > 300 )
            jQuery(".entry-content").addClass("padding");
        else
            jQuery(".entry-content").removeClass("padding"); 
      });
    }



    // Contact (Google Map) //
    if (jQuery("body").is(".page-template-contact-php")) {

      // Google Maps
      // Creating a LatLng object containing the coordinate for the center of the map
      var latlng = new google.maps.LatLng(51.139259, -1.587404);

      // Creating an object literal containing the properties we want to pass to the map
      var options = {
        zoom: 12, // This number can be set to define the initial zoom level of the map
        center: latlng,

        streetViewControl: false,

        panControl: true,
        panControlOptions: {
            position: google.maps.ControlPosition.TOP_LEFT
        },

        mapTypeControl: true,
        mapTypeControlOptions: {
          style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR
        },

        zoomControlOptions: {
          style: google.maps.ZoomControlStyle.SMALL
        },

        scaleControl: false,

        mapTypeId: google.maps.MapTypeId.ROADMAP // This value can be set to define the map type ROADMAP/SATELLITE/HYBRID/TERRAIN
      };
      // Calling the constructor, thereby initializing the map
      var map = new google.maps.Map(document.getElementById('map_div'), options);

      // Define Marker properties
      var image = new google.maps.MarkerImage('/wp-content/themes/fhoke2012/library/images/fhoke-map-icon.png',
        // This marker is 129 pixels wide by 42 pixels tall.
        new google.maps.Size(455, 670),
        // The origin for this image is 0,0.
        new google.maps.Point(0,0),
        // The anchor for this image is the base of the flagpole at 18,42.
        new google.maps.Point(18, 42)
      );

      // Add Marker
      var marker1 = new google.maps.Marker({
        position: new google.maps.LatLng(51.138459,-1.588556),
        map: map,
        icon: image // This path is the custom pin to be shown. Remove this line and the proceeding comma to use default pin
      });

      // Add listener for a click on the pin
      google.maps.event.addListener(marker1, 'click', function() {
        infowindow1.open(map, marker1);
      });

       // Create information window
      function createInfo(title, content) {
        return '<div class="infowindow"><strong>'+ title +'</strong>'+content+'</div>';
      };

      // Add information window
      var infowindow1 = new google.maps.InfoWindow({
        content:  createInfo('FHOKE', 'Crest House, Middle Wallop, Stockbridge, Hampshire, S020 8EG')
      });


    // Begin Slider
      $(function(){
        $.fn.fhokeSlider = function(options){
          
          var defaults = {
            speed: 800,
            navigation: "#navigation",
            child_items: "section",
            wrapper: "#sliding-panel-wrapper",
            otherProjectStartElems: "#start-a-project"
          };
          
          return this.each(function(){
            
            var opts = $.extend(options, defaults);
            
            var container = $(this);
            var wrapper = $(opts.wrapper);
            var nav = $(opts.navigation).find("a");
            var items = $(container).children(opts.child_items);
            var width = $(container).width();
            var previousElementHeight = $(items[0]).outerHeight();
            var heightCheckInterval = null;
            var current_slide = 0;
            var previousHash = "";
            
            var $animating = false;
            
            var clickNav = function(href){
              $(nav).each(function(){
                if ($(this).attr("href") == href){
                  $(this).click();
                  return false;
                }
              });
            };
            
            var init = function(){
              $(wrapper).css({
                "overflow": "hidden"
              });
              $(items).css({
                "float": "left",
                "width": width + "px"
              });
              $(container).css({
                "width": (width * items.length) + "px",
                "height": $(items[0]).outerHeight() + "px",
                "overflow": "hidden"
              });
              heightCheckInterval = setInterval(checkElementHeight, 100);
              setInterval(checkHash, 50);
            };
            
            var checkHash = function(){
	            if (window.location.hash != previousHash && window.location.hash == "#project-planner"){
	            	previousHash = window.location.hash;
	              	var btn = $(opts.navigation + " a[href='#project-planner-form']:first");                
	                setTimeout(function(){ 
	                  $(btn).click();
	                  //$(window).scrollTo({'top': 500}, 800, {'axis': 'y'});
	                }, 200);
	              }
            };
            
            var checkElementHeight = function(){
	            if ($(items[current_slide]).outerHeight() != previousElementHeight){
	            	previousElementHeight = $(items[current_slide]).outerHeight();
		            $(container).animate({
			            height: previousElementHeight + "px"
		            }, opts.speed);
	            }
            };
            
            $(opts.otherProjectStartElems).click(function(e){
            	e.preventDefault();
            	$(opts.navigation + " a[href='#project-planner-form']:first").click();
            });
            
            $(nav).click(function(e){
              e.preventDefault();
              if (!$animating){
              
                $animating = true;
                clearInterval(heightCheckInterval);
                $(nav).removeClass("selected");
                $(this).addClass("selected");
                
                var $id = $(this).attr("href").replace("#", "");
                var $show_slide = 0;
                
                $(items).each(function(i){
                  if ($(this).attr("id") == $id){
                    $show_slide = i;
                    return false;
                  }
                });
                
                $(container).animate({
                  marginLeft: "-" + ($show_slide * width) + "px",
                  height: $(items[$show_slide]).outerHeight() + "px"
                }, opts.speed);
                
                setTimeout(function(){
                  $animating = false;
                  current_slide = $show_slide;
                  heightCheckInterval = setInterval(checkElementHeight, 100);
                }, opts.speed);
              
              }             
            });
            
            init();
            
          });
          
        }
      });
      
      $(function(){
        $("#contact-sliding-panel").fhokeSlider({
          speed: 500,             //Time in ms
          navigation: "#navigation",      //Navigation holder (don't include 'a' - searches for <a> tags)
          child_items: "section",         //Child elements of the 'slider' - just use <div> or <section>, generally
          wrapper: "#sliding-panel-wrapper" //The wrapper element - you need a wrapper to the slider with an explicit width set somewhere
        });
      }); //End Slider
    }

  }// End of iPad+ js


  
  // IPHONE
  if (responsive_viewport <= 481) {

    // Div Toggles
    jQuery("#nav-drop, .minus").hide(); 

    jQuery("a.trigger-nav").click(function(){
      jQuery(".border").toggleClass("active");
      jQuery(this).parents().next("#nav-drop").slideToggle('fast');
    return false; });

    jQuery(function(){
        jQuery(".portfolio-item").addClass("show");

        jQuery("#portfolio-filter li a").click(function(e){
          e.preventDefault();
          var type = $(this).attr("href").replace("#", "");
          jQuery(".portfolio-item").removeClass("show");
          jQuery(".portfolio-item." + type).addClass("show");
          jQuery("#portfolio-filter li a").removeClass("selected");
          jQuery("#portfolio-filter li a[href='#" + type + "']").addClass("selected");
        });
      });

    function border() {
      if (jQuery(window).scrollTop() >= (jQuery('header.header').position().top - 200)) {
        jQuery('header.header').removeClass('brdr');
      } else {
        jQuery('header.header').removeClass('brdr');
      }

      // Update
      jQuery(window).on('scroll', function(e) {
        border();
      });
    }

    // Scrolling Functions //
    if (jQuery("body").is(".home, .page-template-about-php, .page-template-contact-php")) {
      jQuery(window).scroll( function() {
        var value = $(this).scrollTop();
        if ( value > 200 )
            jQuery(".img-bg").addClass("hide");
        else
            jQuery(".img-bg").removeClass("hide");
      });
    }

    // Portfolio //
    /* if (jQuery("body").is(".page-template-fhoke_portfolio-php")) {

      jQuery(".portfolio-item").addClass("show");
    
      jQuery("#portfolio-filter a").click(function(e){
        e.preventDefault();
        var type = $(this).attr("href").replace("#", "");
        jQuery(".portfolio-item").removeClass("show");
        jQuery(".portfolio-item." + type).addClass("show");
        jQuery("#portfolio-filter a li").removeClass("selected");
        jQuery(this).children("li:first").addClass("selected");
      });
    
      // End Portfolio Filtering
    } */

  } // End of mobile js

}); // End of page load scripts



/*! A fix for the iOS orientationchange zoom bug.
 Script by @scottjehl, rebound by @wilto.
 MIT License.
*/
(function(w){
	// This fix addresses an iOS bug, so return early if the UA claims it's something else.
	if( !( /iPhone|iPad|iPod/.test( navigator.platform ) && navigator.userAgent.indexOf( "AppleWebKit" ) > -1 ) ){ return; }
    var doc = w.document;
    if( !doc.querySelector ){ return; }
    var meta = doc.querySelector( "meta[name=viewport]" ),
        initialContent = meta && meta.getAttribute( "content" ),
        disabledZoom = initialContent + ",maximum-scale=1",
        enabledZoom = initialContent + ",maximum-scale=10",
        enabled = true,
		x, y, z, aig;
    if( !meta ){ return; }
    function restoreZoom(){
        meta.setAttribute( "content", enabledZoom );
        enabled = true; }
    function disableZoom(){
        meta.setAttribute( "content", disabledZoom );
        enabled = false; }
    function checkTilt( e ){
		aig = e.accelerationIncludingGravity;
		x = Math.abs( aig.x );
		y = Math.abs( aig.y );
		z = Math.abs( aig.z );
		// If portrait orientation and in one of the danger zones
        if( !w.orientation && ( x > 7 || ( ( z > 6 && y < 8 || z < 8 && y > 6 ) && x > 5 ) ) ){
			if( enabled ){ disableZoom(); } }
		else if( !enabled ){ restoreZoom(); } }
	w.addEventListener( "orientationchange", restoreZoom, false );
	w.addEventListener( "devicemotion", checkTilt, false );
})( this );