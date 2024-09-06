import { createSignal, createContext, useContext } from "solid-js";
import { CustomWindow, User } from "../types";
import { decodeHtmlAndParse } from "../utils/helpers";

export interface Appcontext {
  userId: string;
  userName: string;
  notifications: { friendRequests: Array<User> };
  userFriends: Array<User>;
  registeredUsersList: Array<User>;
  sentFriendRequests: Array<User>;
}

const AppContext = createContext<Appcontext | undefined>(undefined);

export function AppProvider(props: any) {
  const customWindow = window as unknown as CustomWindow;

  const notifications = decodeHtmlAndParse(
    customWindow.userData.notifications as unknown as string
  );

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
    notifications,
    userFriends,
    registeredUsersList,
    sentFriendRequests,
  });

  return (
    <AppContext.Provider value={userData()}>
      {props.children}
    </AppContext.Provider>
  );
}

export function useApp(): Appcontext {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
