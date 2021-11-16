var employee = {
	name: "Batman",
	email: "batman@gotham.com",
	job: "Software Engineer",
	display: function(a, b){
		console.log(a, b);
		console.log("Name: " + this.name + "Email: " + this.email);
	}
}
var student = {
	name: "Med",
	email: "studentmed@f.com"
}

employee.display.apply(student, [1, 2]);

employee.display.call(student, 1, 2);

var res = employee.display.bind(student);
res(5, 2);