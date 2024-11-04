import { FC } from "react";
import Styles from "./Styles.module.css";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

const {
  footer,
  footerText,
  footerSocialCluster,
  footerSocialText,
  footerSocial,
} = Styles;

const Footer: FC = () => {
  return (
    <div className={footer}>
      <p className={footerText}>F-7 PaperMill GovindPuri Modinagar</p>
      <p className={footerText}>Return Policy</p>
      <p className={footerText}>Late Fees</p>
      <p className={footerText}>Library Card Condition</p>
      <div className={footerSocialCluster}>
        <p className={footerSocialText}>Socials</p>
        <YouTube className={footerSocial} />
        <Twitter className={footerSocial} />
        <Facebook className={footerSocial} />
        <Instagram className={footerSocial} />
      </div>
    </div>
  );
};

export default Footer;
