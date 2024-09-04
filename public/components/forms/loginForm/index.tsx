import { baseUrl } from "../../../utils/constants";
import { FormName } from "../../../types";
import style from "./style.module.css";
import { fetchData } from "../../../utils/helpers";
import { createSignal } from "solid-js";

type LoginFormProps = {
  onCreateAccountPress: (formName: FormName) => void;
};

const LoginForm = ({ onCreateAccountPress }: LoginFormProps) => {
  const [formData, setFormData] = createSignal({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = createSignal("");

  const handleInputChange = (e: Event) => {
    const target = e.currentTarget as HTMLInputElement;
    setFormData({
      ...formData(),
      [target.name]: target.value,
    });
  };

  const login = async () => {
    const url = `${baseUrl}/api/user/login`;
    const body = JSON.stringify({
      email: formData().email,
      password: formData().password,
    });

    try {
      const response = await fetchData(url, "POST", body);

      if (response.status === 401) {
        alert("Invalid email or password");
        return;
      }

      const data = await response.json();

      if (data.errors) {
        setErrorMessage(data.errors[0]);
        return;
      }

      if (data === "success") {
        window.location.reload();
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("An error occurred during login. Please try again.");
    }
  };

  return (
    <form class={style.form}>
      <h2>Log in</h2>

      <input
        id="loginEmail"
        type="email"
        name="email"
        placeholder="Email"
        required
        value={formData().email}
        onInput={handleInputChange}
      />

      <input
        id="loginPassword"
        type="password"
        name="password"
        placeholder="Password"
        required
        value={formData().password}
        onInput={handleInputChange}
      />

      <button type="button" class={style.loginBtn} onClick={login}>
        Login
      </button>

      <p id="login-error-message" class={style.authErrorMessage}>
        {errorMessage()}
      </p>
      <div class={style.separator}></div>

      <button
        type="button"
        class={style.createBtn}
        onClick={() => onCreateAccountPress("registration")}
      >
        Create Account
      </button>
    </form>
  );
};

export default LoginForm;
