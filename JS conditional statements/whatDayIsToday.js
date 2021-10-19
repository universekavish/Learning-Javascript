var date = new Date();

var today = date.getDay();
var res;

switch(today){
	case 0:
		res = "sunday";
		break;
	case 1:
		res = "monday";
		break;
	case 2:
		res = "tuesday";
		break;
	case 3:
		res = "wednesday";
		break;
	case 4:
		res = "thursday";
		break;
	case 5:
		res = "friday";
		break;
	case 6:
		res = "saturday";
		break;
}

var userInput = prompt("What day is today?").toLowerCase();

if(userInput === today){
	alert("You won");
} else {
	alert("You lost");
}
