import { Router } from "express";
import { isAuthenticated } from "../controllers/userController";

const pageRouter = Router();

pageRouter.get("/", (req, res) => {
  if (isAuthenticated(req)) {
    res.render("homePage");
  } else {
    res.render("index");
  }
});

export default pageRouter;
