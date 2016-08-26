
var colorselection = ['#1abc9c','#3498db','#e74c3c'] 	//Selection for random colours
var randomcolour = colorselection[Math.floor(Math.random() * colorselection.length)];		//Select colour at random

$("H1").css("color",randomcolour);		//Adds the random colour to the styling elements, color, background-color or border color
$("footer").css("background-color",randomcolour);
$("#name").css("background-color",randomcolour);
$("#email").css("background-color",randomcolour);
$("#message").css("background-color",randomcolour);
$("#name").css("background-color",randomcolour);
$(".viewproject").css("border-color",randomcolour);


//Functions for button hover
$(".viewproject").mouseover(function(){
$(".viewproject").css("background-color",randomcolour);
$(".viewproject").css("color",'white');
});

$(".viewproject").mouseout(function(){
$(".viewproject").css("background-color",'white');
$(".viewproject").css("color",'#737373');
});

//If statements for the final footer colour selection

if (randomcolour == '#1abc9c') {
   $(".finalfooter").css("background-color",'#16a085');
} else if (randomcolour == '#3498db') {
   $(".finalfooter").css("background-color",'#2980b9');
} else if (randomcolour == '#e74c3c') {
   $(".finalfooter").css("background-color",'#c0392b');
}
