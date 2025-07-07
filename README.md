# Node.js Call C++ Examples

- [Node.js Call C++ Examples](#nodejs-call-c-examples)
  - [Addon](#addon)
    - [node](#node)
    - [NAN](#nan)
    - [Node-API](#node-api)
    - [node-addon-api](#node-addon-api)
    - [NAPI-RS](#napi-rs)
  - [EXE](#exe)
    - [C++](#c)
    - [Rust](#rust)
    - [Python](#python)
  - [DLL](#dll)
    - [user32.dll](#user32dll)
    - [C++](#c-1)
    - [Rust](#rust-1)
  - [WebAssembly](#webassembly)
    - [wasm](#wasm)
    - [wasm + WASI](#wasm--wasi)

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

### NAPI-RS

Install [Rust](https://www.rust-lang.org/tools/install)

```bash
cd ./addon/napi-rs/

# Install Node dependencies (@napi-rs/cli)
npm install

# Install Rust dependencies (napi, napi-derive, napi-build)
cargo update

# Build addon
npm run build

# Use addon
node ./test.js

cd ../../
```

## EXE

### C++

Install [MinGW](https://www.mingw-w64.org/)

```bash
cd ./exe/cpp/

# Compile exe
gcc ./add.cc -o ./add.exe

# Use exe
node ./test.js

cd ../../
```

### Rust

Install [Rust](https://www.rust-lang.org/tools/install)

```bash
cd ./exe/rs/

# Compile exe
cargo build --release

# Use exe
node ./test.js

cd ../../
```

### Python

Install [Python](https://www.python.org/downloads/)

Install `pyinstaller`: `pip install pyinstaller`

```bash
cd ./exe/py/

# Compile exe
pyinstaller add.py -F

# Use exe
node ./test.js

cd ../../
```

## DLL

[Koffi](https://koffi.dev/start) | [ffi-rs](https://github.com/zhangyuang/node-ffi-rs) | [ffi-napi](https://github.com/node-ffi-napi/node-ffi-napi)

### user32.dll

```bash
cd ./dll/user32/

# Install dependencies (koffi, ffi-rs, ffi-napi, iconv-lite)
npm install

# Use user32.dll
node ./test-koffi.js
node ./test-ffi-rs.js
node ./test-ffi-napi.js

cd ../../
```

### C++

Install [MinGW](https://www.mingw-w64.org/)

```bash
cd ./dll/cpp/

# Install dependencies (koffi, ffi-rs, ffi-napi)
npm install

# Compile dll
gcc ./add.cc -shared -o ./add.dll

# Use dll
node ./test-koffi.js
node ./test-ffi-rs.js
node ./test-ffi-napi.js

cd ../../
```

### Rust

Install [Rust](https://www.rust-lang.org/tools/install)

```bash
cd ./dll/rs/

# Install dependencies (koffi, ffi-rs, ffi-napi)
npm install

# Compile dll
cargo build --release

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
