import { Router } from "express";
import { isAuthenticated } from "../controllers/userController";
import User from "../models/user";
import { CustomSession } from "../types/session";
import { imageToBase64, parseFriendRequests } from "../helper";

const pageRouter = Router();

pageRouter.get("/", async (req, res) => {
  const session = req.session as any as CustomSession;

  const user = await User.findOne({ _id: session.userId });

  const users = await User.find({ username: { $ne: user?.username } });
  const registeredUsersList = users.map((item) => ({
    username: item.username,
    id: item._id,
  }));

  const friendRequestsStr = user?.friendRequests;
  const friendRequests = parseFriendRequests(friendRequestsStr);

  // Server side image to base64
  const logOutImage = await imageToBase64("public/assets/logOutIcon.png");

  res.render("index", {
    authenticated: isAuthenticated(req),
    username: user?.username,
    userId: user?._id,
    userFriends: user?.friends,
    friendRequests,
    logOutImage,
    registeredUsersList,
  });
});

export default pageRouter;
