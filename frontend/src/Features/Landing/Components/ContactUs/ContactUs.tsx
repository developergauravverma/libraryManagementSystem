import { FC } from "react";
import Styles from "./Styles.module.css";

const { contactUs, contactUsDivider } = Styles;

const ContactUs: FC = () => {
  return (
    <div className={contactUs}>
      <h3>Contact Us</h3>
      <h4>Address</h4>
      <p>Modinagar</p>
      <p>Agarsen Park</p>
      <div className={contactUsDivider}></div>
      <h4>Phone Number</h4>
      <p>+91-8791804230</p>
      <div className={contactUsDivider}></div>
      <h4>Email Address</h4>
      <p>developergauravverma@gmail.com</p>
    </div>
  );
};

export default ContactUs;
