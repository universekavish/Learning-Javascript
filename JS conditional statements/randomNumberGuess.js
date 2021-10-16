//  Assignment - 

// 1. How to generate random number
var randomNumber = Math.ceil(Math.random() * 5);

// 2. Ask the user to guess that number
var guessNumber = prompt("Guess the random number(Between 1-5)");

// 3. We chech if the user chose the correct value
if(randomNumber == guessNumber){
	alert("you won");
} else {
	alert("you lost");
}
