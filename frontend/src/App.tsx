import { useEffect, useState } from "react";
import HomePage from "./Pages/HomePage/HomePage";
import { useSelector } from "react-redux";
import { RootState } from "./Redux/ReduxStore";

const App = () => {
  const [displayLogin, setDisplayLogin] = useState<boolean>(true);

  const loggedInUser = useSelector(
    (state: RootState) => state.authentication.loggedInUser
  );

  useEffect(() => {
    console.log(loggedInUser);
  }, [loggedInUser]);

  return (
    <>
      <HomePage displayLogin={displayLogin} />
    </>
  );
};

export default App;
