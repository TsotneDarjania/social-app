import { CustomWindow, User } from "../../../types";
import { baseUrl } from "../../../utils/constants";
import { decodeHtmlAndParse, fetchData } from "../../../utils/helpers";
import RegisteredUsers from "../../cards/registeredUsers";
import style from "./style.module.css";

const Body = () => {
  const customWindow = window as unknown as CustomWindow;
  const usersList = decodeHtmlAndParse(
    customWindow.userData.registeredUsersList
  );
  const friendsList = decodeHtmlAndParse(customWindow.userData.userFriends);

  const sendFriendRequest = (friendId: string) => {
    const url = `${baseUrl}/api/user/send-friend-request`;
    const body = JSON.stringify({
      userName: customWindow.userData.userName,
      userId: customWindow.userData.userId,
      friendId,
    });

    fetchData(url, "POST", body).then((response) => {
      if (response.status === 200) {
        alert("Friend request sent successfully");
      } else {
        alert("Failed to send friend request");
      }
    });
  };

  return (
    <div class={style.container}>
      <div class={style.usersWrapper}>
        <h3>Users</h3>

        <ul class={style.usersListContainer}>
          {usersList.map((item: User) => (
            <RegisteredUsers
              id={item.id}
              userName={item.userName}
              onAddFriendClick={sendFriendRequest}
            />
          ))}
        </ul>
      </div>

      <div class={style.friendsWrapper}>
        <h3>Friends</h3>

        <div class={style.friendsContainer}>
          {friendsList.map((item: User) => (
            <li class={style.friendsCard}>
              <p>{item.userName}</p>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
