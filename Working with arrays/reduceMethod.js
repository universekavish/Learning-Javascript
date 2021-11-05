var arr = [5, 9, 2];
// returning sum of array using reduce method
var sum = arr.reduce(function(acc, element){
	console.log(acc);
	console.log(element);
	return acc + element;
}, 0);
console.log(sum);

// returning new array with elements greater than 12 using reduce method
var arr2 = [5, 9, 2, 10, 99, 25, 14];
var res = arr2.reduce(function(acc, element){
	if(element > 12){
		acc.push(element);
		return acc;
	} else {
		return acc;
	}
}, []);
console.log(res);