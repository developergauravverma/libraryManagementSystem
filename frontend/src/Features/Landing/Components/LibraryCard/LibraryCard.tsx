import Styles from "./Styles.module.css";
import libraryCard from "../../../../assets/librarycard.png";
import { FC, MouseEventHandler } from "react";
import { AppDispatch } from "../../../../Redux/ReduxStore";
import { useDispatch } from "react-redux";
import { setDisplayLibraryCard } from "../../../../Redux/Slice/ModalSlice";

const { getLibraryCard, getLibraryCardImg, getLibraryCardLink } = Styles;

const LibraryCard: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const handleDisplayModal: MouseEventHandler<HTMLSpanElement> = () => {
    dispatch(setDisplayLibraryCard(true));
  };
  return (
    <div className={getLibraryCard}>
      <h2>Get A Library</h2>
      <img src={libraryCard} className={getLibraryCardImg} />
      <p>
        Learn how to get own library card{" "}
        <span className={getLibraryCardLink} onClick={handleDisplayModal}>
          here.
        </span>
      </p>
    </div>
  );
};

export default LibraryCard;
