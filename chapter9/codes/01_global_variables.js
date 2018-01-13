var msg = "this is message";// 定义全局变量 msg
// 在全局作用域访问变量 msg
console.log( msg );// 输出 this is message
function fn(){
	// 在函数作用域访问变量 msg
	console.log( msg );// 输出 this is message
}
fn();

function fun(){
	// 定义变量时没有使用关键字 var
	longestory = "this is longestory";
	// 在函数作用域访问变量 msg
	console.log( longestory );// 输出 this is longestory
}
fun();
// 在全局作用域访问变量 msg
console.log( longestory );// 输出 this is longestory