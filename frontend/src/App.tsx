import { useEffect } from "react";
import { useSelector } from "react-redux";
import HomePage from "./Pages/HomePage/HomePage";
import { RootState } from "./Redux/ReduxStore";

const App = () => {
  const loggedInUser = useSelector(
    (state: RootState) => state.authentication.loggedInUser
  );

  useEffect(() => {
    console.log(loggedInUser);
  }, [loggedInUser]);

  return (
    <>
      <HomePage />
    </>
  );
};

export default App;
