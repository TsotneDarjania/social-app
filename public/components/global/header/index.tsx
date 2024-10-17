import { createSignal } from "solid-js";
import { Appcontext, useApp } from "../../../store/AppProvider";
import { CustomWindow, User } from "../../../types";
import { baseUrl } from "../../../utils/constants";
import { fetchData } from "../../../utils/helpers";
import Modal from "../../modal";
import style from "./style.module.css";
import FriendRequests from "../../cards/friendRequests";
import { deleteUser } from "../../../api/user";
import { useNotifications } from "../../../store/NotificationContext";

export const Header = () => {
  const [modalState, setModalState] = createSignal({
    isOpenSettings: false,
    isOpenNotifications: false,
  });

  const customWindow = window as unknown as CustomWindow;
  const userData: Appcontext = useApp();
  const { friendRequests } = useNotifications();

  const handleModalClose = () => {
    setModalState({ isOpenNotifications: false, isOpenSettings: false });
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
  let isAlreadyConfirm = false
  const confirmFriendRequest = (friendId: string, friendName: string) => {
    const url = `${baseUrl}/api/user/confirm-friend-request`;
    const body = JSON.stringify({
      fromFriendName: customWindow.userData.userName,
      fromFriendId: customWindow.userData.userId,
      toUserId:friendId,
      toUserName:friendName,
    });
    if(isAlreadyConfirm) return
    
    isAlreadyConfirm = true
    fetchData(url, "POST", body).then((response) => {
      if (response.status === 200) {
        isAlreadyConfirm = false
        window.location.reload();
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
          <button
            class={style.notificationBtn}
            onClick={() =>
              setModalState({
                ...modalState(),
                isOpenNotifications: !modalState().isOpenNotifications,
              })
            }
          >
            Notifications
          </button>

          <div
            style={`display: ${
              friendRequests().length > 0 ? "inline" : "none"
            }`}
            class={style.notificationNumber}
          >
            {friendRequests().length}
          </div>
        </div>
      </div>

      <div class={style.userProfile}>
        <div
          onClick={() => {
            setModalState({ ...modalState(), isOpenSettings: true });
          }}
          class={style.userName}
        >
          {" "}
          {userData?.userName}
        </div>
        {modalState().isOpenSettings && (
          <Modal handleModalClose={handleModalClose} title="Settings">
            <button onClick={deleteUser}>Delete Account</button>
          </Modal>
        )}

        <img
          class={style.logOutIcon}
          src={customWindow?.appData?.logOutImage}
          alt="logout"
          onClick={logOut}
        ></img>
      </div>

      {/* Notification Modal */}
      {modalState().isOpenNotifications && (
        <Modal
          handleModalClose={handleModalClose}
          title={friendRequests().length ? "Friend Requests" : ""}
        >
          {friendRequests().length && (
            <div>
              {friendRequests().map((item: User) => (
                <FriendRequests
                  friendId={item.userId}
                  friendName={item.userName}
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
