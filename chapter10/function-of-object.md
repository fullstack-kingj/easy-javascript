## 定义对象的方法

定义方法就象定义普通的函数，除了它们必须被赋给对象的某个属性。如下示例:

```javascript
var obj = new Object();
obj.sayMe = function(){
	console.log( "this is me." );
}

var obj = {
	name : "javascript",
	sayMe : function(){
		console.log( "this is me." );
	}
}
```

## 调用对象的方法

对象方法的调用类似于对象属性的调用，同样具有以下两种方式:

#### 1. 通过点符号来访问一个对象的方法

```javascript
var obj = new Object();
obj.sayMe = function(){
	console.log( "this is me." );
}

obj.sayMe();// 调用 obj 对象的 sayMe 方法
```

#### 2. 也可以通过方括号访问一个对象的方法

```javascript
var obj = {
	name : "javascript",
	sayMe : function(){
		console.log( "this is me." );
	}
}

obj[ "sayMe" ]();// 访问 obj 对象的 sayMe 方法
```

## 删除对象的方法

可以用 delete 操作符删除对象的方法，如下示例:

```javascript
var obj = {
	name : "javascript",
	sayMe : function(){
		console.log( "this is me." );
	}
}

delete obj.sayMe;// 这里没有 "()"
```

> **注意:** 删除对象的方法时，不需要小括号“()”。如果有小括号则删除失败。