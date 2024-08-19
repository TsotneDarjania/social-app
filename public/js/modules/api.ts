export const fetchData = async (url: string, method: string, body?: any) => {
  const header = {
    "Content-Type": "application/json",
  };

  const response = await fetch(url, {
    method,
    body,
    headers: header,
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response;
};
