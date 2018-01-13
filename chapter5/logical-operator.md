## 逻辑运算符

给定 A=20 B=10 条件，下述表格描述比较运算符:

| 运算符 | 描述 | 例子 |
| --- | --- | --- |
| && | 逻辑与运算符。如果两个运算数都是 true，则返回 true | A && B 为 true |
| `||` | 逻辑或运算符。如果两个运算数中任何一个是 true，则返回 true | A `||` B 为 true |
| ! | 逻辑非运算符。用于改变运算数的逻辑状态。如果逻辑状态为 true，则通过逻辑非运算符是逻辑状态改为 false | !(A && B) 为 false |

## 逻辑与运算符

| B1 | B2 | 结果 |
| --- | --- | --- |
| false | false | false |
| false | true | false |
| true | false | false |
| true | true | true |

```javascript
console.log( false && true );// 输出 false
console.log( true && true );// 输出 true

// 数字值 1 和 0 转换为布尔值 true 和 false
console.log( 1 && 0 );// 输出 false

// 空字符串转换为布尔值 false，非空字符串转换为布尔值 true
console.log( "" && "longestory" );// 输出 false
```

## 逻辑或运算符

| B1 | B2 | 结果 |
| --- | --- | --- |
| false | false | false |
| false | true | true |
| true | false | true |
| true | true | true |

```javascript
console.log( false || true );// 输出 true
console.log( false || false );// 输出 false

// 数字值 1 和 0 转换为布尔值 true 和 false
console.log( 1 || 0 );// 输出 true

// 空字符串转换为布尔值 false，非空字符串转换为布尔值 true
console.log( "" || "longestory" );// 输出 true
```

## 逻辑非运算符

| B1 | !B1 |
| --- | --- |
| false | true |
| true | false |

```javascript
console.log( !true );// 输出 false

console.log( !1 );// 输出 false

console.log( !"longestory" );// 输出 false
```

> **注意:** 能被转换为 false 的值有 null、0、NaN、空字符串("") 和 undefined。

## 逻辑短路原则

所谓短路原则，就是只要确定运算符前面的运算数为 true 或 false，就可以确定返回结果为 true 或 false。

#### 1. 逻辑与运算符

- 逻辑与运算符前面为 false，结果都将返回逻辑与运算符前面的值。
- 逻辑与运算符前面为 true，结果都将返回逻辑与运算符后面的值。

#### 2. 逻辑或运算符

- 逻辑或运算符前面为 false，结果都将返回逻辑或运算符后面的值。
- 逻辑或运算符前面为 true，结果都将返回逻辑或运算符前面的值。