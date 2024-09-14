import { Appcontext, useApp } from "../../../store/AppProvider";
import { useNotifications } from "../../../store/NotificationContext";
import { CustomWindow, User } from "../../../types";
import { baseUrl } from "../../../utils/constants";
import { fetchData } from "../../../utils/helpers";
import RegisteredUsers from "../../cards/registeredUsers";
import style from "./style.module.css";

const Body = () => {
  const customWindow = window as unknown as CustomWindow;
  const userData: Appcontext = useApp();

  const { userFriends, sentFriendRequests } = userData;
  const { connectedUsers } = useNotifications();
  const sentRequestsIDs = sentFriendRequests.map((item) => item.userId);
  const userFriendsIDs = userFriends.map((item) => item.userId);

  const sendFriendRequest = (
    potentialFriendId: string,
    potentialFriendName: string
  ) => {
    const url = `${baseUrl}/api/user/send-friend-request`;
    const body = JSON.stringify({
      userId: customWindow.userData.userId,
      userName: customWindow.userData.userName,
      potentialFriendId,
      potentialFriendName,
    });

    fetchData(url, "POST", body).then((response) => {
      if (response.status === 200) {
        window.location.reload();
      } else {
        alert("Failed to send friend request");
      }
    });
  };

  return (
    <div class={style.container}>
      <div class={style.usersWrapper}>
        <h3>Connected Users</h3>

        <ul class={style.usersListContainer}>
          {connectedUsers()?.map((item: User) => {
            const isDisabled =
              sentRequestsIDs.includes(item.userId) ||
              userFriendsIDs.includes(item.userId);

            return (
              <RegisteredUsers
                id={item.userId}
                userName={item.userName}
                disabled={isDisabled}
                onAddFriendClick={sendFriendRequest}
              />
            );
          })}
        </ul>
      </div>

      <div class={style.friendsWrapper}>
        <h3>Friends</h3>

        <div class={style.friendsContainer}>
          {userFriends.map((item: User) => (
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
