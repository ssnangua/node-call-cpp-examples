const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const { execSync } = require("node:child_process");

const CONTENT_TYPES = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".wasm": "application/wasm",
};

const server = http.createServer((req, res) => {
  const filePath = "." + req.url;
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    res.writeHead(404);
    res.end("");
  } else {
    const data = fs.readFileSync(filePath);
    const extname = path.extname(filePath);
    res.writeHead(200, { "Content-Type": CONTENT_TYPES[extname] });
    if (/\.(html|js|css)/i.test(extname)) {
      res.end(data, "utf-8");
    } else {
      res.end(data);
    }
  }
});

server.listen(8000, () => {
  execSync("start http://localhost:8000/wasm.html");
});
