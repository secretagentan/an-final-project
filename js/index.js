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

    $("nav li:first-of-type").click(openMenu)


//**Functions**
	function main(){
		$("h2").hide();
		$("h2").fadeIn(2000);
	}

    function toggleImage(){
        $(this).toggleClass("toggle");
        $(".sub-blurb").show();
    }

    function openMenu(){
     $(this).parent().toggleClass("open");
    }

})