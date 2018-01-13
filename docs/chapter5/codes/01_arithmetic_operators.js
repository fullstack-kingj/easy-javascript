/* 加法运算符 */
console.log( 1 + 2 );// 输出 3
// JavaScript自动将String类型转换为Number类型，再进行计算
console.log( '1' + '2' );// 输出 3
/*
 * 字符串a转换为Number类型会失败，得到NaN结果
 * 任何Number类型 + NaN，结果都是 NaN
 */
console.log( 1 + "a" );// 输出 NaN

/* 减法运算符 */
console.log( 2 - 1 );// 输出 1
// JavaScript自动将String类型转换为Number类型，再进行计算
console.log( '2' - '1' );// 输出 1
/*
 * 字符串a转换为Number类型会失败，得到NaN结果
 * 任何Number类型 - NaN，结果都是 NaN
 */
console.log( 1 - "a" );// 输出 NaN

/* 求余运算符 */
console.log( 10 % 3 );// 输出 1
console.log( -10 % 3 );// 输出 -1
console.log( 10 % -3 );// 输出 1
console.log( -10 % -3 );// 输出 -1

/* 自增运算符 */
var x = 3;
console.log( x++ );// 输出 3
console.log( x );// 输出 4
var y = 3;
console.log( ++y );// 输出 4
console.log( y );// 输出 4