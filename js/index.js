$("document").ready(function(){

	$(".blurb").click(toggleImage);
	
	function toggleImage(){
		$(this).addClass("toggle");
		$(".toggle").slideToggle(); 
	}

	$("nav li:first-of-type").click(function(){
		$(this).parent().toggleClass("open");
	}

})