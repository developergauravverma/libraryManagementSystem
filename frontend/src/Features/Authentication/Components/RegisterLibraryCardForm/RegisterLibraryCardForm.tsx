import { FC } from "react";
import styles from "./Styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../Redux/ReduxStore";
import { getLibraryCard } from "../../../../Redux/Slice/AuthanticationSclice";
import {
  setDisplayLibraryCard,
  setDisplayLogin,
} from "../../../../Redux/Slice/ModalSlice";

const {
  registerLibraryCardCotainer,
  registerLibraryCardText,
  registerLibraryModalButton,
} = styles;

const RegisterLibraryCardForm: FC = () => {
  const userState = useSelector((state: RootState) => state.authentication);
  const dispatch: AppDispatch = useDispatch();

  const handleCreateLibraryCard = () => {
    if (userState.loggedInUser) {
      dispatch(getLibraryCard(userState.loggedInUser?._id));
    }
  };

  const handleLoginClick = () => {
    dispatch(setDisplayLibraryCard(false));
    dispatch(setDisplayLogin(true));
  };

  return (
    <>
      {userState.loggedInUser ? (
        <div className={registerLibraryCardCotainer}>
          <h3 className={registerLibraryCardText}>
            Welcome {userState.loggedInUser.firstName}{" "}
            {userState.loggedInUser.lastName}!
          </h3>
          <h5 className={registerLibraryCardText}>
            To signup for a new library card, or you forgot the ID number on you
            card, use the button below.
          </h5>
          {userState.libraryCard ? (
            <p className={registerLibraryCardText}>
              Your library card number: {userState.libraryCard}
            </p>
          ) : (
            <button
              className={registerLibraryModalButton}
              onClick={handleCreateLibraryCard}
            >
              Get Library Card
            </button>
          )}
        </div>
      ) : (
        <div className={registerLibraryCardCotainer}>
          <h3 className={registerLibraryCardText}>
            You must be a member of the library to obtain a library card.
          </h3>
          <h4 className={registerLibraryCardText}>
            Use the button below to login to your account or register for free.
          </h4>
          <button
            className={registerLibraryModalButton}
            onClick={handleLoginClick}
          >
            Login Here
          </button>
        </div>
      )}
    </>
  );
};

export default RegisterLibraryCardForm;
