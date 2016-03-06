  $(document).ready(function() { 


	  $('.incfont').click(function(){    
	        curSize= parseInt($('p').css('font-size')) + 1;
		  if(curSize<=22)
	        $('p').css('font-size', curSize);
	  });
	  
	  $('.decfont').click(function(){    
	        curSize= parseInt($('p').css('font-size')) - 1;
			if(curSize>=16)
				 $('p').css('font-size', curSize);

	 }); 

/*--------------------| THE CODE FOR CHANGING SIZE FONT!!! |---------------*/


	$('#ligature-switch').switchButton({
		on_label: "CONTEXTUAL ALTERNATES ON",
		off_label: "CONTEXTUAL ALTERNATES OFF"		
	});

	$("#ligature-switch").change( function(){

	    if($(this).is(':checked')) {
	        $("p").css("font-variant-ligatures", "common-ligatures");
	    } else {
	        $("p").css("font-variant-ligatures", "inherit");
	    }

	});


	$('#footer-switch').switchButton({
		on_label: "FOOTNOTES OFF",
		off_label: "FOOTNOTES ON"
 
	});

	$("#footer-switch").change( function(){

	    if($(this).is(':checked')) {

	        $(".drop").css({
	        	"display": "none"
	        });

	    } else {

	        $(".drop").css({
	        	"display": "block",
	        	"width": "40%",
	        });	    }

	});

});




/*---------------scroll and appear menu-------------------------------*/

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 700) {
        $('#menu').fadeIn(300);
    } else {
        $('#menu').fadeOut(300);
    }

});

/*---------------scroll and appear options-------------------------*/

$(document).scroll(function () {

    var y = $(this).scrollTop();
    if (y > 700) {
        $('#options').fadeIn(300);
    } else {
        $('#options').fadeOut(300);
    }

});

/*---------------animate headers-------------------------------*/

$(document).ready(function () {

	    function repeat() {

	        $('.TEMPORAL').animate({
	        left: '26%'
	    }, 600);
	    $('.TEMPORAL').delay(600).animate({
	        left: '-100%'
	    }, 600);
	    $('.RANDOM').delay(1000).animate({
	        left: '36%'
	    }, 600);
	    $('.RANDOM').delay(600).animate({
	        left: '-100%'
	    }, 600);
	    $('.INTERACTIVE').delay(2000).animate({
	        left: '4%'
	    }, 600);
	    $('.INTERACTIVE').delay(600).animate({
	        left: '-100%'
	    }, 600);
	    $('.FLUID').delay(3000).animate({
	        left: '54%'
	    }, 600);
	    $('.FLUID').delay(600).animate({
	        left: '-100%'
	    }, 600);
	    $('.RESPONSIVE').delay(4000).animate({
	        left: '11%'
	    }, 600);
	    $('.RESPONSIVE').delay(600).animate({
	        left:'-100%'
	    },600 ,function() {
	            repeat();    	

	        });
	    }
	    
	 repeat();       
	        
	    
	                  
});

