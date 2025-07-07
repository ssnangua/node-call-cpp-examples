const fs = require("node:fs");
const { WASI } = require("node:wasi");

const wasi = new WASI({
  version: "preview1",
  args: process.argv,
  env: process.env,
  preopens: {
    ".": "./",
  },
});

const wasmBuffer = fs.readFileSync("./fopen.wasm");
const wasmModule = new WebAssembly.Module(wasmBuffer);
const wasmInstance = new WebAssembly.Instance(wasmModule, wasi.getImportObject());
wasi.initialize(wasmInstance);

// console.log(wasmInstance.exports);
const { memory, alloc, writeFile } = wasmInstance.exports;

function P(string) {
  const bytes = new TextEncoder("utf-8").encode(string + "\0");
  const offset = alloc(bytes.length);
  const uint8Array = new Uint8Array(memory.buffer, offset, bytes.length);
  uint8Array.set(bytes);
  return offset;
}

writeFile(P`file.txt`, P`Hello, WASI!`);
