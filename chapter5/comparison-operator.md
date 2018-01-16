JavaScript 语言中的比较运算符，主要用于比较两个操作数的是否相等，或者大小情况。我们可以通过下述表格描述比较运算符:

> 给定 A=20 B=10 条件

| 运算符 | 描述 | 例子 |
| --- | --- | --- |
| == | 检查两个运算数的值是否相等，如果相等则结果为 true | A == B 为 false |
| != | 检查两个运算数的值是否不等，如果不等则结果为 true | A != B 为 true |
| > | 检查左边运算数是否大于右边运算数，如果是则结果为 true | A > B 为 true |
| >= | 检查左边运算数是否大于或等于右边运算数，如果是则结果为 true | A >= B 为 true |
| < | 检查左边运算数是否小于右边运算数，如果是则结果为 true | A < B 为 false |
| <= | 检查左边运算数是否小于或等于右边运算数，如果是则结果为 true | A <= B 为 false |
| === | 两个运算数的值相等并且类型相同时，结果为 true | A === B 为 false |
| !== | 两个运算数的值不等或者类型不同时，结果为 true | A !== B 为 true |

> **说明:** 字符串类型的比较，是按照 Unicode 字符编码的先后顺序进行比较。

## 相等与不等

首先，需要说明的是相等（==）和不等（!=）两个运算符。这两个运算符只比较操作数的值，而并不比较类型。如下示例代码所示:

```javascript
console.log(10 == 10);// true
console.log(10 == '10');// true
```

上述示例代码中的第二条语句，两个操作数其中一个是 Number 类型，另一个是字符串类型，但结果依旧为 true。

undefined 和 null 比较是否相等，结果为 true。因为它们都可以用于表示空，如下示例代码所示:

```javascript
console.log(undefined == null);// true
```

## 全等与不全等

比较运算符中，除了提供了相等（==）和不等（!=）两个运算符，还提供了全等（===）和不全等（!==）两个运算符。这两个运算符既比较操作数的值，也比较类型。如下示例代码所示:

```javascript
var x = 10;
var y = '10';

console.log( x == y );// 输出 true
console.log( x === y );// 输出 false
console.log( x != y );// 输出 false
console.log( x !== y );// 输出 true
```

## isNaN() 函数

isNaN() 函数用于判断其参数是否为 NaN（非数字值）。多用于检测使用类型转换函数进行数据类型转换后的结果是否为合法的数字值。

> **注意:** NaN 与任何值（包括自身）进行比较，结果都是 false。不能使用 `==` 或者 `===` 运算符判断某个值是否是 NaN，而只能使用 isNaN() 函数。

```javascript
console.log(isNaN(parseInt('123.45a')));// 输出 true
console.log(isNaN('123.45a'));// 输出 true
console.log(isNaN(Number('123.45a')));// 输出 true
```