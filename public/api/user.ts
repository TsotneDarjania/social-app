import { baseUrl } from "../utils/constants";
import { fetchData } from "../utils/helpers";

export const deleteUser = async () => {
  const url = `${baseUrl}/api/user/delete`;
  const res = fetchData(url, "DELETE");

  res
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data === "success") {
        window.location.reload();
      } else {
        alert("Failed to delete user account");
      }
    });
};
