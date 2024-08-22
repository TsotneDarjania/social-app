import fs from "fs";
import { FriendRequest, Friends } from "../types/friendRequests";

export const imageToBase64 = async (imagePath: string) => {
  const file = await fs.readFileSync(imagePath);
  const base64 = file.toString("base64");
  return `data:image/png;base64,${base64}`;
};

export const parseFriendRequests = (
  friendRequestsStr: string[] | undefined
): FriendRequest[] => {
  let friendRequests: FriendRequest[] = [];

  if (Array.isArray(friendRequestsStr)) {
    try {
      friendRequests = friendRequestsStr.map((str: string) => {
        if (typeof str === "string") {
          return JSON.parse(str) as FriendRequest;
        }
        throw new Error("Invalid JSON string");
      });
    } catch (e) {
      console.error("Failed to parse friendRequests:", e);
    }
  }

  return friendRequests;
};

export const parseFriends = (friendsStr: string[] | undefined): Friends[] => {
  let friends: Friends[] = [];

  if (Array.isArray(friendsStr)) {
    try {
      friends = friendsStr.map((str: string) => {
        if (typeof str === "string") {
          return JSON.parse(str) as Friends;
        }
        throw new Error("Invalid JSON string");
      });
    } catch (e) {
      console.error("Failed to parse friendRequests:", e);
    }
  }

  return friends;
};