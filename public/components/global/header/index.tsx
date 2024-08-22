import { useApp } from "../../../store/AppProvider";
import { CustomWindow } from "../../../types";
import style from "./style.module.css";

export function Header() {
  const appData = useApp();

  // @ts-ignore
  console.log(appData());

  return (
    <div class={style.header}>
      {/* <div class={style.logoSearchView}>
        <div class={style.socioSpace}>SOCIOSPACE</div>
        <input class={style.headerSearch} type="search" />
      </div>

      <div class={style.navBar}>
        <a href="#">Home</a>
        <a href="#">Story</a>

        <div class={style.notificationWrapper}>
          <button class={style.notificationBtn}>Notifications</button>

          <div
            style={`display: ${userData.notifications > 0 ? "inline" : "none"}`}
            class={style.notificationNumber}
          >
            {userData.notifications}
          </div>
        </div>
      </div>

      <div class={style.userProfile}>
        <div class={style.userName}> {userData.username}</div>
        <img
          class={style.logOutIcon}
          src={appData.logOutImage}
          alt="logout"
        ></img>
      </div> */}
    </div>
  );
}
