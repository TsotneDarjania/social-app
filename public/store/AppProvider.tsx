import { createSignal, createContext, useContext } from "solid-js";
import { AppData, CustomWindow } from "../types";

const AppContext = createContext();

export function AppProvider(props: any) {
  const customWindow = window as unknown as CustomWindow;

  const [userData, setUserData] = createSignal({
    userName: customWindow.userData.username,
    userId: customWindow.userData.userId,
    notifications: customWindow.userData.notifications,
    friendRequests: customWindow.userData.friendRequests,
    userFriends: customWindow.userData.userFriends,
  });

  return (
    <AppContext.Provider value={userData}>{props.children}</AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
