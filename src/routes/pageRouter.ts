import { Router } from "express";
import { isAuthenticated } from "../controllers/userController";

const pageRouter = Router();

pageRouter.get("/", (req, res) => {
  res.render("index");
});

pageRouter.get("/home", isAuthenticated, (req, res) => {
  res.render("homePage");
});

export default pageRouter;
