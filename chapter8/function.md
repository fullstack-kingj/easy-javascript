## 函数定义

定义函数有两种方式:

#### 1. 函数声明方式

```javascript
function fn(){
	console.log("this is function");
}
```

#### 2. 字面量表达式

```javascript
var fun = fnction(){
	console.log("this is function");
}
```

## 函数调用

定义一个函数并不会自动的执行它。定义了函数仅仅是赋予函数以名称并明确函数被调用时该做些什么。调用函数才会真正执行这些动作。

例如下述代码:

- 定义一个函数fn

```javascript
function fn(){
	console.log("this is function");
}
```

- 调用函数 fn

```javascript
fn();// 输出字符串 this is function
```

## 函数参数

函数的参数就相当于在函数中使用的变量（虽然这个比方不是很准确）。JavaScript 中的函数定义并未制定函数参数的类型，函数调用时也未对传入的参数做任何的类型检查。

函数的参数可以分为以下两种:

- 形参: 出现在函数定义文法中的参数列表是函数的形式参数，简称形参。简单来说，就是定义函数时使用的参数就是形参。
- 实参: 函数调用时实际传入的参数是函数的实际参数，简称实参。简单来说，就是调用函数时使用的参数就是实参。

> **注意:** 一般情况下，形参与实参的个数是相同的。但在 JavaScript 中并不强求这一点，在特殊情况下，函数的形参和实参的个数可以不相同。 

```javascript
function fn( one, two ){
	console.log( one + two );
}
fn( 1, 2 );// 输出 3
```

上述代码中，定义函数 fn 时，one 和 two 就是函数的形参；调用函数 fn 时，1 和 2 就是函数的实参。

## return 语句

函数还可以包含一个返回语句（return）。当然，这并不是必需的。return 语句使函数可以作为一个值来使用。具体用法如下述代码:

```javascript
function fn( msg ){
	return "hello" + msg;
}

// 变量 fun 的值为 hello longestory
var fun = fn("longestory");
```