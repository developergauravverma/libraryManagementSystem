import { FC } from "react";
import Styles from "./Styles.module.css";

const { libraryHors, libraryHorsTable, hours } = Styles;

const LibraryHours: FC = () => {
  return (
    <div className={libraryHors}>
      <h3>Library Horus</h3>
      <table className={libraryHorsTable} id={hours}>
        <tbody>
          <tr>
            <td>Monday</td>
            <td>10 AM - 6 PM</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>11 AM - 8 PM</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>10 AM - 6 PM</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>11 AM - 8 PM</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>10 AM - 6 PM</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>10 AM - 5 PM</td>
          </tr>
          <tr>
            <td>Sunday</td>
            <td>Closed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LibraryHours;
