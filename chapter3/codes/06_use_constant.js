// 定义常量MY_FAV并赋值7
const MY_FAV = 7;

// 在 Firefox 和 Chrome 这会失败但不会报错(在 Safari这个赋值会成功)
MY_FAV = 20;

// 输出 7
console.log("my favorite number is: " + MY_FAV);

// 尝试重新声明会报错 
const MY_FAV = 20;

//  MY_FAV 保留给上面的常量，这个操作会失败
var MY_FAV = 20; 

// MY_FAV 依旧为7
console.log("my favorite number is " + MY_FAV);