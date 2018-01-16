// 字面量方式
var arr = [];// 定义一个空数组
var arr = [ 1, "a", true];// 定义一个数组（包含元素）
// 判断数组的类型
console.log(typeof arr);// object
console.log(arr instanceof Array);// true
// 数组函数方式
var arr = Array();
var arr = Array( 1, "a", true);
var arr = Array( 10 );
// 构造函数方式
var arr = new Array();
var arr = new Array( 1, "a", true);
var arr = new Array( 10 );