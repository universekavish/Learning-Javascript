var randNum = Math.ceil(Math.random() * 10);

var chancesLeft = 5;

do {
	var guess = parseInt(prompt("Guess the random number(between 1-10)\n" + chancesLeft + "chances left"));
	if(randNum === guess){
		break;
	}
	chancesLeft--;
} while (chancesLeft !== 0);

if(chancesLeft === 0){
	document.write("<p class = error>You lost</p>");
} else{
	document.write("<p class = success>You won</p>")
}