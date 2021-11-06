var arr = [];

do{
	var maxValue = parseInt(prompt("Type in the max value you want to generate.\nEx: if you type in 5, the computer will generate a random number between 1-5.\nThe value entered must be a number."));
}while(isNaN(maxValue));

do{
	var numToGenerate = parseInt(prompt("How many random numbers you want to generate?\nThe value entered must be a number."));
}while(isNaN(numToGenerate));

for(var i = 0; i < numToGenerate; i++){
	var randomNum = Math.ceil(Math.random() * maxValue);
	arr.push(randomNum);
}

do{
	var guessNumber = parseInt(prompt("Enter a number to see if it has been generated\n The number must be between 1-" + maxValue));
}while(isNaN(guessNumber));

if(arr.indexOf(guessNumber) === -1){
	document.write("<p class=error> You Lost!!</p>");
} else {
	document.write("<p class=success>You WON!!</p>");
}

