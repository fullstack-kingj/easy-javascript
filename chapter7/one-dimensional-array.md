## 定义数组

数组的最大作用就是用于存储多个值。定义数组分别两种形式:

#### 1. 使用数组字面量方式

```javascript
var arr1 = [];
var arr2 = [ 1, "a", true ];
```

#### 2. 使用数组关键字方式

```javascript
var arr1 = Array();
var arr2 = Array( 1, "a", true );
```

#### 3. 使用构造函数方式

```javascript
var arr1 = new Array();
var arr2 = new Array( 1, "a", true );
```

> **注意:** 在一个数组中的不同元素可以是不同数据类型。

## 索引数组

索引数组就是存储元素的位置使用数字值来表示，一般称之为下标或角标。具体创建方式如下述代码:

```javascript
var arr = [];
arr[0] = 1;
arr[1] = "a";
arr[2] = true;
```

> **注意:** 索引数组的索引值是从 0 开始的。

## 关联数组

关联数组就是存储元素的位置使用字符串来表示，一般称之为名称（name或key）。具体创建方式如下述代码:

```javascript
var arr = [];
arr['num'] = 1;
arr['str'] = "a";
arr['bool'] = true;
```

> **注意:** 关联数组的名称（name或key）是字符串，必需使用单引号或双引号将其包裹。

## 稀疏数组

稀疏数组就是包含 0 开始的不连续索引的数组。具体创建方式如下述代码:

```javascript
var arr = Array( 10 );// 数组没有任何元素，数组的长度为 10

var arr = [];// 创建一个空数组
arr[100] = "a";// 向下标为 100 的位置添加一个元素 a
```

> **注意:** 上述代码中的第一行，并不是创建一个数组包含一个元素 10，而是创建一个不包含任何元素的数组长度为 10。

## 数组的长度

每个数组都有一个 length 属性，表示数组的长度。

#### 1. 如果为非稀疏数组的话，length 属性的值表示当前数组包含元素的个数。

```javascript
var arr1 = [ 1, "a", true ];
console.log( arr1.length );// 输出 3
```

#### 2. 如果为稀疏数组的话，length 属性的值大于当前数组包含元素的个数。

```javascript
var arr2 = [];
arr2[14] = "a";
console.log( arr2.length );// 输出 15
```

## 数组元素的读取

数组的主要作用是用于存储和读取数据信息，之前已经对数组存储数据信息掌握了。下面来看看如何从数组中读取指定的元素:

```javascript
var arr = [ 1, "a", true];
console.log( arr[1] );// 输出字符串 a

var arr = [];
arr['num'] = 1;
arr['str'] = "a";
arr['bool'] = true;

console.log( arr['str'] );// 输出字符串 a
```

## 数组元素的修改

不仅可以从数组中读取指定的元素，还可以根据需求修改数组中指定的元素值。

```javascript
var arr = [ 1, "a", true];
console.log( arr[1] );// 输出字符串 a
arr[1] = "b";
console.log( arr[1] );// 输出字符串 b

var arr = [];
arr['num'] = 1;
arr['str'] = "a";
console.log( arr['str'] );// 输出字符串 a
arr['str'] = "b";
console.log( arr['str'] );// 输出字符串 b
```

## 数组元素的删除

不仅可以根据需求修改数组中指定的元素值，也可以删除数组中指定的元素值。数组删除指定元素值使用 delete 关键字。

```javascript
var arr = [ 1, "a", true];
delete arr[1];
console.log( arr[1] );// 输出字符串 undefined
```

> **注意:** 上述代码使用 delete 关键字执行删除数组元素值的操作时，并不影响数组的长度。

```javascript
var arr = [ 1, "a", true];
delete arr[1];
console.log( arr.length );// 输出 3
```

## 遍历数组元素

使用 for 语句是遍历数组元素最常见的方法:

```javascript
var arr = [ 1, "a", true];
for( var i = 0; i < arr.length; i++ ){
	console.log( arr[i] );
}
```

也可以从数组的最后向前（倒序）进行遍历:

```javascript
var arr = [ 1, "a", true];
for( var i = arr.length-1; i >= 0; i-- ){
	console.log( arr[i] );
}
```

### for in 语句

在 ECMAScript 5 中新增了 for in 语句，同样也可以用于遍历数组:

```javascript
var arr = [ 1, "a", true];
for( var i in arr ){
	console.log( i + " : " + arr[i] );
}
```

> **注意:**
> 
> - for 关键字后定义的变量 i 表示当前数组的索引值。
> - for in 语句不仅会遍历数组的所有元素，还有一些数组自带的属性。一般建议使用 for 语句进行数组遍历。

for in 语句还可以用于遍历稀疏数组，循环的每次将一个有效元素返回。不存在的索引将不会遍历到:

```javascript
var arr = [];
arr[100] = "a";
for( var i in arr ){
	console.log( i + " : " + arr[i] );
}
```