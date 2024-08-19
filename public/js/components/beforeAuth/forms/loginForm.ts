import { login } from "../../../modules/auth";
import { showSignUpForm } from "./formToggle";

const html = `<form class="form">
            <h2>Log in</h2>
            <input
              id="loginEmail"
              type="email"
              name="email"
              placeholder="email"
              required
            />

            <input
              id="loginPassword"
              type="password"
              name="password"
              placeholder="Password"
              required
            />

            <button id="LoginBtn" type="button" class="LoginBtn">Login</button>
            <div class="separator"></div>

            <button type="button" class="createBtn" id="createAccountBtn">
              Create Account
            </button>
          </form>`;

const renderLoginForm = () => {
  const loginForm = document.getElementById("login-form");
  if (loginForm) loginForm.innerHTML = html;

  const loginButton = document.getElementById("LoginBtn");
  const createAccountBtn = document.getElementById("createAccountBtn");

  createAccountBtn?.addEventListener("click", showSignUpForm);
  loginButton?.addEventListener("click", login);
  createAccountBtn?.addEventListener("click", showSignUpForm);
};

export default renderLoginForm;
