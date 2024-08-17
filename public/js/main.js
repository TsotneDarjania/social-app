import renderLoginForm from "./components/beforeAuth/forms/loginForm.js";
import { authCheck } from "./modules/auth.js";

window.addEventListener("DOMContentLoaded", () => {
  authCheck();
  renderLoginForm();
});
