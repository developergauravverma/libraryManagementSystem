import {
  BookOfTheWeek,
  ContactUs,
  LibraryCard,
  LibraryHours,
  UpComingEvents,
} from "../../Features/Landing";
import Styles from "./Styles.module.css";

const { homePageContainer, homePageLeft, homePageRight } = Styles;

const HomePage = (): JSX.Element => {
  return (
    <div className="page">
      <div className={homePageContainer}>
        <div className={homePageLeft}>
          <BookOfTheWeek />
          <UpComingEvents />
          <LibraryCard />
        </div>
        <div className={homePageRight}>
          <LibraryHours />
          <ContactUs />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
