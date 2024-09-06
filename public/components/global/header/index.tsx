import { createSignal } from "solid-js";
import { useApp } from "../../../store/AppProvider";
import { Appcontext, CustomWindow, User } from "../../../types";
import { baseUrl } from "../../../utils/constants";
import { decodeHtmlAndParse, fetchData } from "../../../utils/helpers";
import Modal from "../../modal";
import style from "./style.module.css";
import FriendRequests from "../../cards/friendRequests";

export const Header = () => {
  const [isOpen, setIsOpen] = createSignal(false);

  const customWindow = window as unknown as CustomWindow;
  const userData: Appcontext = useApp();

  const notifications = decodeHtmlAndParse(
    userData.notifications as unknown as string
  );
  const friendRequests = notifications.friendRequests;

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const logOut = async () => {
    const url = `${baseUrl}/api/user/logout`;
    const res = fetchData(url, "POST");

    res
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data === "success") {
          window.location.reload();
        } else {
          alert("Failed to log out");
        }
      });
  };

  const confirmFriendRequest = (friendId: string, friendName: string) => {
    const url = `${baseUrl}/api/user/confirm-friend-request`;
    const body = JSON.stringify({
      userName: customWindow.userData.userName,
      userId: customWindow.userData.userId,
      friendId,
      friendName,
    });

    fetchData(url, "POST", body).then((response) => {
      if (response.status === 200) {
        alert("Friend request confirmed successfully");
      } else {
        alert("Failed to confirm friend request");
      }
    });
  };

  return (
    <div class={style.header}>
      <div class={style.logoSearchView}>
        <div class={style.socioSpace}>SOCIOSPACE</div>
        <input class={style.headerSearch} type="search" />
      </div>

      <div class={style.navBar}>
        <a href="#">Home</a>
        <a href="#">Story</a>

        <div class={style.notificationWrapper}>
          <button class={style.notificationBtn} onClick={handleModalOpen}>
            Notifications
          </button>

          <div
            style={`display: ${friendRequests.length > 0 ? "inline" : "none"}`}
            class={style.notificationNumber}
          >
            {friendRequests.length}
          </div>
        </div>
      </div>

      <div class={style.userProfile}>
        <div class={style.userName}> {userData?.userName}</div>

        <img
          class={style.logOutIcon}
          src={customWindow?.appData?.logOutImage}
          alt="logout"
          onClick={logOut}
        ></img>
      </div>

      {isOpen() && (
        <Modal handleModalClose={handleModalClose} title="Friend Requests">
          {friendRequests.length && (
            <div>
              {friendRequests.map((item: User) => (
                <FriendRequests
                  userId={item.id}
                  userName={item.userName}
                  onConfirmClick={confirmFriendRequest}
                />
              ))}
            </div>
          )}
        </Modal>
      )}
    </div>
  );
};
