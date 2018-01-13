## 预定义函数

JavaScript 预定义了一组函数，又称为全局函数，允许直接使用。

| 函数 | 描述 |
| --- | --- |
| eval() | 对一串字符串形式的JavaScript代码字符求值 |
| uneval() | 创建的一个Object的源代码的字符串表示 |
| isFinite() | 判断传入的值是否是有限的数值 |
| isNaN() | 判断一个值是否不是数字值 |
| parseInt() | 解析字符串参数，并返回指定的整数 |
| parseFloat() | 解析字符串参数，并返回一个浮点数 |
| decodeURI() | 对已编码的统一资源标识符(URI)进行解码，并返回其非编码形式 |
| encodeURI() | 对统一资源标识符(URI)进行编码，并返回编码后的URI字符串 |

## eval() 函数

eval() 函数用于执行以字符串（String）形式出现的 JavaScript 代码。此函数可以实现动态的执行 JavaScript 代码。具体用法如下述代码:

```javascript
// 定义一个字符串，内容为JavaScript代码
var js = "console.log('this is javascript')";

// 通过 eval()函数执行上述内容
eval(js);// 输出 this is javascript
```

## 字符编码与解码

encodeURI() 函数可把字符串作为 URI 进行编码。对以下在 URI 中具有特殊含义的 ASCII 标点符号，encodeURI() 函数是不会进行转义的:

```
, / ? : @ & = + $ # 
```

decodeURI() 函数可对 encodeURI() 函数编码过的 URI 进行解码。

decodeURI() 函数和encodeURI() 函数的具体用法如下述代码:

```javascript
var uri = "http://www.longestory.com/Web前端开发工程师";
var encode = encodeURI( uri );
// 输出 http://www.longestory.com/Web%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88
console.log( encode );
var decode = decodeURI( encode );
// 输出 http://www.longestory.com/Web前端开发工程师
console.log( decode );
```

对以下在 URI 中具有特殊含义的 ASCII 标点符号，可以使用 encodeURIComponent() 函数和 decodeURIComponent() 函数。

```javascript
var uri = "http://www.longestory.com/font-end-developer";
var encode = encodeURIComponent( uri );
// 输出 http%3A%2F%2Fwww.longestory.com%2Ffont-end-developer
console.log( encode );
var decode = decodeURIComponent( encode );
// 输出 http://www.longestory.com/font-end-developer
console.log( decode );
```