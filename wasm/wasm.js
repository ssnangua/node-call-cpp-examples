const fs = require("node:fs");

async function run() {
  const wasmBuffer = fs.readFileSync("./wasm/add.wasm");
  const module = await WebAssembly.compile(wasmBuffer);
  const instance = await WebAssembly.instantiate(module);
  const { add } = instance.exports;
  console.log(add(1, 2.5));
}

run();
