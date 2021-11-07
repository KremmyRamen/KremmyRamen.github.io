$(document).ready(function() {
        
        $("#image_list a").each(function() {

  			var imgURL = $(this).attr("href");
  			var linkCaption = $(this).attr("title");

  			// preload the image for each link
  			var galleryImg = new Image();
  			galleryImg.src = imgURL;

        // set up the event handlers for each link
        	$(this).click(function(evt){

    			// get the image URL and caption for each image and animate the caption
    			$("#image").fadeOut(3000, function() {
    				$("#image").attr("src", imgURL);
    				$("#image").fadeIn(3000);
    			});

    			$("#caption").fadeOut(3000, function(){
    				$("#caption").text(linkCaption);
    				$("#caption").fadeIn(3000);
            		$("#caption").animate({fontSize: "2.0em"}, 3000);
    			});
  
          	// cancel the default action of each link
            evt.preventDefault();
        	});
 		});

    // move the focus to the first link
	$("li:first-child a").focus();
}); // end ready