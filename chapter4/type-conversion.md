数据类型转换，也是使用 JavaScript 语言编程进行遇到的操作，尤其是隐世类型转换。

## 隐式类型转换

由于 JavaScript 语言是弱类型/松散类型的，在任何情况下都可以强制转换。

#### 1. 转换为字符串: 将一个值加上空字符串可以轻松转换为字符串类型。

```javascript
'' + 10 === '10'; // true
```

#### 2. 转换为数字: 使用一元的加号操作符，可以把字符串转换为数字。

```javascript
+'10' === 10; // true
```

#### 3. 转换为布尔值: 使用否操作符两次，可以把一个值转换为布尔型。

```javascript
!!'foo'; // true
```

上述示例代码，想要正确执行的话，请使用 `console.log()` 方法进行输出。

## 显式类型转换

#### 1. 使用 JavaScript 的包装类型的构造函数进行类型转换。

| 构造函数 | 描述 |
| --- | --- |
| Number() | 将字符串或布尔值转换为数字，如果包含非法字符，则返回 NaN |
| String() | 将数字或布尔值转换为字符串 |
| Boolean() | 将字符串或数字转换为布尔值 |

这里需要注意的是，任何不能正确转换为数字值的内容，转换成 Number 类型后得到的结果都是 NaN。如下示例代码所示:

```javascript
var str = 'www.longestory.com';
console.log(Number(str));// 输出的结果为 NaN
```

而布尔类型的 true 转换成数字值为 1，false 转换成数字值为 0.如下示例代码所示:

```javascript
console.log(Number(true));// 1
console.log(Number(false));// 0
```

任何其他类型转换成 String 类型后，内容是没有变化的，如下示例代码所示:

```javascript
console.log(String(100));// String 类型的 100
console.log(String(100.11));// String 类型的 100.11
console.log(String(true));// String 类型的 true
```

#### 2. 使用数据类型的转换函数进行类型转换。

| 函数 | 描述 |
| --- | --- |
| toString() | 将数字或布尔值转换为字符串 |
| parseInt() | 将字符串或布尔值转换为整数类型 |
| parseFloat() | 将字符串或布尔值转换为浮点类型 |

所有类型都提供了 `toString()` 方法，用于转换成字符串类型。如下示例代码所示:

```javascript
var num = 100;
console.log(num.toString());// String 类型的 100
```

需要注意的是，我们需要了解 parseInt() 函数和 parseFloat() 函数的区别。

无论转换之前的数字是整数还是浮点数，parseInt() 函数只会得到整数部分。如下示例代码所示:

```javascript
var str1 = '100';
var str2 = '100.11';

console.log(parseInt(str1));// 100
console.log(parseInt(str2));// 100
```

而 parseFloat() 函数则会根据实际情况而定。如果是整数，则得到的也是整数；如果是浮点数，则得到的也是浮点数。如下示例代码所示:

```javascript
var str1 = '100';
var str2 = '100.11';

console.log(parseFloat(str1));// 100
console.log(parseFloat(str2));// 100.11
```