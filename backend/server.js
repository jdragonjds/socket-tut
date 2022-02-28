const server = require("http").createServer();
const io = require("socket.io")(server);

io.on("connection", (client) => {
  console.log("Socket active to be connceted");
  client.on("chat", (payload) => {
    console.log("payload :", payload);
    io.emit("");
  });
  client.on("disconnect", () => {
    console.log("Socket disconnected");
  });
});

server.listen(4000, () => {
  console.log("server listening on port 4000...");
});
