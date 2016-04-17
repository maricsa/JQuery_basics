$(document).ready(function(){
    console.log("document is ready");


	var x = function(){
		$('#header1').animate({
			letterSpacing: '30px'}, 3000);
	};

	var y = function(){
		$('#a').fadeIn(5000);
	};

	$('#a').fadeOut(2000);
	$('#b').fadeOut(3000);
	$('#c').fadeOut(4000);
	$('#a').fadeIn(6000);
	$('#b').fadeIn(7000);
	$('#c').fadeIn(8000);
	$('#header1').animate({
		letterSpacing: '30px'}, 2000, x);

	$('#header2').click(function(){
	     $('p2').toggle();
	});

	$('#div1').on("click", function(){
		$('p1').fadeOut(2000);
	});
	$('#header1').css({
        "color":"blue",
        "font-size":"4em"
    });
	$('#header2').css({
        "color":"green",
        "font-size":"2em"
    });
	$('#a').css({
		"color":"red",
        "font-size":"2em"
	});
	$('#b').css({
		"color":"pink",
        "font-size":"3em"
    });

     $('#c').css({
		"color":"yellow",
        "font-size":"4em"
    });
     $('p1').css({
		"color":"red",
        "font-size":"4em"
    });
     $('p2').css({
		"color":"blue",
        "font-size":"4em"
    });
});








