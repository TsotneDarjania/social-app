import { createSignal, createContext, useContext, Accessor } from "solid-js";
import { CustomWindow, User } from "../types";
import { decodeHtmlAndParse } from "../utils/helpers";

interface NotificationsContextType {
  friendRequests: Accessor<User[]>;
  setFriendRequests: (requests: User[]) => void;
}

const NotificationsContext = createContext<
  NotificationsContextType | undefined
>(undefined);

export const NotificationsProvider = (props: any) => {
  const customWindow = window as unknown as CustomWindow;

  const notifications = decodeHtmlAndParse(
    customWindow.userData.notifications as unknown as string
  );

  const [friendRequests, setFriendRequests] = createSignal<User[]>(
    notifications.friendRequests
  );

  return (
    <NotificationsContext.Provider
      value={{ friendRequests, setFriendRequests }}
    >
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
