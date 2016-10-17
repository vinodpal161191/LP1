
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