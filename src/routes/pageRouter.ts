import { Router } from "express";

const pageRouter = Router();

pageRouter.get("/", (req, res) => {
  console.log("Cookies: ", req.cookies);
  console.log(req.cookies);
  res.render("index");
});

export default pageRouter;
