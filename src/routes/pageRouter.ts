import { Router } from "express";
import { isAuthenticated } from "../controllers/userController";
import User from "../../models/user";
import { CustomSession } from "../types/session";

const pageRouter = Router();

pageRouter.get("/", async (req, res) => {
  const session = req.session as unknown as CustomSession;

  const user = await User.findOne({ _id: session.userId });

  res.render("index", {
    authenticated: isAuthenticated(req),
    username: user?.username,
  });
});

export default pageRouter;
