var test = true;
if(test){
	test = false;
	alert(test);
}
if(test)
	alert(test);// 有效但容易出错，不建议使用
if(test){
	alert(test);// 推荐使用
}
