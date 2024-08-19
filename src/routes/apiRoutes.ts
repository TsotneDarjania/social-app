import { Router } from "express";
import {
  login,
  logOut,
  registration,
  sendFriendRequest,
} from "../controllers/userController";
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

// Sent Friend Request
apiRoutes.post("/api/user/send-friend-request", sendFriendRequest);

export default apiRoutes;
