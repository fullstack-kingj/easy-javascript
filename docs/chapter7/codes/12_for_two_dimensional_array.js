var arr1 = [  [11,12,13],  [21,22,23],  [31,32,33]  ] ;
console.log(  arr1[0][0]  );	// 值为11
arr1[1][2] = 230;// 把23更改为230

for( var i = 0; i < arr1.length; i++ ){
    for( var j = 0; j < arr1[i].length; j++ ){
 		console.log( arr1[i][j] );
    }
}
