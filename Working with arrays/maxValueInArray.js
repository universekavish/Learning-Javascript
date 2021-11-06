var arr = [];

do{
	var input = prompt("Add an item to the array (it must be a number)\nType exit to stop");
	if(input.toLowerCase() === "exit"){
		break;
	}

	input = parseInt(input);
	if(!isNaN(input)){
		arr.push(input);
	}
}while(true);

if(arr.length === 0){
	document.write("<p>Your array is empty</p>");
} else {
	var res = arr.reduce(function(acc, e){
		if(e > acc){
			return e;
		} else {
			return acc;
		}
	}, arr[0])

	document.write("<p>The max value in array is: <strong> " + res + "</strong></p>")
}