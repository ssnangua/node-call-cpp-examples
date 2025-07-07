// https://github.com/node-ffi-napi/node-ffi-napi

const ffi = require("ffi-napi");

// 加载add.dll
const { add } = new ffi.Library("./add.dll", {
  // 声明dll中的函数
  // 函数名: [返回值类型, [参数类型, ...]]
  add: ["double", ["double", "double"]],
});

console.log(add(1, 2.5));
