import Config from ".";
import { SocketEnums } from "../../enums/socketEnums";
import User from "../models/user";

const connectedUsers: Map<string, any> = new Map();

const io = Config.io;

io.on("connection", async (socket) => {
  console.log("User connected");

  const userId = socket.handshake.query.userId as string;
  connectedUsers.set(userId, socket);

  const connectedUserIds = Array.from(connectedUsers.keys());

  const connectedUsersData = await User.find(
    { _id: { $in: connectedUserIds } },
    "_id userName"
  ).lean();

  //renaming _id key to userId for consistancy
  const newConnectedUsersData = connectedUsersData.map(({ _id, ...rest }) => ({
    userId: _id,
    ...rest,
  }));

  // console.log("newConnectedUsersData", newConnectedUsersData);

  io.emit(SocketEnums.updateConnectedUsers, newConnectedUsersData);

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

      io.emit(SocketEnums.updateConnectedUsers, newConnectedUsersData);
    }
  });
});

export { connectedUsers };
