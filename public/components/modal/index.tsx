import { Accessor } from "solid-js";
import style from "./style.module.css";

type ModalProps = {
  handleModalClose: () => void;
};

const Modal = ({ handleModalClose }: ModalProps) => {
  return (
    <div class={style.modal}>
      <div class={style.content}>
        <div class={style.header}>
          <h4>Friend Requests</h4>
          <span class={style.close} onClick={handleModalClose}>
            &times;
          </span>
        </div>

        <div>
          <li class={style.friendRequestCard}>
            {/* <p><%= item.userName %></p> */}

            <button
              class={style.confirmBtn}
              // onclick="confirmFriendRequest(`<%= item.userId %>`, `<%= item.userName %>`)"
            >
              Confirm
            </button>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Modal;
