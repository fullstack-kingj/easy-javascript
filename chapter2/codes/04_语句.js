var test = true;
if(test){
	test = false;
	console.log(test);
}

{
    console.log(test);// 推荐使用
}

if(test)
    console.log(test);// 有效但容易出错，不建议使用
if(test){
    console.log(test);// 推荐使用
}
