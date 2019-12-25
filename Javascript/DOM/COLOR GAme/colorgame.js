
var colors = generateRandomColors(6);
var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);


var squares = document.querySelectorAll(".square");
var pickedColor = pickRandomColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton =  document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");



easybtn.addEventListener("click",function(){
    hardbtn.classList.remove("selected");
    easybtn.classList.add("selected");

    numberOfSquares = 3;

    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickRandomColor();
    colorDisplay.textContent = pickedColor;

    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else {
            squares[i].style.display = "none";
        }
    } 
});

hardbtn.addEventListener("click",function(){
    hardbtn.classList.add("selected");
    easybtn.classList.remove("selected");

    numberOfSquares = 3;

    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickRandomColor();
    colorDisplay.textContent = pickedColor;

    for(var i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }
    

});



resetButton.addEventListener("click",function(){

    //generate all new colors
    colors = generateRandomColors(numberOfSquares);
    //pick a new random color from array
    pickedColor = pickRandomColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for(var i = 0; i< squares.length; i++)
    {
       //add initial colors to squares
        squares[i].style.backgroundColor = colors[i];  
    }

});

var h1 =  document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for(var i = 0; i< squares.length; i++)
{
    //add initial colors to squares
      squares[i].style.backgroundColor = colors[i]; 
    //add click listeners to squares
      squares[i].addEventListener("click", function(){
    //grab color of clicked square
      var clickedColor = this.style.backgroundColor;
    //compare color to pickedColor     
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "PlayAgain?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }        
    });
}

function changeColors(color){
    //loop through all squares
    for(var i = 0; i < squares.length; i++){
        //change each color to match given color
            squares[i].style.backgroundColor = color; 
    }  
}

function pickRandomColor(){
    //javascript method
    //math.floor() to round of the number coz math.random() always gives decimal
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
//make an array
    var arr = [];
// repeat num times;
   for(var i = 0; i < num; i++){
    //get randaom color and push into array
    arr.push(randomColor());
}
 //return that array
return arr;
}

function randomColor(){
   // pick a red from 0 - 255 
   var rd = Math.floor(Math.random() * 256);
   // pick a green from 0 - 255 
      var grn = Math.floor(Math.random() * 256);
   // pick a blue from 0 - 255 
   var blu = Math.floor(Math.random() * 256);
   //return rgb(r,g,b)
   return "rgb(" + rd + ", " + grn + ", " + blu + ")"; 

}











/*var colors=[
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",  
    "rgb(255, 0, 255)",
    "rgb(255, 255, 255)",  
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)"
]


var colors = generateRandomColors(6);


var squares = document.querySelectorAll(".square");
var pickedColor = pickRandomColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

var h1 =  document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for(var i = 0; i< squares.length; i++)
{

    //add initial colors to squares
      squares[i].style.backgroundColor = colors[i]; 

    //add click listeners to squares
      squares[i].addEventListener("click", function(){

    //grab color of clicked square
      var clickedColor = this.style.backgroundColor;

    //compare color to pickedColor
     
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }        
    });
}

function changeColors(color){

    //loop through all squares
    for(var i = 0; i < squares.length; i++){
        //change each color to match given color
            squares[i].style.backgroundColor = color; 

    }
  
}

function pickRandomColor(){
    //javascript method

    //math.floor() to round of the number coz math.random() always gives decimal
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
//make an array
    var arr = [];
// repeat num times;
   for(var i = 0; i < num; i++){
    //get randaom color and push into array
    arr.push(randomColor());
}
 //return that array
return arr;
}

function randomColor(){
   // pick a red from 0 - 255 
   var rd = Math.floor(Math.random() * 256);
   // pick a green from 0 - 255 
      var grn = Math.floor(Math.random() * 256);
   // pick a blue from 0 - 255 
   var blu = Math.floor(Math.random() * 256);
   //return rgb(r,g,b)
   return "rgb(" + rd + ", " + grn + ", " + blu + ")"; 

}
*/
