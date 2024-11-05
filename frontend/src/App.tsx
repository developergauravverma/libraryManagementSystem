import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomePage from "./Pages/HomePage/HomePage";
import { AppDispatch, RootState } from "./Redux/ReduxStore";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutPage from "./Pages/LayoutPage/LayoutPage";
import { fetchUser } from "./Redux/Slice/AuthanticationSclice";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";

const App = () => {
  const loggedInUser = useSelector(
    (state: RootState) => state.authentication.loggedInUser
  );

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    let userId = localStorage.getItem("userId");
    if (userId && !loggedInUser) {
      dispatch(
        fetchUser({
          userId,
          property: "loggedInUser",
        })
      );
    }
  }, [loggedInUser]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route path="" element={<HomePage />} />
          <Route path="/catalog" element={<>catalog</>} />
          <Route path="/resource/:barcode" element={<>resource/:barcode</>} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
