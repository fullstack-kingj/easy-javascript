undefined 和 null 值都是 JavaScript 中的特殊类型。在实际开发中，这两个特殊类型也是经常出现错误的地方。尤其是 null 值。

## undefined

JavaScript 中有两个表示空的数据类型，undefined 和 null，其中比较有用的是 undefined。

undefined 类型只有一个值，就是 undefined。

下列情况会返回 undefined:

- 访问未修改的变量 undefined。
- 没有定义 return 表达式的函数隐式返回 undefined。
- return 表达式没有显式的返回任何内容。
- 访问不存在的属性。
- 任何被设置为 undefined 值的变量。

## null

null 值是 JavaScript 中的一个特殊类型，用于表示一个不再指向任何内存空间地址的变量。

null 值多用于释放 JavaScript 中的资源（变量、数组和函数等）。

> **注意:** 使用 typeof 运算符计算 null 的话，返回的是 object。

```javascript
var longestory = null;
console.log(longestory);// 输出 null
```

## undefined 与 null

undefined 与 null 的共同点是它们都是原始类型，保存在栈中。

而不同点是:

- undefined: 表示变量声明但未被赋值，是所有未赋值变量的默认值。一般很少主动使用。
- null: 表示一个没有指向任何内存地址的变量，将来可能指向某个具体内存地址。一般用于主动释放资源。