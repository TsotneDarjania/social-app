export const fetchData = async (
  url: string,
  method: string,
  body?: any
): Promise<Response> => {
  const header = {
    "Content-Type": "application/json",
  };

  const response = await fetch(url, {
    method,
    body,
    headers: header,
  });

  return response;
};

export const registrationValidation = (
  email: string,
  password: string,
  username: string
): boolean => {
  if (email === "" || password === "" || username === "") {
    return false;
  }
  return true;
};
