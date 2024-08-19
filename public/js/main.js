import renderLoginForm from "./components/beforeAuth/forms/loginForm.js";
import { authCheck, logoutEventListener } from "./modules/auth.js";

window.addEventListener("DOMContentLoaded", () => {
  authCheck();
  renderLoginForm();
  logoutEventListener();
});
