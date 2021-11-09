//difference 
greet(); //works just fine
greet2(); // gives error

// declaration
function greet(){
	console.log("hello");
}

// statement 
var greet2 = function() {
	console.log("hello");
}
greet2();