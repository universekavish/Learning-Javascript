var a = "sdsd"; // global scope

function rand(){
	var b = "b"; // local scope
	console.log(a);
	console.log(b); // works fine
}


rand();
console.log(b); // throws error
