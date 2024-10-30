import { FC } from "react";
import styles from "./Styles.module.css";

const { modalBg, modal, modalExit } = styles;

interface modalProps {
  toggleModal(): void;
  content: JSX.Element;
}

const Modal: FC<modalProps> = ({ toggleModal, content }) => {
  return (
    <div className={modalBg}>
      <div className={modal}>
        <h5 className={modalExit} onClick={toggleModal}>
          X
        </h5>
        {content}
      </div>
    </div>
  );
};

export default Modal;
