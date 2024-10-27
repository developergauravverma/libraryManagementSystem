import LoginForm from "../../Features/Authentication/LoginForm/LoginForm";
import { User } from "../../models/User";

interface HomePageProp {
  displayLogin: boolean;
  updateLoggedInUser(user: User): void;
}

const HomePage = (props: HomePageProp): JSX.Element => {
  return (
    <div className="page">
      {props.displayLogin ? (
        <LoginForm updateLoggedInUser={props.updateLoggedInUser} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default HomePage;
