import { registration } from "../../../modules/auth";
import { showLoginForm } from "./formToggle";

const html = `<form class="form">
            <div class="sign-up-header">
              <h2>Sign Up</h2>

              <button
                type="button"
                class="closeBtn"
                id="closeRegistrationFormBtn"
              >
                X
              </button>
            </div>

            <input
              id="reg-username"
              type="text"
              name="username"
              placeholder="Username"
              required
            />
            <input
              id="reg-password"
              type="password"
              name="password"
              placeholder="Password"
              required
            />

            <input
              id="reg-email"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <button type="button" id="sign-up-button" class="SignUpBtn">
              Sign Up
            </button>
          </form>`;

const renderSignUpForm = () => {
  const signUpForm = document.getElementById("sign-up-form");
  if (signUpForm) signUpForm.innerHTML = html;

  const signUpButton = document.getElementById("sign-up-button");
  const closeRegistrationFormBtn = document.getElementById(
    "closeRegistrationFormBtn"
  );

  closeRegistrationFormBtn?.addEventListener("click", showLoginForm);
  signUpButton?.addEventListener("click", registration);
};

export default renderSignUpForm;
