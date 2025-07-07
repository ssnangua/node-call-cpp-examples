const path = require("node:path");
const { execFile } = require("node:child_process");

const sdk = process.argv[2];

execFile(
  path.join(sdk, "/bin/clang.exe"),
  [
    "--target=wasm32-wasi",
    "--sysroot=" + path.join(sdk, "/share/wasi-sysroot"),
    "./fopen.cc",
    "-o",
    "./fopen.wasm",
    "-mexec-model=reactor",
    "-Wl,--export=alloc,--export=writeFile",
  ],
  (error, stdout, stderr) => {
    if (error) {
      console.error(error);
    }
  }
);
