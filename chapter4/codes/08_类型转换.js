var str = 'www.longestory.com';
console.log(Number(str));// NaN

console.log(Number(true));// 1
console.log(Number(false));// 0

console.log(String(100));// String 类型的 100
console.log(String(100.11));// String 类型的 100.11
console.log(String(true));// String 类型的 true

var num = 100;
console.log(num.toString());// String 类型的 100

var str1 = '100';
var str2 = '100.11';

console.log(parseInt(str1));// 100
console.log(parseInt(str2));// 100

console.log(parseFloat(str1));// 100
console.log(parseFloat(str2));// 100.11