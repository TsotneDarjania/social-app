import { FORMS } from "../../../modules/dom.js";

export const showSignUpForm = () => {
  FORMS.loginForm.style.display = "none";
  FORMS.signupForm.style.display = "block";
};

export const showLoginForm = () => {
  FORMS.signupForm.style.display = "none";
  FORMS.loginForm.style.display = "block";
};
