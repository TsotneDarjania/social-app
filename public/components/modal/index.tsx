import style from "./style.module.css";
import { JSX } from "solid-js/jsx-runtime";

type ModalProps = {
  handleModalClose: () => void;
  children: JSX.Element;
  title: string;
};

const Modal = ({ handleModalClose, children, title }: ModalProps) => {
  return (
    <div class={style.modal}>
      <div class={style.content}>
        <div class={style.header}>
          <h4>{title}</h4>

          <span class={style.close} onClick={handleModalClose}>
            &times;
          </span>
        </div>

        {children}
      </div>
    </div>
  );
};

export default Modal;
