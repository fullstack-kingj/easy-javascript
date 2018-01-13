var uri1 = "http://www.longestory.com/Web前端开发工程师";
var encode = encodeURI( uri1 );
// 输出 http://www.longestory.com/Web%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88
console.log( encode );
var decode = decodeURI( encode );
// 输出 http://www.longestory.com/Web前端开发工程师
console.log( decode );

var uri2 = "http://www.longestory.com/font-end-developer";
var encode = encodeURIComponent( uri2 );
// 输出 http%3A%2F%2Fwww.longestory.com%2Ffont-end-developer
console.log( encode );
var decode = decodeURIComponent( encode );
// 输出 http://www.longestory.com/font-end-developer
console.log( decode );
