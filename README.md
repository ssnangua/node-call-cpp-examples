# Node.js Call C++ Examples

[addon](#addon) | [exe](#exe) | [user32.dll](#user32dll) | [dll](#dll) | [wasm](#wasm) | [wasi](#wasi)

Install dependencies: [Koffi](https://koffi.dev/start), [ffi-rs](https://github.com/zhangyuang/node-ffi-rs), [ffi-napi](https://github.com/node-ffi-napi/node-ffi-napi)

```bash
npm install
```

## addon

> Official `node-addon-api` example: [Pass arguments to a function](https://github.com/nodejs/node-addon-examples/tree/main/src/1-getting-started/2_function_arguments/node-addon-api)

Install [node-gyp](https://github.com/nodejs/node-gyp)

```bash
cd ./addon

# Install dependencies (node-addon-api, bindings) and build addon
npm install

# Use addon
node ./test.js

cd ..
```

## exe

Install [MinGW](https://www.mingw-w64.org/)

```bash
# Compile exe
gcc ./exe/add.cc -o ./exe/add.exe

# Use exe
node ./exe/exe.js
```

## user32.dll

```bash
# Use user32.dll
node ./user32/koffi.js
node ./user32/ffi-rs.js
node ./user32/ffi-napi.js
```

## dll

Install [MinGW](https://www.mingw-w64.org/)

```bash
# Compile dll
gcc ./dll/add.cc -shared -o ./dll/add.dll

# Use dll
node ./dll/koffi.js
node ./dll/ffi-rs.js
node ./dll/ffi-napi.js
```

## wasm

Install [Emscripten](https://github.com/emscripten-core/emsdk)

```bash
# Compile wasm
emcc ./wasm/add.cc -o ./wasm/add.wasm --no-entry -sEXPORTED_FUNCTIONS=_add

# Use wasm
node ./wasm/wasm.js
```

## wasi

Download [WASI SDK](https://github.com/WebAssembly/wasi-sdk)

```bash
# Compile wasm
node ./wasi/build.js $WASI_SDK_DIR
# Or
$WASI_SDK_DIR/bin/clang.exe --target=wasm32-wasi --sysroot=$WASI_SDK_DIR/share/wasi-sysroot ./wasi/fopen.cc -o ./wasi/fopen.wasm -mexec-model=reactor -Wl,--export=alloc -Wl,--export=writeFile

# Use wasm
node --no-warnings ./wasi/wasi.js
```
