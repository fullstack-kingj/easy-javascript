JavaScript 语言中的逻辑运算符，基本用法是用于布尔类型的计算。具体运算符如下:

- 逻辑与运算符（&&）: 如果两个运算数都是 true，则返回 true
- 逻辑或运算符（||）: 如果两个运算数中任何一个是 true，则返回 true
- 逻辑非运算符（!）: 如果操作数能够转换为 true 则返回 false，否则返回 true。

接下来，我们就针对这三个逻辑运算符分别进行学习。

## 逻辑与运算符

使用逻辑与运算符时，如果两个操作数都是布尔类型的话，只有当两个操作数都为 true 时，返回的结果才为 true，否则都为 false。如下示例代码所示:

```javascript
console.log( false && false );// 输出 false
console.log( false && true );// 输出 false
console.log( true && false );// 输出 false
console.log( true && true );// 输出 true
```

但逻辑与运算符也可以被应用在非布尔类型的操作数。如果第一个操作数转换成布尔类型后的值为 false 的话，则返回结果为第一个操作数。否则返回的结果为第二个操作数。如下示例代码所示:


```javascript
// 数字值 1 和 0 转换为布尔值 true 和 false
console.log( 0 && 0 );// 输出 0
console.log( 0 && 1 );// 输出 0
console.log( 1 && 0 );// 输出 0
console.log( 1 && 1 );// 输出 1

// 空字符串转换为布尔值 false，非空字符串转换为布尔值 true
console.log( '' && '' );// 输出 ''
console.log( '' && 'longestory' );// 输出 ''
console.log( 'longestory' && '' );// 输出 ''
console.log( 'longestory' && 'longestory' );// 输出 longestory
```

## 逻辑或运算符

使用逻辑或运算符时，如果两个操作数都是布尔类型的话，只有当其中一个操作数都为 true 时，返回的结果才为 true，否则都为 false。如下示例代码所示:

```javascript
console.log( false || false );// 输出 false
console.log( false || true );// 输出 true
console.log( true || false );// 输出 true
console.log( true || true );// 输出 true
```

但逻辑与运算符也可以被应用在非布尔类型的操作数。如果第一个操作数转换成布尔类型后的值为 true 的话，则返回结果为第一个操作数。否则返回的结果为第二个操作数。如下示例代码所示:


```javascript
// 数字值 1 和 0 转换为布尔值 true 和 false
console.log( 0 || 0 );// 输出 0
console.log( 0 || 1 );// 输出 1
console.log( 1 || 0 );// 输出 1
console.log( 1 || 1 );// 输出 1
// 空字符串转换为布尔值 false，非空字符串转换为布尔值 true
console.log( '' || '' );// 输出 ''
console.log( '' || 'longestory' );// 输出 longestory
console.log( 'longestory' || '' );// 输出 longestory
console.log( 'longestory' || 'longestory' );// 输出 longestory
```

## 逻辑非运算符

逻辑非运算符的作用，就是如果操作数可以转换成 true 的话，则返回结果为 false，否则返回结果为 true。如下示例代码所示:

```javascript
console.log( !true );// 输出 false
```

这里需要注意的是，如果操作数的类型不是布尔类型的话，使用逻辑非运算符进行计算的结果是布尔类型。如下示例代码所示:

```javascript
console.log( !1 );// 输出 false
console.log( !'longestory' );// 输出 false
```

> **说明:** 能被转换为 false 的值有 null、0、NaN、空字符串("") 和 undefined。

## 逻辑短路原则

所谓短路原则，就是只要确定运算符前面的运算数为 true 或 false，就可以确定返回结果为 true 或 false。

#### 1. 逻辑与运算符

- 逻辑与运算符前面为 false，结果都将返回逻辑与运算符前面的值。
- 逻辑与运算符前面为 true，结果都将返回逻辑与运算符后面的值。

#### 2. 逻辑或运算符

- 逻辑或运算符前面为 false，结果都将返回逻辑或运算符后面的值。
- 逻辑或运算符前面为 true，结果都将返回逻辑或运算符前面的值。