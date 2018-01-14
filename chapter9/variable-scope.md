## 全局变量

在所有函数之外声明的变量，叫做全局变量，因为它可被当前文档中的其他代码所访问。具体内容如下述代码所示:

```javascript
var msg = "this is message";// 定义全局变量 msg

// 在全局作用域访问变量 msg
console.log( msg );// 输出 this is message

function fn(){
	// 在函数作用域访问变量 msg
	console.log( msg );// 输出 this is message
}
fn();
```

除了上述定义全局变量外，还有一种比较特殊的方式定义全局变量（具体用法如下述代码）。但这种特殊用法并不推荐！

```javascript
function fun(){
	// 定义变量时没有使用关键字 var
	longestory = "this is longestory";
	// 在函数作用域访问变量 longestory
	console.log( longestory );// 输出 this is longestory
}
fun();

// 在全局作用域访问变量 longestory
console.log( longestory );// 输出 this is longestory
```

## 局部变量

在函数内部声明的变量，叫做局部变量，因为它只能在该函数内部访问。具体用法如下述代码所示:

```javascript
function fun(){
	// 定义局部变量 longestory
	var longestory = "this is longestory";
	// 在函数作用域访问变量 longestory
	console.log( longestory );// 输出 this is longestory
}
fun();

// 在全局作用域访问变量 longestory
console.log( longestory );// 输出报错
```

## 声明提前

JavaScript 变量的另一特别之处是，你可以引用稍后声明的变量，而不会引发异常。这一概念称为变量声明提升。

JavaScript 变量感觉上是被“举起”或提升到了所有函数和语句之前。然而提升后的变量将返回 undefined 值，所以即使在使用或引用某个变量之后存在声明和初始化操作，仍将得到 undefined 值。

### 全局变量声明提前

```javascript
console.log( msg );// 不会报错，输出 undefined
var msg = "this is message";// 定义全局变量 msg
console.log( msg );// 输出 this is message
```

上述代码中的第一行输出不会报错，而是输出 undefined值。效果等同于如下述代码:

```javascript
var msg;// 定义全局变量 msg，但未初始化
console.log( msg );// 不会报错，输出 undefined
msg = "this is message";// 初始化全局变量 msg
console.log( msg );// 输出 this is message
```

### 局部变量声明提前

```javascript
function fn(){
	console.log( msg );// 不会报错，输出 undefined
	var msg = "this is message";// 定义全局变量 msg
	console.log( msg );// 输出 this is message
}
fn();
console.log( msg );// 输出报错
```

效果等同于如下述代码:

```javascript
function fn(){
	var msg;// 定义局部变量 msg，但未初始化
	console.log( msg );// 不会报错，输出 undefined
	msg = "this is message";// 定义全局变量 msg
	console.log( msg );// 输出 this is message
}
```

## 按值传递

按值传递就是指将实参变量的值复制一份副本给函数的形参变量。JavaScript 中为函数传递参数时，都是按值传递的。

如果向函数传递的参数是原始类型数据，则在函数中修改参数变量的值，不会影响外部实参的变量。

```javascript
var n = 100;// 全局变量n
function fun( n ){// 参数变量也是局部变量
	n -= 3;// 修改的是局部变量n
	console.log( n );// 输出的是局部变量n
}
fun( n );// 按值传递，方法内输出 97
console.log( n );// 输出全局变量的值 100
```