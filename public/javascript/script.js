const showSignUpForm = () => {
  document.querySelector(".login-form").style.display = "none";
  document.querySelector(".sign-up-form").style.display = "block";
};

const showLoginForm = () => {
  document.querySelector(".sign-up-form").style.display = "none";
  document.querySelector(".login-form").style.display = "block";
};
