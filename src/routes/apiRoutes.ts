import { Router } from "express";
import { registration } from "../controllers/userController";
import { body } from "express-validator";

const apiRoutes = Router();

const validation = [
  body("username")
    .isLength({ min: 3 })
    .withMessage("Username must be at least 3 characters long"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  body("email").isEmail().withMessage("Email is not valid"),
];

apiRoutes.post("/api/user/login", (req, res) => {
  res.status(200).end("this is login");
  //   const data = req.body;
});

apiRoutes.post("/api/user/register", validation, registration);

export default apiRoutes;
