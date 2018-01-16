数组是值的有序集合。数组中的每个值叫做一个元素，而每个元素在数组中都有一个唯一的位置。这个位置用数字表示，叫做索引数据；用字符串表示，叫做关联数组。

JavaScript 数组是无类型的: 数组的元素可以是任何类型，例如字符串、数字值、布尔值等，而且每个数组中的不同元素可能是不同类型。

JavaScript 数组是动态的: 根据需要，可以动态地向数组插入新的元素，或者从数组中删除指定的元素。

## 定义数组

数组的最大作用就是用于存储多个值。定义数组分别三种形式:

### 1. 使用数组字面量方式

使用数组字面量方式，如下示例代码所示:

```javascript
var arr = [];
```

上述示例代码，表示定义了一个空数组。所谓空数组，就是没有包含任何元素的数组。

当然，我们也可以在定义数组时，同时为数组定义内部的元素。如下示例代码所示:

```javascript
var arr = [ 1, "a", true ];
```

> **说明:** 在一个数组中的不同元素可以是不同数据类型。

这里需要注意的是，虽然数组具有字面量方式的定义，但与原始类型的字面量方式的定义不同。如果使用 typeof 运算符判断数组的结果为 object，如下示例代码所示:

```javascript
console.log(typeof arr);// object
```

所以，数组只能使用 instanceof 运算符才能准确判断其类型，如下示例代码所示:

```javascript
console.log(typeof arr);// object
```

### 2. 使用数组函数方式

使用数组函数方式,如下示例代码所示:

```javascript
var arr = Array();
```

上述示例代码，表示定义了一个空数组。

当然，我们也可以在定义数组时，同时为数组定义内部的元素。如下示例代码所示:

```javascript
var arr = Array( 1, "a", true);
```

上述示例代码，表示定义一个 arr 数组，其内部元素分别为 1、'a' 和 true。但需要注意的是如下示例代码所示的定义方式:

```javascript
var arr = Array( 10 );
```

上述示例代码，表示定义了一个长度为 10 的空数组，并不是表示数组元素为 10。

> **说明:** 我们并不推荐这种方式定义数组。

### 3. 使用构造函数方式

使用构造函数方式，如下示例代码所示:

```javascript
var arr = new Array();
```

上述示例代码，表示定义了一个空数组。

当然，我们也可以在定义数组时，同时为数组定义内部的元素。如下示例代码所示:

```javascript
var arr = new Array( 1, "a", true);
```

上述示例代码，表示定义一个 arr 数组，其内部元素分别为 1、'a' 和 true。但需要注意的是如下示例代码所示的定义方式:

```javascript
var arr = new Array( 10 );
```

上述示例代码，表示定义了一个长度为 10 的空数组，并不是表示数组元素为 10。

## 数组种类

### 索引数组

索引数组就是存储元素的位置使用数字值来表示，一般称之为索引值。具体创建方式如下示例代码所示:

```javascript
var arr = [];
arr[0] = 1;
arr[1] = "a";
arr[2] = true;
```

> **注意:** 索引数组的索引值是从 0 开始的。

### 关联数组

关联数组就是存储元素的位置使用字符串来表示，一般称之为名称（name或key）。具体创建方式如下示例代码所示:

```javascript
var arr = [];
arr['num'] = 1;
arr['str'] = "a";
arr['bool'] = true;
```

> **注意:** 关联数组的名称（name或key）是字符串，必需使用单引号或双引号将其包裹。

关联数组这个概念，并不属于 ECMAScript 5 这个版本的标准规范内容。但实际测试的结果表示，这种数组在 JavaScript 语言中是可以使用的。所以，为了方便记忆，我们参考了其他编程语言中的描述。

```javascript
var arr = [];
arr['num'] = 1;
arr['str'] = "a";
arr['bool'] = true;

console.log(arr.length);// 0
```

通过上述示例代码的测试，我们得知定义的关联数组的长度为 0。长度与数组内部元素的数量是不对应的，这表明了 JavaScript 语言中的标准规范并没有提供这种数组。

### 稀疏数组

稀疏数组就是包含 0 开始的不连续索引的数组。具体创建方式如下示例代码所示:

```javascript
var arr = Array( 10 );// 数组没有任何元素，数组的长度为 10

var arr = new Array( 10 );// 数组没有任何元素，数组的长度为 10

var arr = [];// 创建一个空数组
arr[100] = "a";// 向下标为 100 的位置添加一个元素 a
```

> **注意:** 上述代码中的第一条和第二条语句，并不是创建一个数组包含一个元素 10，而是创建一个不包含任何元素的数组长度为 10。

## 数组的长度

每个数组都有一个 length 属性，表示数组的长度（即数组元素的个数）。

### 如果为非稀疏数组的话，length 属性的值表示当前数组包含元素的个数。

```javascript
var arr1 = [ 1, "a", true ];
console.log( arr1.length );// 输出 3
```

### 如果为稀疏数组的话，length 属性的值大于当前数组包含元素的个数。

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