import { CustomWindow } from "../../../types";
import style from "./style.module.css";

const customWindow = window as unknown as CustomWindow;

const Body = () => {
  return (
    <div class={style.container}>
      <div class={style.usersWrapper}>
        <h3>Users</h3>

        <ul class={style.usersListContainer}>
          {/* {customWindow.userData.registeredUsersList.map((item) => (
            <li class={style.registeredUserCard}>
              <p>{item}</p>

              <button class={style.addFriendButton}>Add Friend</button>
            </li>
          ))} */}
        </ul>
      </div>

      <div class={style.friendsWrapper}>
        <h3>Friends</h3>

        <div class={style.friendsContainer}>
          {/* {customWindow.userData.userFriends.map((item) => (
            <li class={style.friendsCard}>
              <p>{item}</p>
            </li>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Body;
