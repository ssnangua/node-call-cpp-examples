const { spawn } = require("child_process");
const child = spawn("./native/add.exe", [1, 2]);

child.stdout.on("data", (data) => {
  console.log(parseInt(data.toString()));
});
