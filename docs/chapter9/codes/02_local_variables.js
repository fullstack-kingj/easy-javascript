function fun(){
	// 定义局部变量 longestory
	var longestory = "this is longestory";
	// 在函数作用域访问变量 longestory
	console.log( longestory );// 输出 this is longestory
}
fun();
// 在全局作用域访问变量 longestory
console.log( longestory );// 输出报错