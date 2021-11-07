var person = {
	firstName: "Bat",
	lastName: "Man",
	"middle name": "goat"
};

person.lastName = "Kid";

person.email = "batkid@gotham.com";
person.age = 23;

var property = "email";

console.log(person.lastName);
//OR
console.log(person["lastName"]);

console.log(person[property]);
// brackets notation allows you to get the properties dynamically
// unlike the dot notation.

console.log(person["middle name"]);