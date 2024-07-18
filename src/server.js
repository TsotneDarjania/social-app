import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  console.log("Request received");

  fs.readFile("public/index.html", (err, data) => {
    if (err) {
      res.end("Error");
    } else {
      res.end(data);
    }
  });
});

export function startServer() {
  server.listen(3000, () => {
    console.log("Server started on port 3000");
  });
}
