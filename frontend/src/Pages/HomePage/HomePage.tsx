import { useSelector } from "react-redux";
import { RootState } from "../../Redux/ReduxStore";
import { LoginRegisterModal } from "../../Features/Authentication";

const HomePage = (): JSX.Element => {
  const displayLogin = useSelector(
    (state: RootState) => state.modal.displayLogin
  );

  return (
    <div className="page">
      <h1>Home page</h1>
      {displayLogin ? <LoginRegisterModal /> : <></>}
    </div>
  );
};

export default HomePage;
