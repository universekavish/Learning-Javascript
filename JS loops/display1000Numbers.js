var res = "";

for(var i = 0; i < 1000; i++){
	var randomNum = Math.ceil(Math.random() * 9);
	res += randomNum;
}

document.write("<p>" + res + "</p>");