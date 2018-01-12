## 什么是常量

常量就是一个只读（read-only）的变量。常量与变量类似，同样用于存储数据信息。只是常量的数据一旦被定义，便不能被修改。

> **注意:**
> 
> - 常量名习惯使用全大写形式。
> - ECMAScript 5 新增了声明常量使用的关键字 `const`。
> - 如果省略 `const` 关键字，JavaScript 会认为是一个变量。

## 常量的声明

在 ECMAScript 5 版本前，没有定义常量的语法。使用var关键字定义变量，人为规定值不改变，也可以是不严格的常量。

```javascript
var MY_CONST = 10;
```

这种方式只是人为规定常量，并不是语法规定。所以，这种方式并不严谨！

在 ECMAScript 5 版本后，提供了关键字 `const` 定义常量。

```javascript
const MY_FAV = 100;
```

> **注意:** 常量的声明，必须进行初始化操作，否则会报错误。

```javascript
const FOO; // SyntaxError: missing = in const declaration
```

上述示例代码的运行结果为报错，具体的报错信息如下图所示:

![](images/02.png)

## 常量的使用

常量一旦被声明并初始化，值并不能被改变。常量的使用只能进行读取操作:

```javascript
// 定义常量MY_FAV并赋值7
const MY_FAV = 7;

// 在 Firefox 和 Chrome 这会失败但不会报错(在 Safari这个赋值会成功)
MY_FAV = 20;
console.log(MY_FAV); // 输出 7
const MY_FAV = 20; // 尝试重新声明会报错 
var MY_FAV = 20;// MY_FAV 保留给上面的常量，这个操作会失败
console.log(MY_FAV);// MY_FAV 依旧为7
```

> **注意:** 上述示例代码具有时效性，浏览器版本不同，结果可能不同。