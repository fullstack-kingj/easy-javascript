var longestory = 'longestory';// 将字符串 "longestory" 赋值给变量 longestory

var obj = {}
obj.x = 1;// 将数字值 1 赋值给 obj 对象的 x 属性

var num = 0;// 定义一个操作数
var startTime1 = new Date().getTime();// 获取代码执行之前的当前时间
// 循环 1000000 次，这样更好地测试结果
for (var i=0;i<1000000;i++) {
    num = num + 1;
}
var endTime1 = new Date().getTime();// 获取代码执行之后的当前时间
console.log(endTime1 - startTime1);// 输出用时

var num = 0;// 定义一个操作数
var startTime2 = new Date().getTime();// 获取代码执行之前的当前时间
// 循环 1000000 次，这样更好地测试结果
for (var i=0;i<1000000;i++) {
    num += 1;
}
var endTime2 = new Date().getTime();// 获取代码执行之后的当前时间
console.log(endTime2 - startTime2);// 输出用时