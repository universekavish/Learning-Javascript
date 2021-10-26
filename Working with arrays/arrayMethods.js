var fruits = ["banana", "apple"];

// join() can take an argument which will be used to join the elements.
var res = fruits.join("*");
console.log(res);

// concat() method
var arr2 = [1, 2, 3];
var result = arr2.concat(fruits);
console.log(fruits);
console.log(arr2);
console.log(result);

// indexOf() method
var res2 = fruits.indexOf("banana");
console.log(res2);

var res3 = fruits.indexOf("somg"); // not in array
console.log(res3);
