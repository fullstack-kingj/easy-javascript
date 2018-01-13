## 比较运算符

给定 A=20 B=10 条件，下述表格描述比较运算符:

| 运算符 | 描述 | 例子 |
| --- | --- | --- |
| == | 检查两个运算数的值是否相等，如果相等则结果为 true | A == B 为 false |
| != | 检查两个运算数的值是否不等，如果不等则结果为 true | A != B 为 true |
| > | 检查左边运算数是否大于右边运算数，如果是则结果为 true | A > B 为 true |
| >= | 检查左边运算数是否大于或等于右边运算数，如果是则结果为 true | A >= B 为 true |
| < | 检查左边运算数是否小于右边运算数，如果是则结果为 true | A < B 为 false |
| <= | 检查左边运算数是否小于或等于右边运算数，如果是则结果为 true | A <= B 为 false |

## 全等与不全等

| 运算符 | 描述 |
| --- | --- |
| === | 两个运算数的值相等并且类型相同时，结果为 true |
| !== | 两个运算数的值不等或者类型不同时，结果为 true |

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