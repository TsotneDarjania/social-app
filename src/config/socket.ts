import Config from ".";
import User from "../models/user";

const connectedUsers: Map<string, any> = new Map();

const io = Config.io;

io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("newUserConnected", async (userId) => {
    connectedUsers.set(userId, socket);

    const connectedUserIds = Array.from(connectedUsers.keys());

    const connectedUsersData = await User.find(
      { _id: { $in: connectedUserIds } },
      "_id userName"
    ).lean();

    const newConnectedUsersData = connectedUsersData.map(
      ({ _id, ...rest }) => ({
        userId: _id,
        ...rest,
      })
    );

    io.emit("updateConnectedUsers", newConnectedUsersData);
  });

  socket.on("disconnect", async () => {
    for (let [key, value] of connectedUsers.entries()) {
      if (value === socket) {
        connectedUsers.delete(key);

        const connectedUserIds = Array.from(connectedUsers.keys());

        const connectedUsersData = await User.find(
          { _id: { $in: connectedUserIds } },
          "userId userName"
        ).lean();

        io.emit("updateConnectedUsers", connectedUsersData);
        break;
      }
    }

    console.log("User disconnected");
  });
});

export { connectedUsers };
