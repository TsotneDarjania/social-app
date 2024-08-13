import { fetchData } from "./api.js";
import { showLoginForm } from "../components/beforeAuth/forms/formToggle.js";
import { registrationValidation } from "../validation/index.js";
import { FORMS, HEADER, MAIN } from "./dom.js";
import { baseUrl } from "../helpers/constants.js";

export const authCheck = () => {
  if (window.userData.authenticated === "true") {
    MAIN.authenticatedContent.style.display = "block";
    HEADER.userName.innerHTML = window.userData.username;
  } else {
    MAIN.unauthenticatedContent.style.display = "block";
  }
};

export const login = () => {
  const loginEmail = FORMS.loginEmail.value;
  const loginPassword = FORMS.loginPassword.value;

  const url = `${baseUrl}/api/user/login`;
  const body = JSON.stringify({
    email: loginEmail,
    password: loginPassword,
  });

  const res = fetchData(url, "POST", body);

  res
    .then((response) => {
      if (response.status === 401) {
        alert("Invalid email or password");
        return;
      }
      return response.json();
    })
    .then((data) => {
      if (!data) return;
      if (data.errors) {
        const errorMessage = data.errors[0];
        alert(errorMessage);
      }
      console.log(data);

      if (data == "success") {
        window.location.reload();
      }
    });
};

export const registration = () => {
  const email = FORMS.registrationEmail.value;
  const password = FORMS.registrationPassword.value;
  const username = FORMS.registrationUserName.value;

  if (!registrationValidation(email, password, username)) {
    alert("Please fill in all fields");
    return;
  }

  const url = `${baseUrl}/api/user/register`;
  const body = JSON.stringify({
    email,
    password,
    username,
  });

  const res = fetchData(url, "POST", body);

  res
    .then((response) => response.json())
    .then((data) => {
      if (data.errors) {
        const errorMessage = data.errors[0];
        alert(errorMessage);
      }

      console.log(data);
    })
    .then(() => showLoginForm());
};

export const logOut = async () => {
  const url = `${baseUrl}/api/user/logout`;

  const res = fetchData(url, "POST");

  res
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data === "success") {
        window.location.reload();
      } else {
        alert("Failed to log out");
      }
    });
};
