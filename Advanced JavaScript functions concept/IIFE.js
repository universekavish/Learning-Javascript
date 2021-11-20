(function greet(global, p1, p2) {
	console.log(p1);
	console.log(p2);
	global.b = "5";
	var a = "hh";
	console.log(a);
	console.log("Hello");
}) (window, 5, 2);

console.log(b);