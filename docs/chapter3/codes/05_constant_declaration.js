/*
 * 在ECMAScript 5版本前，没有定义常量的语法。
 * 使用var关键字定义变量，人为规定值不改变，也可以是不严格的常量。
 */
var MY_CONST = 10;

const MY_FAV = 100;

const FOO; // SyntaxError: missing = in const declaration