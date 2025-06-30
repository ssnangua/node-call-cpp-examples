# Node.js FFI Example

Install dependencies: [Koffi](https://koffi.dev/start), [ffi-rs](https://github.com/zhangyuang/node-ffi-rs), [ffi-napi](https://github.com/node-ffi-napi/node-ffi-napi)

```bash
npm install
```

---

Run custom dll example:

```bash
# Compile dll
gcc ./custom/add.cc -shared -o ./custom/add.dll
# Run dll test:
node ./custom/koffi.js
node ./custom/ffi-rs.js
node ./custom/ffi-napi.js

# Compile exe
gcc ./custom/add.exe.cc -o ./custom/add.exe
# Run exe test:
node ./custom/exe.js
```

---

Run `user32.dll` example:

```bash
node ./user32/koffi.js
node ./user32/ffi-rs.js
node ./user32/ffi-napi.js
```

---

Run addon example:

> Official `node-addon-api` example: [Pass arguments to a function](https://github.com/nodejs/node-addon-examples/tree/main/src/1-getting-started/2_function_arguments/node-addon-api)

```bash
cd ./addon
# Install dependencies: node-addon-api, bindings
npm install
# Install node-gyp globally:
npm install node-gyp -g
# Build addon:
node-gyp rebuild
# Run test:
node ./test.js
```
