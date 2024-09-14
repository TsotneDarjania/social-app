import style from "./style.module.css";
import { fetchData, registrationValidation } from "../../../utils/helpers";
import { baseUrl } from "../../../utils/constants";
import { createSignal } from "solid-js";

const RegistrationForm = () => {
  const [formData, setFormData] = createSignal({
    email: "",
    password: "",
    userName: "",
  });

  const handleChange = (e: Event) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData({
      ...formData(),
      [name]: value,
    });
  };

  const registration = () => {
    const { email, password, userName } = formData();

    if (!registrationValidation(email, password, userName)) {
      alert("Please fill in all fields");
      return;
    }

    const url = `${baseUrl}/api/user/register`;
    const body = JSON.stringify({
      email,
      password,
      userName,
    });

    fetchData(url, "POST", body)
      .then((response) => {
        if (response.status === 400) {
          alert("User with this email already exists");
        }
        return response.json();
      })
      .then((data) => {
        if (data.errors) {
          const errorMessage = data.errors[0];
          alert(errorMessage);
        }
        window.location.reload();

        console.log(data);
      });
  };

  return (
    <form class={style.form}>
      <div class={style.signUpHeader}>
        <h2>Sign Up</h2>

        <button type="button" class={style.closeBtn}>
          X
        </button>
      </div>

      <input
        id="reg-userName"
        type="text"
        name="userName"
        placeholder="Username"
        required
        value={formData().userName}
        onInput={handleChange}
      />
      <input
        id="reg-password"
        type="password"
        name="password"
        placeholder="Password"
        required
        value={formData().password}
        onInput={handleChange}
      />

      <input
        id="reg-email"
        type="email"
        name="email"
        placeholder="Email"
        required
        value={formData().email}
        onInput={handleChange}
      />

      <button type="button" class={style.signUpBtn} onClick={registration}>
        Sign Up
      </button>
    </form>
  );
};

export default RegistrationForm;
