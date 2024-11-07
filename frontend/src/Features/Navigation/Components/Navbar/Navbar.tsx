import { FC, KeyboardEvent, useRef } from "react";
import styles from "./Styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../Redux/ReduxStore";
import { Link, useNavigate } from "react-router-dom";
import { setDisplayLogin } from "../../../../Redux/Slice/ModalSlice";
import { Book, Search } from "@mui/icons-material";

const {
  navbar,
  navbarLogoSection,
  navbarOptionSection,
  navbarOption,
  navbarLink,
  navbarSearchBox,
  navbarSearchInput,
} = styles;

const Navbar: FC = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const authState = useSelector((state: RootState) => state.authentication);
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const handleEnterKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === "Enter" &&
      searchRef &&
      searchRef.current &&
      searchRef.current.value.length > 0
    ) {
      navigate(
        `/catalog?barcode=${searchRef.current.value}&title=${searchRef.current.value}&description=${searchRef.current.value}`
      );
      searchRef.current.value = "";
    }
  };
  const searchIconClicked = () => {
    if (searchRef && searchRef.current && searchRef.current.value.length > 0) {
      navigate(
        `/catalog?barcode=${searchRef.current.value}&title=${searchRef.current.value}&description=${searchRef.current.value}`
      );
      searchRef.current.value = "";
    }
  };
  const navigateToProfile = () => {
    if (authState.loggedInUser)
      navigate(`/profile/${authState.loggedInUser._id}`);
  };
  const toggleLogin = () => {
    dispatch(setDisplayLogin(true));
  };
  return (
    <nav className={navbar}>
      <Link to="/" className={navbarLogoSection}>
        <Book
          sx={{
            fontSize: "3rem",
          }}
        />
        <h1>My Library</h1>
      </Link>
      <div className={navbarOptionSection}>
        <Link to="/catalog" className={`${navbarOption} ${navbarLink}`}>
          <h2>View Catalog</h2>
        </Link>
        <div className={navbarSearchBox}>
          <input
            className={navbarSearchInput}
            placeholder="Search Catalog"
            onKeyDown={handleEnterKey}
            ref={searchRef}
          />
          <Search
            onClick={searchIconClicked}
            sx={{
              cursor: "pointer",
              fontSize: "2rem",
            }}
          />
        </div>
        {authState.loggedInUser ? (
          <div className={navbarOption} onClick={navigateToProfile}>
            <h2>{authState.loggedInUser.firstName}'s Account</h2>
          </div>
        ) : (
          <div className={navbarOption} onClick={toggleLogin}>
            <h2>Login</h2>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
