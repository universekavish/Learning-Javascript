function makePerson(name, email, age){
	this.name = name;
	this.email = email;
	this.age = age;
	this.canAccess = function(){
		if(this.age > 18){
			console.log("Welcome");
		} else {
			console.log("You can't access");
		}
	}
}

var person1 = new makePerson("Batman", "batman@gotham.com", 23);
console.log(person1);
person1.canAccess();

var person2 = new makePerson("Superman", "mostPowerful@gmail.com", 24);
console.log(person2);
person2.canAccess();