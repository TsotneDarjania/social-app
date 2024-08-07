import { Router } from "express";
import { login, registration } from "../controllers/userController";
import {
  userLoginValidation,
  userRegistrationValidation,
} from "../validators/userValidator";

const apiRoutes = Router();

apiRoutes.post("/api/user/login", userLoginValidation, login);
apiRoutes.post("/api/user/register", userRegistrationValidation, registration);

export default apiRoutes;
