export const registrationValidation = (
  email: string,
  password: string,
  username: string
) => {
  if (email === "" || password === "" || username === "") {
    return false;
  }
  return true;
};
