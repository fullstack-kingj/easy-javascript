console.log( msg );// 不会报错，输出 undefined
var msg = "this is message";// 定义全局变量 msg
console.log( msg );// 输出 this is message

var msg;// 定义全局变量 msg，但未初始化
console.log( msg );// 不会报错，输出 undefined
msg = "this is message";// 初始化全局变量 msg
console.log( msg );// 输出 this is message

function fn(){
	console.log( msg );// 不会报错，输出 undefined
	var msg = "this is message";// 定义全局变量 msg
	console.log( msg );// 输出 this is message
}
fn();
console.log( msg );// 输出报错

function fn(){
	var msg;// 定义局部变量 msg，但未初始化
	console.log( msg );// 不会报错，输出 undefined
	msg = "this is message";// 定义全局变量 msg
	console.log( msg );// 输出 this is message
}