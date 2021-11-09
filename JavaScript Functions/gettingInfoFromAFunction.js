var arr = [5, 8, 9, 7, 60];

function sumArray(){
	var sum = arr.reduce(function(acc, e){
		return acc + e;
	}, 0);
	return sum;
}

function filterArr(){
	var res2 = arr.filter(function(e){
		return e > 50;
	})
	return res2;
}

var res = sumArray();
console.log(res); // output : 29

var res2 = filterArr();
console.log(res2); // output : [60]