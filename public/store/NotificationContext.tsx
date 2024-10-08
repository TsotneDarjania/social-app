import { createSignal, createContext, useContext, Accessor } from "solid-js";
import { CustomWindow, User } from "../types";
import { decodeHtmlAndParse } from "../utils/helpers";

interface NotificationsContextType {
  friendRequests: Accessor<User[]>;
  setFriendRequests: (requests: User[]) => void;
  connectedUsers: Accessor<User[]>;
  setConnectedUsers: (item: User[]) => void;
  registeredUsersList: Accessor<User[]>;
  setRegisteredUsersList: (item: User[]) => void;
}

const NotificationsContext = createContext<
  NotificationsContextType | undefined
>(undefined);

export const NotificationsProvider = (props: any) => {
  const customWindow = window as unknown as CustomWindow;

  const notifications = decodeHtmlAndParse(
    customWindow.userData.notifications as unknown as string
  );

  const registeredUsers = decodeHtmlAndParse(
    customWindow.userData.registeredUsersList
  );

  const [friendRequests, setFriendRequests] = createSignal<User[]>(
    notifications.friendRequests
  );
  const [connectedUsers, setConnectedUsers] = createSignal<User[]>([]);

  const [registeredUsersList, setRegisteredUsersList] =
    createSignal<User[]>(registeredUsers);

  const value = {
    friendRequests,
    setFriendRequests,
    connectedUsers,
    setConnectedUsers,
    registeredUsersList,
    setRegisteredUsersList,
  };

  return (
    <NotificationsContext.Provider value={value}>
      {props.children}
    </NotificationsContext.Provider>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationsContext);
  if (!context) {
    throw new Error(
      "useNotifications must be used within a NotificationsProvider"
    );
  }
  return context;
};
