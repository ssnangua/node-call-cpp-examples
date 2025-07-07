const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const { execSync } = require("node:child_process");

const server = http.createServer((req, res) => {
  const filePath = "." + req.url;
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    res.writeHead(404);
    res.end("");
  } else {
    const data = fs.readFileSync(filePath);
    const extname = path.extname(filePath);
    if (extname === ".html") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data, "utf-8");
    } else if (extname === ".wasm") {
      res.writeHead(200, { "Content-Type": "application/wasm" });
      res.end(data);
    }
  }
});

server.listen(8000, () => {
  execSync("start http://localhost:8000/wasm.html");
});
