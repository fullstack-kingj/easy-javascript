console.log(isNaN(10));// 输出false（10是一个数值）
console.log(isNaN("10"));// 输出false（可以被转换成数值 10）
console.log(isNaN("blue"));// 输出true（不能转换成数值）
console.log(isNaN(true));// 输出false（可以被转换成数值 1）