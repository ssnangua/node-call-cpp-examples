# Node.js Call C++ Examples

1. Addon: [node](#node) | [NAN](#nan) | [Node-API](#node-api) | [node-addon-api](#node-addon-api)
2. EXE: [exe](#exe)
3. DLL: [user32.dll](#user32dll) | [dll](#dll)
4. WebAssembly: [wasm](#wasm) | [wasm + WASI](#wasm--wasi)

## Addon

Install [node-gyp](https://github.com/nodejs/node-gyp)

### node

```bash
cd ./addon/node/

# Build addon
node-gyp rebuild

# Use addon
node ./test.js

cd ../../
```

> Official example: [Function arguments](https://nodejs.org/download/release/v22.15.1/docs/api/addons.html#function-arguments)

### NAN

```bash
cd ./addon/nan/

# Install dependencies (nan, bindings) and build addon
npm install

# Use addon
node ./test.js

cd ../../
```

> Official example: [nan](https://github.com/nodejs/node-addon-examples/tree/main/src/1-getting-started/2_function_arguments/nan)

### Node-API

```bash
cd ./addon/napi/

# Build addon
node-gyp rebuild

# Use addon
node ./test.js

cd ../../
```

> Official example: [napi](https://github.com/nodejs/node-addon-examples/tree/main/src/1-getting-started/2_function_arguments/napi)

### node-addon-api

```bash
cd ./addon/node-addon-api/

# Install dependencies (node-addon-api, bindings) and build addon
npm install

# Use addon
node ./test.js

cd ../../
```

> Official example: [node-addon-api](https://github.com/nodejs/node-addon-examples/tree/main/src/1-getting-started/2_function_arguments/node-addon-api)

### EXE

Install [MinGW](https://www.mingw-w64.org/)

```bash
cd ./exe/

# Compile exe
gcc ./add.cc -o ./add.exe

# Use exe
node ./test.js

cd ../
```

## Dynamic Link Libraries

Install [Koffi](https://koffi.dev/start), [ffi-rs](https://github.com/zhangyuang/node-ffi-rs), [ffi-napi](https://github.com/node-ffi-napi/node-ffi-napi): `npm install`

### user32.dll

```bash
cd ./dll/user32/

# Use user32.dll
node ./test-koffi.js
node ./test-ffi-rs.js
node ./test-ffi-napi.js

cd ../../
```

### dll

Install [MinGW](https://www.mingw-w64.org/)

```bash
cd ./dll/dll/

# Compile dll
gcc ./add.cc -shared -o ./add.dll

# Use dll
node ./test-koffi.js
node ./test-ffi-rs.js
node ./test-ffi-napi.js

cd ../../
```

## WebAssembly

### wasm

Install [Emscripten](https://github.com/emscripten-core/emsdk)

```bash
cd ./wasm/wasm/

# Compile wasm
emcc ./add.cc -o ./add.wasm --no-entry -sEXPORTED_FUNCTIONS=_add

# Use wasm
node ./test-node.js

# Use wasm in Browser
node ./test-browser.js

cd ../../
```

### wasm + WASI

Download [WASI SDK](https://github.com/WebAssembly/wasi-sdk)

```bash
cd ./wasm/wasi/

# Compile wasm
node ./build.js $WASI_SDK_DIR
# Or
$WASI_SDK_DIR/bin/clang.exe --target=wasm32-wasi --sysroot=$WASI_SDK_DIR/share/wasi-sysroot ./fopen.cc -o ./fopen.wasm -mexec-model=reactor "-Wl,--export=alloc,--export=writeFile"

# Use wasm
node --no-warnings ./test.js

cd ../../
```
