export interface CustomWindow extends Window {
  authenticated: string;
  userData: UserData;
  appData: AppData;
}

type UserData = {
  userName: string;
  userId: string;
  notifications: {
    friendRequests: string;
  };
  friendRequests: string[];
  userFriends: string;
  registeredUsersList: string;
};

type AppData = {
  logOutImage: string;
};

export interface Appcontext {
  notifications: {
    friendRequests: string;
  };
  userFriends: string;
  userId: string;
  userName: string;
}

export type User = {
  id: string;
  userName: string;
};

export type FormName = "login" | "registration";
