// https://koffi.dev/start

const koffi = require("koffi");

// 加载add.dll
const lib = koffi.load("./native/add.dll");

// 声明dll中的函数
// const add = lib.func("add", "int", ["int", "int"]);
const add = lib.func("int add(int left, int right)");

console.log(add(1, 2));
