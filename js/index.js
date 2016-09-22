$("document").ready(function(){

// I'm trying to make it so that the background image for each actor expands when you click on the div, but I'm not figuring out how to make it work =(
	$(".blurb").click(toggleImage);

	function toggleImage(){
		$(this).addClass("toggle");
		$(".toggle").slideToggle(); 
	}

	// $("nav li:first-of-type").click(function(){
	// 	$(this).parent().toggleClass("open");
	// }

})