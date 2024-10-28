import LoginForm from "../../Features/Authentication/LoginForm/LoginForm";

interface HomePageProp {
  displayLogin: boolean;
}

const HomePage = (props: HomePageProp): JSX.Element => {
  return (
    <div className="page">{props.displayLogin ? <LoginForm /> : <></>}</div>
  );
};

export default HomePage;
