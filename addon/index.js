// const { add } = require("./build/Release/add.node");
const { add } = require("bindings")("add.node");

module.exports = add;
