import { createSignal } from "solid-js";
import LoginForm from "./loginForm";
import RegistrationForm from "./registrationForm";
import { FormName } from "../../types";

const Forms = () => {
  const [form, setForm] = createSignal<FormName>("login");

  const handleSetForm = (formName: FormName) => {
    setForm(formName);
  };

  return (
    <>
      {form() === "login" && <LoginForm onCreateAccountPress={handleSetForm} />}
      {form() === "registration" && (
        <RegistrationForm onClose={handleSetForm} />
      )}
    </>
  );
};

export default Forms;
