
$(document).ready(function(){

// Random number for counter 19-120 
var randomCounter = Math.floor((Math.random() * 101) + 19);
console.log(randomCounter);
$("#randomNumber").html(randomCounter);


// Random numbers for each of the crystals 1-12
var number1 = Math.floor((Math.random() * 11) + 1);
var number2 = Math.floor((Math.random() * 11) + 1);
var number3 = Math.floor((Math.random() * 11) + 1);
var number4 = Math.floor((Math.random() * 11) + 1);
console.log(number1, number2, number3, number4)

// Score keeping variables
var wins = 0;
$("#wins").html(wins);
var losses = 0;
$("#losses").html(wins);
var userCounter = 0;
$("#currentScore").html(userCounter);


// Function to reset the game

function resetGame () {
    randomCounter = Math.floor((Math.random() * 101) + 19);
    number1 = Math.floor((Math.random() * 11) + 1);
    number2 = Math.floor((Math.random() * 11) + 1);
    number3 = Math.floor((Math.random() * 11) + 1);
    number4 = Math.floor((Math.random() * 11) + 1);
    userCounter = 0;
    console.log(randomCounter);
    console.log(number1, number2, number3, number4)
    };

// End game functions

function userWin () {
    alert("You won! Congrats!");
    resetGame();
};

function userLoss () {
    alert("You lost....Boo");
    resetGame();
};






});