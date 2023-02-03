import styles from "./platform-logo.module.css";

import googleLogo from "../../assets/platform_logo/google.svg";
import youtubeLogo from "../../assets/platform_logo/youtube.svg";
import facebookLogo from "../../assets/platform_logo/instagram.svg";
import instagramLogo from "../../assets/platform_logo/instagram.svg";

const logoMap = {
  google: googleLogo,
  youtube: youtubeLogo,
  facebook: facebookLogo,
  instagram: instagramLogo,
};

export default function PlatformLogo({ logoName }) {
  return (
    <img
      src={logoMap[logoName]}
      className={styles.logo}
      alt="Social Media Logo"
    />
  );
}
