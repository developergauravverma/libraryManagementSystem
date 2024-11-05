import { useDispatch, useSelector } from "react-redux";
import Styles from "./Styles.module.css";
import { AppDispatch, RootState } from "../../../../Redux/ReduxStore";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { User } from "../../../../models/User";
import { useNavigate } from "react-router-dom";
import { Create } from "@mui/icons-material";
import {
  resetUser,
  updateUser,
} from "../../../../Redux/Slice/AuthanticationSclice";

const { updateUserForm, updateUserInputGroup, updateUserInput, profileButton } =
  Styles;

const UpdateUserForm = () => {
  const userState = useSelector((state: RootState) => state.authentication);
  const dispatch: AppDispatch = useDispatch();
  const [displayUpdate, setDisplayUpdate] = useState<boolean>(false);
  const [user, setUser] = useState<User | undefined>(userState.profileUser);
  const navigate = useNavigate();

  const updateUserState = (e: ChangeEvent<HTMLInputElement>) => {
    setDisplayUpdate(true);
    if (e.target.value && e.target.name && user) {
      setUser({
        ...user,
        [e.target.name]: e.target.value,
      });
    }
  };

  const submitUpdateUser = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (user) dispatch(updateUser(user));
    setDisplayUpdate(false);
  };

  const logout = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    localStorage.removeItem("userId");
    dispatch(resetUser("loggedInUser"));
    dispatch(resetUser("profileUser"));
    navigate("/");
  };

  useEffect(() => {
    if (!user) {
      setUser(userState.profileUser);
    }
  }, [userState.profileUser, user]);

  return (
    <form className={updateUserForm}>
      <div className={updateUserInputGroup}>
        <h4>First Name:</h4>
        <input
          className={updateUserInput}
          name="firstName"
          value={user?.firstName}
          onChange={updateUserState}
          disabled={userState.loggedInUser?._id !== userState.profileUser?._id}
        />
        {userState.loggedInUser?._id === userState.profileUser?._id && (
          <Create
            sx={{
              position: "absolute",
              top: "65%",
              right: "0",
            }}
          />
        )}
      </div>
      <div className={updateUserInputGroup}>
        <h4>Last Name:</h4>
        <input
          className={updateUserInput}
          name="lastName"
          value={user?.lastName}
          onChange={updateUserState}
          disabled={userState.loggedInUser?._id !== userState.profileUser?._id}
        />
        {userState.loggedInUser?._id === userState.profileUser?._id && (
          <Create
            sx={{
              position: "absolute",
              top: "65%",
              right: "0",
            }}
          />
        )}
      </div>
      <div className={updateUserInputGroup}>
        <h4>Email:</h4>
        <input
          className={updateUserInput}
          name="email"
          value={user?.email}
          onChange={updateUserState}
          disabled={userState.loggedInUser?._id !== userState.profileUser?._id}
        />
        {userState.loggedInUser?._id === userState.profileUser?._id && (
          <Create
            sx={{
              position: "absolute",
              top: "65%",
              right: "0",
            }}
          />
        )}
      </div>
      {displayUpdate ? (
        <button className={profileButton} onClick={submitUpdateUser}>
          Update Profile
        </button>
      ) : (
        <></>
      )}
      {userState.loggedInUser?._id === userState.profileUser?._id ? (
        <button className={profileButton} onClick={logout}>
          Logout of Account
        </button>
      ) : (
        <></>
      )}
    </form>
  );
};

export default UpdateUserForm;
