// https://github.com/node-ffi-napi/node-ffi-napi

const ffi = require("ffi-napi");
const { MB_YESNO, MB_ICONQUESTION, MB_ICONINFORMATION, IDYES } = require("./MessageBox");

const iconv = require("iconv-lite");
const C = (text) => iconv.encode(text, "gbk");

const str = "string";
const str16 = "string";
const L = (text) => Buffer.from(text + "\0", "utf16le");

// 加载user32.dll
const user32 = new ffi.Library("user32", {
  // 声明dll中的函数
  // 函数名: [返回值类型, [参数类型, ...]]
  MessageBoxA: ["int", ["void *", str, str, "uint"]],
  MessageBoxW: ["int", ["void *", str16, str16, "uint"]],
});

let ret = user32.MessageBoxA(null, C`Open another message box?\n打开另一个消息弹窗？`, "ffi-napi", MB_YESNO | MB_ICONQUESTION);

if (ret == IDYES) user32.MessageBoxW(null, L`Hello World!`, L`ffi-napi`, MB_ICONINFORMATION);
