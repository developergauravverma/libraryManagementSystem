import { useEffect, useState } from "react";
import HomePage from "./Pages/HomePage/HomePage";
import { User } from "./models/User";

const App = () => {
  const [displayLogin, setDisplayLogin] = useState<boolean>(true);
  const [loggedInUser, setLoggedInUser] = useState<User>();

  const updateLoggedInUser = (user: User) => {
    setLoggedInUser(user);
  };

  useEffect(() => {
    console.log(loggedInUser);
  }, [loggedInUser]);

  return (
    <>
      <HomePage
        displayLogin={displayLogin}
        updateLoggedInUser={updateLoggedInUser}
      />
    </>
  );
};

export default App;
