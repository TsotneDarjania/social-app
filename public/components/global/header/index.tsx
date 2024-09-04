import { createSignal } from "solid-js";
import { useApp } from "../../../store/AppProvider";
import { Appcontext, CustomWindow } from "../../../types";
import { baseUrl } from "../../../utils/constants";
import { fetchData } from "../../../utils/helpers";
import Modal from "../../modal";
import style from "./style.module.css";

export const Header = () => {
  const [isOpen, setIsOpen] = createSignal(false);

  const customWindow = window as unknown as CustomWindow;
  const userData: Appcontext = useApp();

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
            style={`display: ${
              userData?.notifications > 0 ? "inline" : "none"
            }`}
            class={style.notificationNumber}
          >
            {userData?.notifications}
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

      {isOpen() && <Modal handleModalClose={handleModalClose} />}
    </div>
  );
};
