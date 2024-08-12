import { Router } from "express";
import { login, logOut, registration } from "../controllers/userController";
import {
  userLoginValidation,
  userRegistrationValidation,
} from "../validators/userValidator";

const apiRoutes = Router();

// Login
apiRoutes.post("/api/user/login", userLoginValidation, login);
// Register
apiRoutes.post("/api/user/register", userRegistrationValidation, registration);
// Logout
apiRoutes.post("/api/user/logout", logOut);

export default apiRoutes;
