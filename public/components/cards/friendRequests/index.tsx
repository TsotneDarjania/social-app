import style from "./style.module.css";

type FriendRequestsProps = {
  friendName: string;
  friendId: string;
  onConfirmClick: (friendId: string, friendName: string) => void;
};

const FriendRequests = ({
  friendName,
  friendId,
  onConfirmClick,
}: FriendRequestsProps) => {
  return (
    <li class={style.friendRequestCard}>
      <p>{friendName}</p>

      <button
        class={style.confirmBtn}
        onClick={() => onConfirmClick(friendId, friendName)}
      >
        Confirm
      </button>
    </li>
  );
};

export default FriendRequests;
