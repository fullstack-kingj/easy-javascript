/* 逻辑与运算符 */
console.log( false && false );// 输出 false
console.log( false && true );// 输出 false
console.log( true && false );// 输出 false
console.log( true && true );// 输出 true
// 数字值 1 和 0 转换为布尔值 true 和 false
console.log( 0 && 0 );// 输出 0
console.log( 0 && 1 );// 输出 0
console.log( 1 && 0 );// 输出 0
console.log( 1 && 1 );// 输出 1
// 空字符串转换为布尔值 false，非空字符串转换为布尔值 true
console.log( '' && '' );// 输出 ''
console.log( '' && 'longestory' );// 输出 ''
console.log( 'longestory' && '' );// 输出 ''
console.log( 'longestory' && 'longestory' );// 输出 longestory

/* 逻辑或运算符 */
console.log( false || false );// 输出 false
console.log( false || true );// 输出 true
console.log( true || false );// 输出 true
console.log( true || true );// 输出 true
// 数字值 1 和 0 转换为布尔值 true 和 false
console.log( 0 || 0 );// 输出 0
console.log( 0 || 1 );// 输出 1
console.log( 1 || 0 );// 输出 1
console.log( 1 || 1 );// 输出 1
// 空字符串转换为布尔值 false，非空字符串转换为布尔值 true
console.log( '' || '' );// 输出 ''
console.log( '' || 'longestory' );// 输出 longestory
console.log( 'longestory' || '' );// 输出 longestory
console.log( 'longestory' || 'longestory' );// 输出 longestory

/* 逻辑非运算符 */
console.log( !true );// 输出 false
console.log( !1 );// 输出 false
console.log( !'longestory' );// 输出 false