import renderSignUpForm from "./registrationForm";

const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("sign-up-form");

export const showSignUpForm = () => {
  renderSignUpForm();
  if (loginForm) loginForm.style.display = "none";
  if (signupForm) signupForm.style.display = "block";
};

export const showLoginForm = () => {
  if (signupForm && loginForm) {
    signupForm.style.display = "none";
    loginForm.style.display = "block";
  }
};
