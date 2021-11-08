var person = {
	name: "Mike Johnson",
	age: 23,
	email: "mikonson@gmail.com",
	skills: ["JavaScript", "NodeJS"]
}

for(var prop in person){
	console.log(person[prop]);
}