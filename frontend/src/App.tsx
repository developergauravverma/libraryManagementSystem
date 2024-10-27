import { useState } from "react";
import HomePage from "./Pages/HomePage/HomePage";
import { User } from "./models/User";

const App = () => {
  const [displayLogin, setDisplayLogin] = useState<boolean>(false);
  const [loggedInUser, setLoggedInUser] = useState<User>();
  return (
    <>
      <HomePage displayLogin={displayLogin} />
    </>
  );
};

export default App;
