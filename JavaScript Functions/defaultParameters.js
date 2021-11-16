function rand(a, b){
	if(a === undefined && b === undefined){
		return 0;
	} else if(b === undefined){
		return a;
	} else {
		return a + b;
	}
}
console.log(rand(5, 10));

function greet(lang){
	// default parameter
	if(lang === undefined){
		lang = "en";
	}
	if(lang === "en"){
		console.log("Hello");
	} else if(lang === "fr"){
		console.log("Bonjour");
	} else if(lang === "es"){
		console.log("Hola");
	}
}
greet();