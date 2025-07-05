const fs = require("node:fs");

// (async () => {
//   const wasmBuffer = fs.readFileSync("./wasm/add.wasm");
//   const wasmModule = await WebAssembly.compile(wasmBuffer);
//   const wasmInstance = await WebAssembly.instantiate(wasmModule);
//   const { add } = wasmInstance.exports;
//   console.log(add(1, 2.5));
// })();

const wasmBuffer = fs.readFileSync("./wasm/add.wasm");
const wasmModule = new WebAssembly.Module(wasmBuffer);
const wasmInstance = new WebAssembly.Instance(wasmModule);
const { add } = wasmInstance.exports;
console.log(add(1, 2.5));
