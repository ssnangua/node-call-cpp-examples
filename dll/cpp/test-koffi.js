// https://koffi.dev/start

const koffi = require("koffi");

// 加载add.dll
const lib = koffi.load("./add.dll");

// 声明dll中的函数
// const add = lib.func("add", "double", ["double", "double"]);
const add = lib.func("double add(double left, double right)");

console.log(add(1, 2.5));
