// https://github.com/zhangyuang/node-ffi-rs

const rs = require("ffi-rs");
const { I32 } = rs.DataType;

rs.open({ library: "dll", path: "./native/add.dll" });

const { add } = rs.define({
  add: {
    library: "dll",
    retType: I32,
    paramsType: [I32, I32],
  },
});

console.log(add([1, 2]));

rs.close("dll");
