var age = parseInt(prompt("how old are you?"));

console.log("Only +18 can access the website");

if(isNaN(age)){
	alert("The age must be a number");
} else{
		if(age >= 18){
		alert("Welcome to the website");
	} else if(age > 13){
		alert("You are not allowed to access the website");
		console.log("You're still a teenager");
	} else {
		alert("You're not allowed to access the website");
		console.log("You're too young");
	}
}

