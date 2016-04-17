//JQ Cheat Sheet

//To check to see if a library is loaded.
$(document).ready(
	function()
	{ alert('The document is ready');   
// selecting the elemnent from html file:
$("<element name, class, id, or XPath>")

// examples:
$("#header");
$("ul li");

//Anonymous functions can be stored in variables.(often used in callbacks)
function(){   
	alert("I am anonymous!")
 };

/* Declare a regular or anonymous function that takes another
 function as an argument, does something, 
 then runs that other function */
function someRunner(anyFunction){ 
 	console.log(2+2); 
 	anyFunction(); 
 };

 //JQuery methods:

    $('body').hide(); //will hide the element
    $('body').show(); //will show the element
    $('body').toggle(); 
    $('#header').fadeOut(); //will fade out the element
    $('#header').fadeIn(1000); // will fade in element over 1sec
    $('#header').fadeOut();
    $('#header').slideUp(1000); //will slide up and dissapear over 1sec
    $('#header').fadeOut();
    

// });
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
// animate - we can animate most CSS properties
	$('#header1').animate({
		letterSpacing: '30px'}, 2000, x); //will change letter spacing over 2sec

// click function - make something happen when we click the element
	$('#header2').click(function(){
	     $('#div1').toggle();
	});

	$('#div1').on("click", function(){
		$('p').fadeOut(2000);



