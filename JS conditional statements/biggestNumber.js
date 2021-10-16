var yesOrNO = prompt("Would you like to get the biggest number out of the 3 numbers? y(yes) or n(No).");

yesOrNO = yesOrNO.toLowerCase();

if(yesOrNO == "n" || yesOrNO == "no"){
	alert("If you want to play again, refresh the page");
} else if(yesOrNO == "y" || yesOrNO == "yes"){
	var num1 = prompt("Enter the first number");
	var num2 = prompt("Enter the second number");
	var num3 = prompt("Enter the third number");

	var res = num1;
	if(res < num2){
		res = num2;
	}
	if(res < num3){
		res = num3;
	}

	alert("The biggest number is: " + res);
}