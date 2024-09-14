import { createEffect, onCleanup } from "solid-js";
import { io } from "socket.io-client";
import { useNotifications } from "../store/NotificationContext";
import { CustomWindow, User } from "../types";

const useSocket = () => {
  const customWindow = window as unknown as CustomWindow;
  const userId = customWindow.userData.userId;

  const {
    friendRequests,
    setFriendRequests,
    connectedUsers,
    setConnectedUsers,
  } = useNotifications();
  const socket = io("http://localhost:3000", { autoConnect: false });

  createEffect(() => {
    if (userId) {
      socket.connect();

      socket.on("connect", () => {
        socket.emit("newUserConnected", userId);
        console.log("Connected with userId:", userId);
      });

      socket.on("friendRequest", (newFriendRequest) => {
        console.log("New friend request received:", newFriendRequest);
        setFriendRequests([...friendRequests(), newFriendRequest]);
      });

      socket.on("updateConnectedUsers", (data) => {
        console.log("Updated connected users:", data);

        setConnectedUsers(data);
      });

      onCleanup(() => {
        socket.disconnect();
      });
    }
  });
};

export default useSocket;
