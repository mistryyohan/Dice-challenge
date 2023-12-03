// function to generated random number from 1 to 6
function randomNumber() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}

// function to check winner
function checkWinner() {
    if (randomNumber1 > randomNumber2) {
        return "Player 1 wins";
    } else if (randomNumber2 > randomNumber1) {
        return "Player 2 wins";
    } else {
        return "It's a Draw";
    }

}

// Generated random numbers
var randomNumber1 =  randomNumber();
var randomNumber2 = randomNumber();

// set images to random number generated
var image1 = document.getElementsByClassName("img1")[0];
var image2 = document.getElementsByClassName("img2")[0];

var imagePath1= "images/dice"+randomNumber1+".png";
var imagePath2= "images/dice"+randomNumber2+".png";

image1.setAttribute("src",imagePath1);
image2.setAttribute("src",imagePath2);

// check for results 
var results = checkWinner();

// set results in Title
var title =document.getElementsByTagName("h1")[0];
title.innerHTML=results;