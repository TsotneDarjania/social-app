import http from "http";
import fs from "fs";
import { PORT } from "./config";

console.log("working");

const server = http.createServer((req, res) => {
  const url = req.url;

  const filePath = () => {
    if (url === "/") {
      return "public/index.html";
    } else if (url === "/javascript/script.js") {
      console.log("script.js");
      return "public/javascript/script.js";
    } else if (url === "/style/style.css") {
      return "public/style/style.css";
    } else if (url === "/favicon.ico") {
      return "public/assets/logo.png";
    } else {
      return "";
    }
  };

  fs.readFile(filePath(), (err, data) => {
    if (err) {
      res.end("Error");
    } else {
      res.end(data);
    }
  });
});

export const startServer = () => {
  server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
};
