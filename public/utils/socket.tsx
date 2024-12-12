import { createEffect, onCleanup } from "solid-js";
import { io } from "socket.io-client";
import { useNotifications } from "../store/NotificationContext";
import { CustomWindow, User } from "../types";
import { SocketEnums } from "../../enums/socketEnums";

const useSocket = () => {
  const customWindow = window as unknown as CustomWindow;
  const userId = customWindow.userData.userId;

  const {
    friendRequests,
    setFriendRequests,
    setConnectedUsers,
    setRegisteredUsersList,
    registeredUsersList,
  } = useNotifications();
  const socket = io("http://localhost:3000", {
    autoConnect: false,
    query: { userId },
  });

  createEffect(() => {
    if (userId) {
      socket.connect();

      socket.on(SocketEnums.newUserRegistered, (newUser) => {
        setRegisteredUsersList([...registeredUsersList(), newUser]);
      });

      socket.on(SocketEnums.FriendRequest, (newFriendRequest) => {
        setFriendRequests([...friendRequests(), newFriendRequest]);
      });

      socket.on(SocketEnums.updateConnectedUsers, (data) => {
        const withoutMyself = data.filter(
          (item: User) => item.userId !== userId
        );
        setConnectedUsers(withoutMyself);
      });

      socket.on(SocketEnums.acceptFriendRequest, () => {
        window.location.reload();
      });

      onCleanup(() => {
        socket.disconnect();
      });
    }
  });
};

export default useSocket;
