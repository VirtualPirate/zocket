import styles from "./campaign.module.css";

import CampaignList from "../campaign-list/campaign-list.component";
import AddCircleLogo from "../../assets/add-circle.svg";

import { Link } from "react-router-dom";

export default function Campaign() {
  return (
    <section className={styles.campaign}>
      <div className={styles.info_wrapper}>
        <div className={styles.campaign_info}>
          <h1>Your Campaigns</h1>
          <div>Check the list of campaigns you created</div>
        </div>

        <Link className="nav-link" to="/form">
          <button className={styles.new_campaign_button}>
            <img
              src={AddCircleLogo}
              className={styles.add_circle_logo}
              alt="Add circle logo"
            />

            <span> Create New Campaign</span>
          </button>
        </Link>
      </div>

      <CampaignList />
    </section>
  );
}
