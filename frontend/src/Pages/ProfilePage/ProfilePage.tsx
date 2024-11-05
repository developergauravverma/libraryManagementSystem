import { useDispatch, useSelector } from "react-redux";
import Styles from "./Styles.module.css";
import { AppDispatch, RootState } from "../../Redux/ReduxStore";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchUser } from "../../Redux/Slice/AuthanticationSclice";
import { UpdateUserForm } from "../../Features/Profile";

const { profilePageCols, profilePageLeftColumn, profilePageRightColumn } =
  Styles;

const ProfilePage = () => {
  const loggedInUser = useSelector(
    (state: RootState) => state.authentication.loggedInUser
  );
  const profileUser = useSelector(
    (state: RootState) => state.authentication.profileUser
  );
  const dispatch: AppDispatch = useDispatch();
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (userId) {
      if (loggedInUser?._id === userId || loggedInUser?.type === "EMPLOYEE") {
        dispatch(
          fetchUser({
            userId,
            property: "profileUser",
          })
        );
      } else {
        navigate("/");
      }
    }
  }, [userId]);

  return (
    <div className="page">
      <div className="page-container">
        <h1>
          {profileUser?.firstName} {profileUser?.lastName}'s Profile
        </h1>
        <div className={profilePageCols}>
          <div className={profilePageLeftColumn}>
            <UpdateUserForm />
          </div>
          <div className={profilePageRightColumn}></div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
