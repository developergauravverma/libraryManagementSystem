import { FC } from "react";
import Styles from "./Styles.module.css";
import { AutoAwesome } from "@mui/icons-material";

const { upComingEvents, upComingEventsHeaderGroup, upComingEventsEvent } =
  Styles;

const UpComingEvents: FC = () => {
  return (
    <div className={upComingEvents}>
      <div className={upComingEventsHeaderGroup}>
        <AutoAwesome
          sx={{
            fontSize: "2.25rem",
            color: "#3626A7",
          }}
        />
        <h2>Upcoming Events</h2>
        <AutoAwesome
          sx={{
            fontSize: "2.25rem",
            color: "#3626A7",
          }}
        />
      </div>
      <h3>This Winter</h3>
      <h4>Tuesday's 10:00 AM - Noon</h4>
      <ul className={upComingEventsEvent}>
        <li>
          <p>Who: children to 6th grade</p>
        </li>
        <li>
          <p>Activities: Logic Puzzles, scratch programming</p>
        </li>
      </ul>
      <h4>wednesday's: 10:00 AM - Noon</h4>
      <ul className={upComingEventsEvent}>
        <li>
          <p>Who: Adults (19+)</p>
        </li>
        <li>
          <p>
            Activities: Craft and Sip - come enjoy a nice beverage and craft
          </p>
        </li>
      </ul>
    </div>
  );
};
export default UpComingEvents;
