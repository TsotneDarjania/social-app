const showSignUpForm = () => {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("sign-up-form").style.display = "block";
};

const showLoginForm = () => {
  document.getElementById("sign-up-form").style.display = "none";
  document.getElementById("login-form").style.display = "block";
};
