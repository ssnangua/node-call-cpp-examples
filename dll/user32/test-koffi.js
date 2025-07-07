// https://koffi.dev/start

const koffi = require("koffi");
const { MB_YESNO, MB_ICONQUESTION, MB_ICONINFORMATION, IDYES } = require("./MessageBox");

const iconv = require("iconv-lite");
const C = (text) => iconv.encode(text, "gbk");

// 加载user32.dll
const lib = koffi.load("user32.dll");

// 声明dll中的函数
const user32 = {
  // MessageBoxA: lib.func("MessageBoxA", "int", ["void *", "str", "str", "uint"]),
  // MessageBoxW: lib.func("MessageBoxW", "int", ["void *", "str16", "str16", "uint"]),
  MessageBoxA: lib.func("int __stdcall MessageBoxA(void *hwnd, str text, str caption, uint type)"),
  MessageBoxW: lib.func("int __stdcall MessageBoxW(void *hwnd, str16 text, str16 caption, uint type)"),
};

let ret = user32.MessageBoxA(null, C`Open another message box?\n打开另一个消息弹窗？`, "Koffi", MB_YESNO | MB_ICONQUESTION);

if (ret == IDYES) user32.MessageBoxW(null, "Hello World!", "Koffi", MB_ICONINFORMATION);
