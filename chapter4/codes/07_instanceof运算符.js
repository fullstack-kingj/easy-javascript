var str = new String('www.longestory.com');
console.log(str instanceof String);// 计算结果为 true, str是 String 类型
console.log(str instanceof Object);// 计算结果为 true, 所有包装类型都是 Object 的实例
console.log(str instanceof Number);// 计算结果为 false