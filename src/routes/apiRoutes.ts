import { Router } from "express";
import { registration } from "../controllers/userController";
import { userRegistrationValidation } from "../validators/userValidator";

const apiRoutes = Router();

apiRoutes.post("/api/user/login", (req, res) => {
  res.status(200).end("this is login");
  //   const data = req.body;
});

apiRoutes.post("/api/user/register", userRegistrationValidation, registration);

export default apiRoutes;
