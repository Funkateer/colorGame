var red_Color = document.getElementById("redColor");
var green_Color = document.getElementById("greenColor");
var blue_Color = document.getElementById("blueColor");
var inPuts = document.getElementsByTagName("input");
var RGBcolors = "";
var Red = 0;
var Green = 0;
var Blue = 0;

// add event
for(var i = 0 ; i < inPuts.length ; i++){
    inPuts[i].addEventListener("change", function(){
        Red = parseInt(red_Color.value);
        Green = parseInt(green_Color.value);
        Blue = parseInt(blue_Color.value);
        RGBsec = ["rgb" + "(" + Red + ", " + Green + ", " + Blue + ")"];
        var RGBcolors = RGBsec.toString();
        document.body.style.backgroundColor = RGBcolors;
    });
}
