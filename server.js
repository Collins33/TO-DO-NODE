const http = require("http");
const port = process.env.PORT || 8000;
const app = require("./app");
const server = http.createServer(app);

server.listen(port);
module.exports = server;
