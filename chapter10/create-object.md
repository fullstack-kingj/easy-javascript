## 对象初始化器方式

使用对象初始化器也被称作通过字面值创建对象。通过对象初始化器创建对象的语法如下:

```javascript
var obj = {
	property_1: value_1, // property_# 作为一个标示符
	2: value_2, // 标示符可以是一个数字值
	// ...,
	"property n": value_n // 标示符也可以是一个字符串
}; 
```

- obj 是创建的对象名称。
- 标示符和值都是可选的。

## 构造函数方式

#### 1. 通过 JavaScript 提供的预定义类型的构造函数来创建对象，如下示例:

```javascript
var date = new Date();// 创建一个 Date 对象
var str = new String("this is string.");// 创建一个 String 对象
var num = new Number(100);// 创建一个 Number 对象
```

#### 2. 通过 JavaScript 提供的 Object 类型的构造函数来创建自定义对象，如下示例:

```javascript
var obj = new Object();// 创建一个自定义对象
```

## Object.create() 方法

Object.create() 方法创建一个拥有指定原型和若干个指定属性的对象。语法如下:

```javascript
Object.create(proto, [ propertiesObject ])
```

参数:

- proto 参数: 一个对象，作为新创建对象的原型。
- propertiesObject 参数: 可选。该参数对象是一组属性与值，该对象的属性名称将是新创建的对象的属性名称，值是属性描述符。

通过 Object.create() 方法创建一个新对象，同时扩展自有属性:

```javascript
var flyer = {
	name : "A380",
	speed : 1000 
}
var plane = Object.create( flyer,{
	capacity : { 
		value : 555,
		writable : true,
		enumerable : true 
	}
});
```

Object.create() 方法的一些特殊用法:

#### 1. 创建一个原型为 null 的空对象

```javascript
var obj = Object.create( null );
```

#### 2. 实现子类型构造函数的原型继承父类型构造函数的原型

```javascript
Sub.prototype = Object.create( Super.prototype );
```

#### 3. 创建普通空对象

```javascript
var obj = Object.create( Object.prototype );
// 等效于var o={}
```