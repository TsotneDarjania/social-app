import renderLoginForm from "./components/beforeAuth/forms/loginForm.ts";
import { authCheck, logoutEventListener } from "./modules/auth.ts";

window.addEventListener("DOMContentLoaded", () => {
  authCheck();
  renderLoginForm();
  logoutEventListener();
});
