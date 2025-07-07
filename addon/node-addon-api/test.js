// const { add } = require("./build/Release/add.node");
const { add } = require("bindings")("add.node");

console.log(add(1, 2.5));
