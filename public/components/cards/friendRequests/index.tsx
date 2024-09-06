import style from "./style.module.css";

type FriendRequestsProps = {
  userName: string;
  userId: string;
  onConfirmClick: (userId: string, userName: string) => void;
};

const FriendRequests = ({
  userName,
  userId,
  onConfirmClick,
}: FriendRequestsProps) => {
  return (
    <li class={style.friendRequestCard}>
      <p>{userName}</p>

      <button
        class={style.confirmBtn}
        onClick={() => onConfirmClick(userId, userName)}
      >
        Confirm
      </button>
    </li>
  );
};

export default FriendRequests;
