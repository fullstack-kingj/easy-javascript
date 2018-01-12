原始类型，又称为原始值，是直接代表 JavaScript 语言实现的最底层的数据。

原始类型分别为 boolean 类型、number 类型和 string 类型三种。当然，有些资料将 undefined 和 null 也归为原始类型（这里表示为特殊类型）。

声明变量并初始化值为原始类型，一般称之为字面量方式定义变量，也可以称之为直接量方式定义变量。

## boolean 类型

布尔（boolean）类型是指真或假、开或关、是或否。这个类型只有两个值：true 和 false。

> **注意:**
> 
> - 由于 JavaScript 是区分大小写的，布尔类型的 true 和 false 全部是小写。
> - JavaScript 也可以将其他类型的数据，自动转换为布尔类型。

| 数据类型 | 转换为 true 值 | 转换为 false 值 |
| --- | --- | --- |
| boolean 类型 | true | false |
| string 类型 | 任何非空字符串 | “”（空字符串）|
| number 类型 | 任何非零数字值（包括无穷大）| 0 和 NaN |
| object 类型 | 任何对象 | null |
| undefined | | undefined |

## number 类型

number 类型是指数字，JavaScript 不区分整数类型和浮点类型。

- 整数类型: 包括负整数、0 和正整数等。
- 浮点类型: 表示小数，JavaScript 中的所有数字均用浮点类型表示。

进制，是指一种记数方式。

- 八进制: 以数字 0 开始，其后跟随一个由 0 ~ 7 之间的数字组成的序列。
- 十进制: 使用一个数字序列表示一个十进制整数。
- 十六进制: 由 0 ~ 9，A ~ F 组成，字母不区分大小写。

> **注意:** 八进制或十六进制的数值最终会被转换成十进制数值。

### 浮点类型

浮点类型，就是指该数值包含整数部分、小数点和小数部分。

```javascript
var floatNum1 = 0.1;
var floatNum2 = .1;// 有效，但不推荐
```

> **注意:**
> 
> - JavaScript 允许小数点前可以没有整数，但不推荐这种写法。
> - 保存浮点类型需要的空间是保存整数类型的两倍。
> - 如果小数点后面没有任何数字，那这个数值作为整数类型保存。

```javascript
var floatNum3 = 1.;// 小数点后面没有数字 —— 解析为 1
var floatNum4 = 10.0;// 整数 —— 解析为 10
```

### 四舍五入误差

整数有无数个，但 JavaScript 通过浮点类型只能表示有限的个数（确切地说是 18 437 736 874 454 810 627 个）。也就是说，当在 JavaScript 中使用浮点类型时，常常只是真实值的一个近似表示。如下示例代码所示:

```javascript
var x = .3 - .2;
var y = .2 - .1;
x == y;// 值为false，表示两值不相等
x == .1;// 值为false，.3-.2 不等于 .1
y = .1;// 值为true，.2-.1 等于 .1
```

> **注意:** 建议使用大整数表示金额。例如使用分作为单位，而不是使用元作为单位。

### NaN

NaN（Not a Number），即非数值，是一个特殊的数值。任何涉及 NaN 的操作都会返回 NaN。NaN 与任何值都不相等，包括 NaN 本身。

针对上述特点，JavaScript 提供了 `isNaN()` 函数。该函数用于判断计算结果是否为数值。

```javascript
console.log(isNaN(10));// 输出false（10是一个数值）
console.log(isNaN("10"));// 输出false（可以被转换成数值 10）
console.log(isNaN("blue"));// 输出true（不能转换成数值）
console.log(isNaN(true));// 输出false（可以被转换成数值 1）
```

## string 类型

string 类型用于表示由零或多个 16 位 Unicode 字符组成的字符序列，被称之为字符串。字符串可以由双引号（"）或单引号（'）表示。

```javascript
var firstString = "Nicholas";
var secondString = 'Zakas';
```

string 类型包含一些特殊的转义字符，用于表示非打印字符。

| 转义字符 | 含义 |
| --- | --- |
| \n | 换行符 |
| \t | 制表符 |
| \b | 退格符 |
| \r | 回车符 |
| \f | 换页符 |
| \\ | 斜杠 |
| \' | 单引号（'），在用单引号表示的字符串中使用 |
| \" | 双引号（"），在用双引号表示的字符串中使用 |

## typeof 运算符

由于 JavaScript 是弱类型/松散类型的，因此需要有一种手段来检测给定变量的数据类型。typeof 运算符就是负责提供这方面信息，如下述代码:

```javascript
var message = "this is message";
console.log(typeof message);// 输出 string
console.log(typeof(message));// 输出 string
```

> **注意:** typeof 运算符加上圆括号，会像是函数，而不是运算符，并不建议这种写法。

| 值 | 类型 |
| --- | --- |
| true 或 false | boolean |
| 任意字符串 | string |
| 任意数字或 NaN | number |