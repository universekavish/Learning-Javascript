var arr = ["JavaScript", "PHP", "Ruby", "Python"];
// returning array containing elements having 
//length greater then 4 in uppercase
// chaning different methods to achieve this task

var res = arr.filter(function(e){
	return e.length > 4;
});
console.log(res);

res = res.map(function(e){
	return e.toUpperCase();
});
console.log(res);

res = res.reduce(function(acc, e){
	return acc + " " + e
}, "");
console.log(res);