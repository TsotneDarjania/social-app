import http from "http";

const server = http.createServer((req, res) => {
  console.log("Request received");
});

export function startServer() {
  server.listen(3000, () => {
    console.log("Server started on port 3000");
  });
}
