import { useNotifications } from "../../../store/NotificationContext";
import style from "./style.module.css";

type RegisteredUserProps = {
  userName: string;
  id: string;
  disabled: boolean;
  onAddFriendClick: (
    potentialFriendId: string,
    potentialFriendName: string
  ) => void;
};


const RegisteredUser = ({
  userName,
  id,
  disabled,
  onAddFriendClick,
}: RegisteredUserProps) => {
  const { connectedUsers, registeredUsersList } = useNotifications();
  const isActive = connectedUsers().map((el)=>el.userName).includes(userName)
  // console.log(isActive);
  // console.log(connectedUsers())
  // console.log(userName)
  
  return (
    <li class={style.registeredUserCard}>
      <p>{userName}</p>
      <div class={style.menu}>
      <button
        disabled={disabled}
        class={`${style.addFriendButton} ${
          disabled ? style.addFriendButtonDisabled : ""
        }`}
        onClick={() => onAddFriendClick(id, userName)}
      >
        Add Friend
      </button>
      <div style={{"background-color": isActive ? "green" : "grey"}}  class={style.indicator}>
         
      </div>
      </div>
    </li>
  );
};

export default RegisteredUser;
