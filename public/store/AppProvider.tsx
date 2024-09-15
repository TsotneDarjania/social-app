import { createSignal, createContext, useContext } from "solid-js";
import { CustomWindow, User } from "../types";
import { decodeHtmlAndParse } from "../utils/helpers";
import { NotificationsProvider } from "./NotificationContext";

export interface Appcontext {
  userId: string;
  userName: string;
  userFriends: Array<User>;
  sentFriendRequests: Array<User>;
}

const AppContext = createContext<Appcontext | undefined>(undefined);

export const AppProvider = (props: any) => {
  const customWindow = window as unknown as CustomWindow;

  const registeredUsersList = decodeHtmlAndParse(
    customWindow.userData.registeredUsersList
  );

  const userFriends = decodeHtmlAndParse(customWindow.userData.userFriends);

  const sentFriendRequests = decodeHtmlAndParse(
    customWindow.userData.sentFriendRequests
  );

  const [userData] = createSignal<Appcontext>({
    userName: customWindow.userData.userName,
    userId: customWindow.userData.userId,
    userFriends,
    sentFriendRequests,
  });

  return (
    <AppContext.Provider value={userData()}>
      <NotificationsProvider>{props.children}</NotificationsProvider>
    </AppContext.Provider>
  );
};

export const useApp = (): Appcontext => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
