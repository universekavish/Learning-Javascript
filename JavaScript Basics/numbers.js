var str = 10;
// changing the base of a number using toStrng method
// return the value as base 2 or Binary.
var result = str.toString(2);
console.log(result);
// returns base 16 hexadecimal value
var result2 = str.toString(16);
console.log(result2);
// returns base 8 or Octal value
var result3 = str.toString(8);
console.log(result3);

// toExponential method
var res = str.toExponential();
console.log(res);
// toFixed method
var str2 = 200.65;
var res2 = str2.toFixed(4);
console.log(res2);
// toPrecision method
var res3 = str2.toPrecision(10);
console.log(res3);

// some mehods for advanced calculations
// these can be found on MDN mozzila developer network website
console.log(Math.sqrt(2025))
console.log(Math.ceil(5.66));
console.log(Math.floor(5.66));
console.log(Math.min(10, 20, -2, -200));
console.log(Math.max(10, 20, -2, -200));