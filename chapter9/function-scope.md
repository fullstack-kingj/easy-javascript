## 全局函数

函数与变量类似，具有全局作用域和函数作用域（局部作用域）。与全局变量类似，全局函数是被定义在全局作用域的，在任何位置都可以访问或调用该函数。

```javascript
function fn( num1, num2){
	console.log( num1 + num2 );// 输出 3
}
fn( 1, 2 );
```

## 内部函数

一个函数被定义在另一个函数内部，被称之为局部函数或内部函数。与变量类似，局部函数只能在当前函数的内部访问，而不能在全局作用域中被访问。

```javascript
function outer(){// 全局函数
	function inner(){// 局部函数
		console.log("inner");
	}
	inner();// 调用正常
}
inner();// 输出报错
```