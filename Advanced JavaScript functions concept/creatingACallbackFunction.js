function sumItem(arr, callback){
	var sum = arr.reduce(function(acc, e){
		return acc + e;
	}, 0);

	callback(sum);
}

sumItem([1, 2, 3], function(sum){
	console.log(""Res is: " + sum");
})