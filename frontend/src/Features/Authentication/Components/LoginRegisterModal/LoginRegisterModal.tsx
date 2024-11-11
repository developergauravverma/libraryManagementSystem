import { FC, useEffect, useState } from "react";
import { Modal } from "../../../../Components";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../Redux/ReduxStore";
import { setDisplayLogin } from "../../../../Redux/Slice/ModalSlice";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";

const LoginRegisterModal: FC = () => {
  const authState = useSelector((state: RootState) => state.authentication);
  const dispatch: AppDispatch = useDispatch();

  const [login, setLogin] = useState<boolean>(true);

  const closeModal = () => {
    dispatch(setDisplayLogin(false));
  };

  const toggleLogin = () => {
    setLogin(!login);
  };

  useEffect(() => {
    if (authState.loggedInUser) {
      closeModal();
    }
    return () => {
      if (authState.loggedInUser) {
        localStorage.setItem("userId", authState.loggedInUser._id);
      }
    };
  }, [authState.loggedInUser]);

  return (
    <Modal
      toggleModal={closeModal}
      content={
        login ? <LoginForm toggleRegister={toggleLogin} /> : <RegisterForm />
      }
    ></Modal>
  );
};

export default LoginRegisterModal;
