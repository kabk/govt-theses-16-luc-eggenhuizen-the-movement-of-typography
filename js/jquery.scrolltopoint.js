$(window).scroll(function(){

	if (window.matchMedia && window.matchMedia("(max-width: 768px)").matches) {
	    
	    // $(".chaptertitle1").css("top,Math.max(29, 990 -$(this).scrollTop()));
	    // You can put the same kind of code here as well but then for smaller screens

	} else {

	    $(".chaptertitle1").css("top",Math.max(128, 970-$(this).scrollTop()));

	    $(".chaptertitle2").css("top",Math.max(154, 2147-$(this).scrollTop()));

	    $(".chaptertitle3").css("top",Math.max(232, 7952-$(this).scrollTop()));

	    $(".chaptertitle4").css("top",Math.max(284, 14376-$(this).scrollTop()));

	    $(".chaptertitle5").css("top",Math.max(336, 18056-$(this).scrollTop()));

	    $(".chaptertitle6").css("top",Math.max(414, 22030-$(this).scrollTop()));

	    $(".chaptertitle7").css("top",Math.max(466, 26474-$(this).scrollTop()));

	    $(".chaptertitle8").css("top",Math.max(518, 31878-$(this).scrollTop()));

	    $(".chaptertitle9").css("top",Math.max(622, 33824-$(this).scrollTop()));
	    
	    $(".chaptertitle10").css("top",Math.max(648, 38493-$(this).scrollTop()));

	    $(".chaptertitle11").css("top",Math.max(674, 39217-$(this).scrollTop()));

	    $(".chaptertitle12").css("top",Math.max(700, 39603-$(this).scrollTop()));


	}
});

