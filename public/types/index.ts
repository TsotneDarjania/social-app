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
};

type AppData = {
  logOutImage: string;
};
