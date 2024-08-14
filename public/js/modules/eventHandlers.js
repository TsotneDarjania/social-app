import {
  showLoginForm,
  showSignUpForm,
} from "../components/beforeAuth/forms/formToggle.js";
import { login, logOut, registration } from "../modules/auth.js";
import { FORMS, HEADER } from "../modules/dom.js";

const setupEventListeners = () => {
  FORMS.signUpButton.addEventListener("click", registration);
  FORMS.loginButton.addEventListener("click", login);
  HEADER.logoutBtn.addEventListener("click", logOut);
  FORMS.createAccountBtn.addEventListener("click", showSignUpForm);
  FORMS.closeRegistrationFormBtn.addEventListener("click", showLoginForm);
};

export default setupEventListeners;
