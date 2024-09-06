import { Router } from "express";
import { isAuthenticated } from "../controllers/userController";
import User from "../models/user";
import { CustomSession } from "../types/session";
import { imageToBase64, parseDataFromDb } from "../helper";

const pageRouter = Router();

pageRouter.get("/", async (req, res) => {
  const session = req.session as any as CustomSession;

  const user = await User.findOne({ _id: session.userId });

  const users = await User.find({ userName: { $ne: user?.userName } });
  const registeredUsersList = users.map((item) => ({
    userName: item.userName,
    id: item._id,
  }));

  const friendRequestsStr = user?.friendRequests;
  const friendRequests = parseDataFromDb(friendRequestsStr);

  const userFriendsStr = user?.friends;
  const userFriends = parseDataFromDb(userFriendsStr);

  const notifications = {
    friendRequests,
  };

  // Server side image to base64
  const logOutImage = await imageToBase64("public/assets/logOutIcon.png");

  res.render("index", {
    authenticated: isAuthenticated(req),
    userName: user?.userName,
    userId: user?._id,
    userFriends,
    notifications,
    logOutImage,
    registeredUsersList,
  });
});

export default pageRouter;
