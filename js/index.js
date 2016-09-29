// $("document").ready(function(){

// // I'm trying to make it so that the background image for each actor expands when you click on the div, but I'm not figuring out how to make it work =(
// 	$(".blurb").click(toggleImage);

// 	function toggleImage(){
// 		$(this).addClass("toggle");
// 		$(".toggle").slideToggle(); 
// 	}

// 	// $("nav li:first-of-type").click(function(){
// 	// 	$(this).parent().toggleClass("open");
// 	// }

// })

$("document").ready(function(){
	$(".sub-blurb").hide();
	

//**Event Listeners**
	$("document").ready(main);

    $(".blurb").click(toggleImage);

    $("nav li:first-of-type").click(openMenu);


//**Functions**
	function main(){
		// Hides all h2 headers at startup
		$("h2").hide();
		$("h4").hide();
		// Fades all h2 headers in
		$("h2").fadeIn(2000);
		$("h4").fadeIn(2000);
	}

    function toggleImage(){
    	// Hides all .sub-blurbs
    	$(".sub-blurb").hide();

    	// Removes class "toggle" of all .blurb's
    	$(".blurb").removeClass("toggle");

    	// Selects current h2 and adds "toggle" class
        $(this).toggleClass("toggle");
        // $(this).addClass("toggle");
        // $(this).slideToggle(400);

        // Selecting current h2 and finds closest following ".sub-blurb"
        $(this).find(".sub-blurb").show();
    }

    function openMenu(){
     $(this).parent().toggleClass("open");
    }

})