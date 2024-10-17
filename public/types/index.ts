export interface CustomWindow extends Window {
  authenticated: string;
  userData: UserData;
  appData: AppData;
}

type UserData = {
  userName: string;
  userId: string;
  notifications: string;
  friendRequests: string;
  userFriends: string;
  registeredUsersList: string;
  sentFriendRequests: string;
};

type AppData = {
  logOutImage: string;
  messageicon: string;
};

export interface Notifications {
  friendRequests: Array<User>;
}

export type User = {
  userId: string;
  toUserName: string;
  userName: string;
  toUserId:string;
};

export type FormName = "login" | "registration";
