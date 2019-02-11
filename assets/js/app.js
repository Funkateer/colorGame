var level = 6;
var colors = GenerateRandomColor(level);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor()
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");
var modeButton = document.querySelectorAll(".mode")


for(var i = 0 ; i < modeButton.length ; i++){
    modeButton[i].addEventListener("click" , function(){
        modeButton[0].classList.remove("selected")
        modeButton[1].classList.remove("selected")        
        this.classList.add("selected")
        this.textContent === "Easy" ? level = 3: level = 6;
        resett();
    });
}
function resett(){
    // generate new colors
    colors = GenerateRandomColor(level);
    // pick new winning color 
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor ; // UPDATE the rgb in h1
    // change squares color
    for(var i =0 ; i < squares.length ; i++){
        // add initial colors
        squares[i].style.backgroundColor = colors[i];
    };
    resetButton.textContent ="New Colors";
    h1.style.backgroundColor ="steelblue";
    messageDisplay.textContent ="";

    for(var i =0 ; i < squares.length ; i++){
        if(colors[i]){
            squares[i].style.display = "block"          
            squares[i].style.backgroundColor = colors[i]
        }else{
            squares[i].style.display = "none"
        }
    }
};

// RESET
resetButton.addEventListener("click", function(){ 
    resett();
});

colorDisplay.textContent = pickedColor ;

// loops the random colors inside the squares 
for(var i =0 ; i < squares.length ; i++){
    // add initial colors
    squares[i].style.backgroundColor = colors[i]

    //add click listener
    squares[i].addEventListener("click",function(){
        //alert(this.style.backgroundColor)

        // compare clicked square color with picked color
        var clicked = this.style.backgroundColor
        if(clicked === pickedColor){
            messageDisplay.textContent = "Correct!!";
            // will cal function changeColors which will change all colors in picked one
            changeColors(clicked);
            h1.style.backgroundColor = pickedColor ;
            resetButton.textContent ="Play again?"

        } else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again"
        }
    });
};

// this will change all the squares colors to picked one
function changeColors(color){
    for(var i=0 ; i<squares.length; i++){
        squares[i].style.backgroundColor = pickedColor
    }
};

// This function generate  3 numbers from 0 to 255 and return it in a string 
function randomColor(){
    // pic a red from  0 - 255
    var r = Math.floor(Math.random()*256);
    // pic a green from 0 - 255
    var g = Math.floor(Math.random()*256);
    // pic a blue from 0 - 255
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", "+ g + ", "+ b + ")"
};

// This function takes the random numbers generate and loops it in an 
// array created inside the function aka generate colors
function GenerateRandomColor(num){
    var arr =[];
    for(var i=0 ; i < num ; i++){
        arr.push(randomColor())
    }
    return arr;
};

// lets set the picked color form the colors looped 
function pickColor(){
    var random = Math.floor(Math.random()*colors.length)
    return colors[random]
};