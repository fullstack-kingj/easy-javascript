## 什么是 Object 对象

Object 类型与 Array、Math 等一样都是 JavaScript 的引用类型。不过 Object 类型是 JavaScript 中所有类型的父级（所有类型的对象都可以使用 Object 的属性和方法）。

JavaScript 可以通过 Object 的构造函数来创建自定义对象。当以非构造函数形式被调用时，Object 等同于 new Object()。

## Object 对象的方法

Object 对象的方法分为自有方法和原型方法两种:

#### 1. 自有方法

| 方法名 | 描述 |
| --- | --- |
| create() | 指定原型对象和属性来创建一个新的对象 |
| getOwnPropertyNames() | 返回一个数组，它包含了指定对象所有的可枚举或不可枚举的属性名 |
| keys() | 返回一个数组，包含指定对象的所有自有可遍历属性的名称 |

#### 2. 原型方法

| 方法名 | 描述 |
| --- | --- |
| prototype.hasOwnProperty() | 返回一个布尔值，该值指示对象是否包含指定的属性 |