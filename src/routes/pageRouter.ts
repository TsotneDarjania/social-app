import { Router } from "express";

const pageRouter = Router();

pageRouter.get("/", (req, res) => {
  res.render("index");
});

pageRouter.get("/home", (req, res) => {
  res.render("homePage");
});

export default pageRouter;
