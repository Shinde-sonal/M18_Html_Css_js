// Player 1
var randomNum1=Math.floor(Math.random()*6)+1;
// maping random to images in folder
var randomImage1="images/img"+ randomNum1 +".png";

var image1=document.querySelectorAll("img")[0]; //Player - 1
image1.setAttribute("src",randomImage1);

// Player 2
var randomNum2=Math.floor(Math.random()*6)+1;
// maping random to images in folder
var randomImage2="images/img"+ randomNum2 +".png";

var image2=document.querySelectorAll("img")[1]; //Player - 1
image2.setAttribute("src",randomImage2);

// Player 2
var randomNum3=Math.floor(Math.random()*6)+1;
// maping random to images in folder
var randomImage3="images/img"+ randomNum3 +".png";

var image3=document.querySelectorAll("img")[2]; //Player - 1
image3.setAttribute("src",randomImage3);

// game logic
if(randomNum1 > randomNum2 || randomNum1 > randomNum3){
    document.querySelector("h1").innerHTML="Player 1 Wins !";
}
else if(randomNum2 > randomNum1 || randomNum2 > randomNum3){
    document.querySelector("h1").innerHTML="Player 2 Wins !";
}
else if(randomNum3 > randomNum1 || randomNum3 > randomNum2){
    document.querySelector("h1").innerHTML="Player 3 Wins !";
}
else{
    document.querySelector("h1").innerHTML=" DRAWS !";
}