undefined 和 null 值都是 JavaScript 语言中的特殊类型。在实际开发中，这两个特殊类型也是经常出现错误的地方。尤其是 null 值。

## undefined

JavaScript 语言中有两个表示空的数据类型，undefined 和 null，其中比较有用的是 undefined。

Undefined 类型中只有一个值，就是 undefined 值。

下列情况会返回 undefined:

1. 只定义但未初始化的变量的值为 undefined
2. 定义并初始化值为 undefined 的变量
3. 函数中 return 语句的默认值为 undefined
4. 函数中 return 语句设置值为 undefined
5. 访问不存在的对象的属性，得到的结果为 undefined

> **说明:** 上述得到 undefined 值的情况，我们会在相应的内容中讲解。

## null

null 值是 JavaScript 语言中的一个特殊类型，用于表示一个不再指向任何内存空间地址的变量。

null 值多用于释放 JavaScript 语言中的资源（变量、数组和函数等）。

> **注意:** 使用 typeof 运算符计算 null 的话，返回的是 object。但 null 值并非 Object 类型。

```javascript
var longestory = null;
console.log(longestory);// 输出 null
```

## undefined 与 null

undefined 与 null 的共同点是它们都是原始类型，保存在栈中。

而不同点是:

- undefined: 表示变量声明但未被赋值，是所有未赋值变量的默认值。一般很少主动使用。
- null: 表示一个没有指向任何内存地址的变量，将来可能指向某个具体内存地址。一般用于主动释放资源。