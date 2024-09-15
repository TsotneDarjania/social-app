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

    // console.log("newConnectedUsersData", newConnectedUsersData);

    io.emit("updateConnectedUsers", newConnectedUsersData);
  });

  socket.on("disconnect", async () => {
    let disconnectedUserId;

    for (let [key, value] of connectedUsers.entries()) {
      if (value === socket) {
        disconnectedUserId = key;
        connectedUsers.delete(key);
        break;
      }
    }

    if (disconnectedUserId) {
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
    }
  });
});

export { connectedUsers };
