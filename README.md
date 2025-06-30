# Node.js FFI Example

Install dependencies: [Koffi](https://koffi.dev/start), [ffi-rs](https://github.com/zhangyuang/node-ffi-rs), [ffi-napi](https://github.com/node-ffi-napi/node-ffi-napi)

```bash
npm install
```

## dll

```bash
node ./dll/koffi.js
node ./dll/ffi-rs.js
node ./dll/ffi-napi.js
```

Compile dll:

1. Install [MinGW](https://www.mingw-w64.org/)
2. Compile dll:

```bash
gcc ./dll/add.cc -shared -o ./dll/add.dll
```

## user32.dll

```bash
node ./user32/koffi.js
node ./user32/ffi-rs.js
node ./user32/ffi-napi.js
```

## exe

```bash
node ./exe/exe.js
```

Compile exe:

1. Install [MinGW](https://www.mingw-w64.org/)
2. Compile exe:

```bash
gcc ./exe/add.cc -o ./exe/add.exe
```

## wasm

```bash
node ./wasm/wasm.js
```

Compile wasm:

1. Install [Emscripten](https://github.com/emscripten-core/emsdk)
2. Compile wasm:

```bash
emcc ./wasm/add.cc -o ./wasm/add.wasm --no-entry -sEXPORTED_FUNCTIONS=_add
```

## addon

> Official `node-addon-api` example: [Pass arguments to a function](https://github.com/nodejs/node-addon-examples/tree/main/src/1-getting-started/2_function_arguments/node-addon-api)

1. Install [node-gyp](https://github.com/nodejs/node-gyp)
2. Build addon:
```bash
cd ./addon
# Install dependencies (node-addon-api, bindings) and build addon:
npm install
# Run test:
node ./test.js
cd ..
```
