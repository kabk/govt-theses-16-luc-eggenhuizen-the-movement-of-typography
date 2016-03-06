$(window).scroll(function(){

	if (window.matchMedia && window.matchMedia("(max-width: 768px)").matches) {
	    
	    // $(".chaptertitle1").css("top",Math.max(29, 990 -$(this).scrollTop()));
	    // You can put the same kind of code here as well but then for smaller screens

	} else {

	    $(".chaptertitle1").css("top",Math.max(128, 970 -$(this).scrollTop()));


	    $(".chaptertitle2").css("top",Math.max(154, 2097-$(this).scrollTop()));

	}
});

