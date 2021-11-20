function counter(){
	var i = 0;

	return function(){
		i++;
		console.log(i);
	}
}

var countDog = counter();
var countCat = counter();