export interface CustomWindow extends Window {
  authenticated: string;
  userData: UserData;
  appData: AppData;
}

type UserData = {
  username: string;
  userId: string;
  notifications: number;
  friendRequests: string[];
  userFriends: string[];
  registeredUsersList: string[];
};

type AppData = {
  logOutImage: string;
};

export interface Appcontext {
  friendRequests: string[];
  notifications: number;
  userFriends: string[];
  userId: string;
  userName: string;
}

export type FormName = "login" | "registration";
