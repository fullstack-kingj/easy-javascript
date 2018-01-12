在 JavaScript 中，对应原始类型提供了包装类型。通过包装类型可以创建原始类型的对象（后面的课程学习）。

由于 JavaScript 是区分大小写的，从写法上来说，原始类型是全部小写，包装类型则是全部大写。

一般不建议使用包装类型定义对应的数据类型，但包装类型提供了操作相应值的方法。

> **说明:** 包装类型涉及到对象的概念，具体技术内容会在后面的课程学习。

## Boolean 类型

Boolean 类型是原始类型 boolean 类型对应的包装类型。

```javascript
var bool = new Boolean(true);
```

Boolean 类型与 boolean 类型的区别:

- typeof 运算符对原始类型返回 boolean，而对包装类型为 object。
- instanceof 运算符测试 Boolean 类型返回 true，而测试 boolean 类型返回 false。

> **注意:** 不建议使用 Boolean 类型。

## Number 类型

Number 类型是原始类型 number 类型对应的包装类型。

```javascript
var num = new Number(10);
```

Number 类型与 number 类型的区别:

- typeof 运算符对原始类型返回 number，而对包装类型为 object。
- instanceof 运算符测试 Number 类型返回 true，而测试 number 类型返回 false。

> **注意:** 不建议使用 Number 类型。

## String 类型

String 类型是原始类型 string 类型对应的包装类型。

```javascript
var str = new String("hello world");
```

String 类型与 string 类型的区别:

- typeof 运算符对原始类型返回 string，而对包装类型为 object。
- instanceof 运算符测试 String 类型返回 true，而测试 string 类型返回 false。

> **注意:** 不建议使用 String 类型。

## instanceof 运算符

instanceof 运算符的左操作数是一个包装类型的变量，右操作数是对应的数据类型。如果左侧的变量是右侧的数据类型，则表达式返回 true；否则返回 false。

例如下述示例代码:

```javascript
var str = "this is message";
str instanceof String;// 计算结果为 true, str是String类型
str instanceof Object;// 计算结果为 true, 所有包装类型都是Object的实例
str instanceof Number;// 计算结果为 false
```

> **注意:** 所有对象都是 Object 类型的实例对象，通过 instanceof 运算符判断一个对象是否为具体数据类型，也包含"父类"。（后面课程会学习）