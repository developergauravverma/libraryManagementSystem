import { FC } from "react";
import styles from "./Styles.module.css";
import { AppDispatch } from "../../../../Redux/ReduxStore";
import { useDispatch } from "react-redux";
import { setDisplayLibraryCard } from "../../../../Redux/Slice/ModalSlice";
import { Modal } from "../../../../Components";
import RegisterLibraryCardForm from "../RegisterLibraryCardForm/RegisterLibraryCardForm";

const {} = styles;

const LibraryCardModal: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const closeModal = () => {
    dispatch(setDisplayLibraryCard(false));
  };
  return (
    <Modal content={<RegisterLibraryCardForm />} toggleModal={closeModal} />
  );
};

export default LibraryCardModal;
