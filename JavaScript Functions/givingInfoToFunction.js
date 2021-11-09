var num = [5, 8, 9, 7, 60, 77];
var num2 = [55, 8, 9, 7, 60, 77];

function sumArray(arr) {
	var sum = arr.reduce(function(acc, e){
		return acc + e;
	}, 0);
	return sum;
}

var res = sumArray(num);
var res2 = sumArray(num2);

console.log(res); // output - 166
console.log(res2); // output - 216