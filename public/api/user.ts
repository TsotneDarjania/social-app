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

export async function getMessages(sender: string, recipient: string) {
  return fetch(`${baseUrl}/api/user/get-messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ senderUserId: sender, recipientUserId: recipient }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
}

export async function sendMessage(
  fromUserId: string,
  fromUserName: string,
  toUserId: string,
  toUserName: string,
  message: string
) {
  console.log(`From User ID : ${fromUserId}`);
  console.log(`to UserId ID : ${toUserId}`);
  console.log(`message : ${message}`);

  return fetch(`${baseUrl}/api/user/send-message`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fromUserId,
      fromUserName,
      toUserId,
      toUserName,
      message,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    });
}
