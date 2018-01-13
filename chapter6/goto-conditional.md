JavaScript 中另一种语句就是跳转语句。从名称就可以看出，它使得 JavaScript 代码的执行可以从一个位置到另一个位置。

跳转语句提供了 break 和 continue 两种，用于跳转当前的循环或开始下一次的循环等。

## break 语句

break 语句是中断语句，用于终止循环语句或开关语句。

#### 1. 终止循环语句，例如 while、do while 以及 for 语句等

```javascript
for( var i = 0; i < 10; i++ ){
	if( i == 5 ){
		break;
	}
	console.log( i );
}
```

#### 2. 终止开关语句（switch case）

## continue 语句

continue 语句是连续语句，用于重新开始 while、do while 和 for 语句。

```javascript
for( var i = 0; i < 10; i++ ){
	if( i == 5 ){
		continue;
	}
	console.log( i );
}
```

上述代码的执行结果为 1 2 3 4 6 7 8 9。当 i 等于 5 时，结束本次循环，开始下一次的循环执行。