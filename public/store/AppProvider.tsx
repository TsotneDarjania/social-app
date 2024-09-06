import { createSignal, createContext, useContext } from "solid-js";
import { CustomWindow } from "../types";

export interface Appcontext {
  notifications: { friendRequests: string };
  userFriends: string;
  userId: string;
  userName: string;
  registeredUsersList: string;
}

const AppContext = createContext<Appcontext | undefined>(undefined);

export function AppProvider(props: any) {
  const customWindow = window as unknown as CustomWindow;

  const [userData] = createSignal<Appcontext>({
    userName: customWindow.userData.userName,
    userId: customWindow.userData.userId,
    notifications: customWindow.userData.notifications,
    userFriends: customWindow.userData.userFriends,
    registeredUsersList: customWindow.userData.registeredUsersList,
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
