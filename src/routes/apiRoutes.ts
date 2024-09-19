import { Router } from "express";
import {
  confirmFriendRequest,
  deleteUser,
  login,
  logOut,
  registration,
  sendFriendRequest,
  getChat
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
//Confirm Friend Request
apiRoutes.post("/api/user/confirm-friend-request", confirmFriendRequest);

// Delete User
apiRoutes.delete("/api/user/delete", deleteUser);


//get chat
apiRoutes.post("/api/user/getchat", getChat)


export default apiRoutes;
