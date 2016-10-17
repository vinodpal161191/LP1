jQuery(document).ready(function() {



	
	 jQuery("#location,#header-location").geocomplete()
          .bind("geocode:result", function(event, result){
            jQuery.log("Result: " + result.formatted_address);
          })
          .bind("geocode:error", function(event, status){
            jQuery.log("ERROR: " + status);
          })
          .bind("geocode:multiple", function(event, results){
            jQuery.log("Multiple: " + results.length + " results found");
          });
        
        jQuery("#find").click(function(){
          jQuery("#location,#header-location").trigger("geocode");
        });
        
        
        jQuery("#examples a").click(function(){
          jQuery("#location,#header-location").val(jQuery(this).text()).trigger("geocode");
          return false;
        });
	
});