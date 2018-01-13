/* 全等与不全等 */
var x = 10;
var y = '10';

console.log( x == y );// 输出 true
console.log( x === y );// 输出 false
console.log( x != y );// 输出 false
console.log( x !== y );// 输出 true

/* isNaN()函数 */
console.log(isNaN(parseInt('123.45a')));// 输出 true
console.log(isNaN('123.45a'));// 输出 true
console.log(isNaN(Number('123.45a')));// 输出 true