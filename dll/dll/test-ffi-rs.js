// https://github.com/zhangyuang/node-ffi-rs

const rs = require("ffi-rs");
const { Double } = rs.DataType;

rs.open({ library: "dll", path: "./add.dll" });

const { add } = rs.define({
  add: {
    library: "dll",
    retType: Double,
    paramsType: [Double, Double],
  },
});

console.log(add([1, 2.5]));

rs.close("dll");
