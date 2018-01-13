var arr = [ 1, "a", true];
for( var i in arr ){
	console.log( i + " : " + arr[i] );
}

var arr = [];
arr[100] = "a";
for( var i in arr ){
	console.log( i + " : " + arr[i] );
}
