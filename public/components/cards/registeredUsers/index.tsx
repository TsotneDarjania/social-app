import style from "./style.module.css";

type RegisteredUsersProps = {
  userName: string;
  id: string;
  onAddFriendClick: (id: string) => void;
};

const RegisteredUsers = ({
  userName,
  id,
  onAddFriendClick,
}: RegisteredUsersProps) => {
  return (
    <li class={style.registeredUserCard}>
      <p>{userName}</p>

      <button
        class={style.addFriendButton}
        onClick={() => onAddFriendClick(id)}
      >
        Add Friend
      </button>
    </li>
  );
};

export default RegisteredUsers;
