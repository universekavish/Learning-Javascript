var cars = [
	"golf",
	"polo",
	"a3",
	"mercedes"
];

cars.forEach(function(element, index, arr){
	console.log(element + " is at: " + index);
	console.log(arr);
})