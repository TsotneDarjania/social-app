export const registrationValidation = (email, password, username) => {
  if (email === "" || password === "" || username === "") {
    return false;
  }
  return true;
};
