import Config from ".";

const connectedUsers: Map<string, any> = new Map();

const io = Config.io;

io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("registerUser", (userId) => {
    connectedUsers.set(userId, socket);
  });

  socket.on("disconnect", () => {
    for (let [key, value] of connectedUsers.entries()) {
      if (value === socket) {
        connectedUsers.delete(key);
        break;
      }
    }

    console.log("User disconnected");
  });
});

export { connectedUsers };
