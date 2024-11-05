import { BookOfTheWeek, UpComingEvents } from "../../Features/Landing";
import Styles from "./Styles.module.css";

const { homePageContainer, homePageLeft, homePageRight } = Styles;

const HomePage = (): JSX.Element => {
  return (
    <div className="page">
      <div className={homePageContainer}>
        <div className={homePageLeft}>
          <BookOfTheWeek />
          <UpComingEvents />
        </div>
        <div className={homePageRight}></div>
      </div>
    </div>
  );
};

export default HomePage;
