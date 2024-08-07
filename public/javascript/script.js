const showSignUpForm = () => {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("sign-up-form").style.display = "block";
};

const showLoginForm = () => {
  document.getElementById("sign-up-form").style.display = "none";
  document.getElementById("login-form").style.display = "block";
};

const DOM = {
  signUpButton: document.getElementById("sign-up-button"),
  loginButton: document.getElementById("LoginBtn"),
};

DOM.signUpButton.addEventListener("click", registration);
DOM.loginButton.addEventListener("click", login);

function registration() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("reg-password").value;
  const username = document.getElementById("reg-username").value;

  if (!checkValidation(email, password, username)) {
    alert("Please fill in all fields");
    return;
  }

  fetch("http://localhost:3000/api/user/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      username,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.errors) {
        const errorMessage = data.errors[0];
        alert(errorMessage);
      }

      console.log(data);
    });
}

function login() {
  const loginEmail = document.getElementById("loginEmail").value;
  const loginPassword = document.getElementById("loginPassword").value;

  fetch("http://localhost:3000/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: loginEmail,
      password: loginPassword,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.redirectUrl) {
        window.location.href = data.redirectUrl;
      }
      if (data.errors) {
        const errorMessage = data.errors[0];
        alert(errorMessage);
      }
    });
}

function checkValidation(email, password, username) {
  if (email === "" || password === "" || username === "") {
    return false;
  }
  return true;
}
