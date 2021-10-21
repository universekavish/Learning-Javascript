var number = parseInt(prompt("Enter number to ger its multiplication table"));

if(!isNaN(number)){
	for(var i = 1; i <= 10; i++){
		var res = number + " * " + i + " = " + (number * i);
		document.write(res);
	}
}