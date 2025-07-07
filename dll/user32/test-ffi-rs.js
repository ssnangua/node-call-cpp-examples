// https://github.com/zhangyuang/node-ffi-rs

const rs = require("ffi-rs");
const { Void, I32, U64, String, WString, U8Array } = rs.DataType;
const { MB_YESNO, MB_ICONQUESTION, MB_ICONINFORMATION, IDYES } = require("./MessageBox");

const iconv = require("iconv-lite");
const C = (text) => iconv.encode(text, "gbk");

rs.open({ library: "user32", path: "user32.dll" });

const user32 = rs.define({
  MessageBoxA: {
    library: "user32",
    retType: I32,
    // paramsType: [Void, String, String, U64],
    paramsType: [Void, U8Array, U8Array, U64],
  },
  MessageBoxW: {
    library: "user32",
    retType: I32,
    paramsType: [Void, WString, WString, U64],
  },
});

let ret = user32.MessageBoxA([null, C`Open another message box?\n打开另一个消息弹窗？`, C`ffi-rs`, MB_YESNO | MB_ICONQUESTION]);

if (ret == IDYES) user32.MessageBoxW([null, "Hello World!", "ffi-rs", MB_ICONINFORMATION]);

rs.close("user32");
