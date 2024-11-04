import { useSelector } from "react-redux";
import { RootState } from "../../Redux/ReduxStore";
import styles from "./Styles.module.css";
import { LoginRegisterModal } from "../../Features/Authentication";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../../Features/Navigation";

const { layoutPage } = styles;

const Layout = () => {
  const state = useSelector((state: RootState) => state.modal);

  return (
    <div className={layoutPage}>
      {state.displayLogin && <LoginRegisterModal />}
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
