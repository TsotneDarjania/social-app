import { Router } from "express";
import { isAuthenticated } from "../controllers/userController";
import User from "../models/user";
import { CustomSession } from "../types/session";
import fs from "fs";

const pageRouter = Router();

pageRouter.get("/", async (req, res) => {
  const session = req.session as any as CustomSession;

  const user = await User.findOne({ _id: session.userId });

  const file = await fs.readFileSync("public/assets/log-out.png");
  const base64 = file.toString("base64");
  const logOutImage = `data:image/png;base64,${base64}`;

  res.render("index", {
    authenticated: isAuthenticated(req),
    username: user?.username,
    logOutImage,
  });
});

export default pageRouter;
