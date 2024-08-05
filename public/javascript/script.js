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
};

DOM.signUpButton.addEventListener("click", registration);

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

function checkValidation(email, password, username) {
  if (email === "" || password === "" || username === "") {
    return false;
  }
  return true;
}
