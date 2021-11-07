var person = {
	firstName: "Bat",
	lastName: "Man",
	email: "batman@gotham.gmail.com",
	age: 23,
	skills: ["html", "css", "javascript", "Java"],
	displayName: function(){
		console.log("First Name: " + this.firstName + " Last Name: " + this.lastName);
	},
	displaySkills: function(){
		this.skills.forEach(function(e){
			console.log(e);
		})
	}
};

console.log(person);
person.displayName();
person.displaySkills();