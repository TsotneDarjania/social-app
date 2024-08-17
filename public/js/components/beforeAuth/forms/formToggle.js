import renderSignUpForm from "./registrationForm.js";

const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("sign-up-form");

export const showSignUpForm = () => {
  renderSignUpForm();

  loginForm.style.display = "none";
  signupForm.style.display = "block";
};

export const showLoginForm = () => {
  signupForm.style.display = "none";
  loginForm.style.display = "block";
};
