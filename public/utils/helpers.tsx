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
  userName: string
): boolean => {
  if (email === "" || password === "" || userName === "") {
    return false;
  }
  return true;
};

export const decodeHtmlAndParse = (html: string) => {
  const decodedString = html.replace(/&#34;/g, '"');

  const result = JSON.parse(decodedString);

  return result;
};
