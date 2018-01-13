var arr = [ 1, "a", true];
console.log( arr[1] );// 输出字符串 a
arr[1] = "b";
console.log( arr[1] );// 输出字符串 b

var arr = [];
arr['num'] = 1;
arr['str'] = "a";
arr['bool'] = true;
console.log( arr['str'] );// 输出字符串 a
arr['str'] = "b";
console.log( arr['str'] );// 输出字符串 b
