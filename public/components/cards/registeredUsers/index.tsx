import style from "./style.module.css";

type RegisteredUsersProps = {
  userName: string;
  id: string;
  disabled: boolean;
  onAddFriendClick: (
    potentialFriendId: string,
    potentialFriendName: string
  ) => void;
};

const RegisteredUsers = ({
  userName,
  id,
  disabled,
  onAddFriendClick,
}: RegisteredUsersProps) => {
  return (
    <li class={style.registeredUserCard}>
      <p>{userName}</p>

      <button
        disabled={disabled}
        class={`${style.addFriendButton} ${
          disabled ? style.addFriendButtonDisabled : ""
        }`}
        onClick={() => onAddFriendClick(id, userName)}
      >
        Add Friend
      </button>
    </li>
  );
};

export default RegisteredUsers;
