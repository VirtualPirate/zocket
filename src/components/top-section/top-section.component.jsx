import styles from "./top-section.module.css";

import GiftIcon from "../../assets/top_section_icons/gift.svg";
import NotificationIcon from "../../assets/top_section_icons/notification.svg";

import UserImage from "../../assets/top_section_icons/user_image.png";
import ChangeLanguageIcon from "../../assets/top_section_icons/change_language.svg";

import BuyPlanIcon from "../../assets/top_section_icons/buy_plan.svg";

export default function TopSection() {
  return (
    <section className={styles.top_section}>
      <div className={styles.plan_info}>
        <span> Free Trail Ends in 2 days</span>
        <button className={styles.buy_button}>
          <img src={BuyPlanIcon} className={styles.buy_plan_icon} />
          <span>Buy Plan</span>
        </button>
      </div>

      <img src={GiftIcon} className={styles.top_section_icon} />
      <img src={NotificationIcon} className={styles.top_section_icon} />

      <div className={styles.user_info}>
        <img src={UserImage} className={styles.user_icon} />
        <span className={styles.user_name}>Mukund Cake Shop</span>

        <img src={ChangeLanguageIcon} className={styles.top_section_icon} />
      </div>
    </section>
  );
}
