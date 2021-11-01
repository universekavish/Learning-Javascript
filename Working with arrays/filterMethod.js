var num = [25, 30, 1, 29, 32, 7, 5, 98];
// filter() method accepts a callback 

var res = num.filter(function(element) {
	return element > 50;
});

console.log(num);
console.log(res);

var arr = [[2], [554, 2, 2, 6, 4, 4], 
		[8, 9, 8, 7, 2, 1, 2], [2, 2]];

var res2 = arr.filter(function(e) {
	return e.length > 2;
});

console.log(arr);
console.log(res2);