// declare global {
//   interface Window {
//     userData: {
//       authenticated: string;
//       username: string;
//     };
//   }
// }

import { fetchData } from "./api";
import { showLoginForm } from "../components/beforeAuth/forms/formToggle";
import { registrationValidation } from "../validation/index";
import { MAIN } from "./dom";
import { baseUrl } from "../helpers/constants";
import renderLoginForm from "../components/beforeAuth/forms/loginForm";

export const logoutEventListener = () => {
  const logOutIcon = document.getElementById("logOutIcon");
  if (logOutIcon) {
    logOutIcon.addEventListener("click", logOut);
  }
};

export const authCheck = () => {
  if (window.userData.authenticated === "true") {
    if (MAIN.authenticatedContent)
      MAIN.authenticatedContent.style.display = "flex";

    logoutEventListener();
  } else {
    if (MAIN.unauthenticatedContent)
      MAIN.unauthenticatedContent.style.display = "flex";

    renderLoginForm();
  }
};

export const login = () => {
  const loginEmail = (document.getElementById("loginEmail") as HTMLInputElement)
    ?.value;
  const loginPassword = (
    document.getElementById("loginPassword") as HTMLInputElement
  )?.value;

  const url = `${baseUrl}/api/user/login`;
  const body = JSON.stringify({
    email: loginEmail,
    password: loginPassword,
  });

  const res = fetchData(url, "POST", body);

  res
    .then((response) => {
      // @ts-ignore
      if (response.status === 401) {
        alert("Invalid email or password");
        return;
      }
      // @ts-ignore
      return response.json();
    })
    .then((data) => {
      if (!data) return;
      if (data.errors) {
        document.getElementById("login-error-message")!.innerHTML =
          data.errors[0];
      }

      if (data == "success") {
        window.location.reload();
      }
    });
};

export const registration = () => {
  const email = (document.getElementById("reg-email") as HTMLInputElement)
    ?.value;
  const password = (document.getElementById("reg-password") as HTMLInputElement)
    ?.value;
  const username = (document.getElementById("reg-username") as HTMLInputElement)
    ?.value;

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
