/* 逻辑与运算符 */
console.log( false && true );// 输出 false
console.log( true && true );// 输出 true
// 数字值 1 和 0 转换为布尔值 true 和 false
console.log( 1 && 0 );// 输出 false
// 空字符串转换为布尔值 false，非空字符串转换为布尔值 true
console.log( "" && "neworigin" );// 输出 false

/* 逻辑或运算符 */
console.log( false || true );// 输出 true
console.log( false || false );// 输出 false
// 数字值 1 和 0 转换为布尔值 true 和 false
console.log( 1 || 0 );// 输出 true
// 空字符串转换为布尔值 false，非空字符串转换为布尔值 true
console.log( "" || "neworigin" );// 输出 true

/* 逻辑非运算符 */
console.log( !true );// 输出 false
console.log( !1 );// 输出 false
console.log( !"neworigin" );// 输出 false