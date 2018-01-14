## 定义对象的属性

一个 JavaScript 对象有很多属性。一个对象的属性可以被解释成一个附加到对象上的变量。对象的属性和普通的 JavaScript 变量基本没什么区别，仅仅是属性属于某个对象。

#### 1. 可以通过点符号来访问一个对象的属性

```javascript
var myCar = new Object();

myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;
```

#### 2. JavaScript 对象的属性也可以通过方括号访问

对象有时也被叫作关联数组, 因为每个属性都有一个用于访问它的字符串值。

```javascript
var myCar = new Object();

myCar["make"] = "Ford";
myCar["model"] = "Mustang";
myCar["year"] = 1969;
```

## 访问对象的属性

#### 1. JavaScript可以通过点符号来访问一个对象的属性

```javascript
var emp = { ename : 'Tom', salary : 3500 };

emp.ename = 'Tommy';// 修改属性的值
console.log(emp.ename);// 获取属性的值
```

#### 2. JavaScript 对象的属性也可以通过方括号访问

```javascript
var emp = { ename : 'Tom', salary : 3500 };

emp[ 'ename' ] = 'Tony';// 修改属性的值
console.log(emp[ "ename" ]);// 获取属性的值
```

## 遍历（枚举）属性

JavaScript 提供了三种原生方法用于遍历或枚举对象的属性:

- for…in 循环: 该方法依次访问一个对象及其原型链中所有可枚举的属性。
- Object.keys( object ) 方法: 该方法返回一个对象 o 自身包含（不包括原型中）的所有属性的名称的数组。
- Object.getOwnPropertyNames( object ) 方法: 该方法返回一个数组，它包含了对象 o 所有拥有的属性（无论是否可枚举）的名称。

## 属性访问出错

当不确定对象是否存在、对象的属性是否存在时，可以使用错误处理结构 try…catch 语句块来捕捉抛出的错误，避免程序异常终止。

```javascript
//访问未声明的变量
console.log( emp );// ReferenceEerror

//访问未声明的属性 
var emp = { };
console.log( emp.ename );// undefined

//访问未声明的属性的成员
console.log( emp.ename.length );// TypeError 
```

## 检测对象的属性

可以使用如下四种方法检测对象中是否存在指定属性:

#### 1. 使用 in 关键字

```javascript
console.log( 'ename' in emp );
```

#### 2. 使用 Object 对象的 hasOwnProperty() 方法

```javascript
console.log( emp.hasOwnProperty( 'ename' ));
```

#### 3. 使用 undefined 进行判断

```javascript
console.log( emp.ename === undefined );
```

#### 4. 使用 if 语句进行判断

```javascript
if( emp.ename ){ console.log( 'ename属性存在' ); }
```

## 删除对象的属性

可以用 delete 操作符删除一个不是继承而来的属性。如下示例:

```javascript
// 创建一个 myobj 对象，具有 a 和 b 属性
var myobj = new Object;
myobj.a = 5;
myobj.b = 12;

// 删除 myobj 对象的自有属性 a
delete myobj.a;
```