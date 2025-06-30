const { spawn } = require("child_process");
const child = spawn("./native/add.exe", [1, 2.5]);

child.stdout.on("data", (data) => {
  console.log(parseFloat(data.toString()));
});
