var arr = [2, 3, 4, 5];

var res = arr.map(function(element){
	return element + 5;
});

console.log(arr);
console.log(res);


var arr2 = ["a", "b", "c"];

var res2 = arr2.map(function(element){
	return element.toUpperCase();
});

console.log(arr2);
console.log(res2);