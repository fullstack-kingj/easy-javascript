// 定义常量 MY_CONST 并赋值 7
const MY_CONST = 7;

// 在 Firefox 和 Chrome 这会失败但不会报错(在 Safari 这个赋值会成功)
MY_CONST = 20;
console.log(MY_CONST); // 输出 7
const MY_CONST = 20; // 尝试重新声明会报错
var MY_CONST = 20;// MY_CONST 保留给上面的常量，这个操作会失败
console.log(MY_CONST);// MY_CONST 依旧为 7