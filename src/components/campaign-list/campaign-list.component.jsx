import styles from "./campaign-list.module.css";

import ToggleBar from "../toggle-bar/toggle-bar.compoent";
import CampaignProduct from "../campaign-product/campaign-product.component";
import CampaignStatus from "../campaign-status/campaign-status.component";
import PlatformLogo from "../platform-logo/platform-logo.component";
import CampaignAction from "../campaign-action/campaign-action.component";

export default function CampaignList() {
  return (
    <div className={styles.list_box}>
      <form className={styles.form}>
        <input
          type="text"
          className={styles.search_bar}
          placeholder="Search for the campaign"
        />

        <label className={styles.dropdown_label}> Platform: </label>
        <select name="platform" className={styles.dropdown}>
          <option value="all">All Platform</option>
          <option value="google">Google</option>
          <option value="facebook">Facebook</option>
          <option value="youtube">Youtube</option>
          <option value="instagram">Instagram</option>
        </select>

        <label className={styles.dropdown_label}> Status: </label>
        <select name="status" className={styles.dropdown}>
          <option value="live">All status</option>
          <option value="live">Live now</option>
          <option value="pause">Paused</option>
          <option value="exaushted">Exaushted</option>
        </select>

        <select name="cars" className={styles.dropdown}>
          <option value="last_30_days">Last 30 Days</option>
        </select>
      </form>

      <div className={styles.campaign_table}>
        <input type="checkbox" name="checked" />
        <span>On/Off</span>
        <span>Campaign</span>
        <span>Date Range</span>
        <span>Clicks</span>
        <span>Budget</span>
        <span>Location</span>
        <span>Platform</span>
        <span>Status</span>
        <span>Actions</span>
      </div>

      <div className={styles.campaign_values}>
        <input type="checkbox" name="checked" />
        <ToggleBar />
        <CampaignProduct
          productImg=""
          name="Blue Berry Cake Campaign"
          date="Created on 20 Jul"
        />
        <span>22 Jul 2020 - 01 Aug 2020</span>
        <span>300</span>
        <span>INR.3,400</span>
        <span>Chennai</span>
        <PlatformLogo logoName="facebook" />
        <CampaignStatus status="live" />
        <CampaignAction />
      </div>

      <div className={styles.campaign_values}>
        <input type="checkbox" name="checked" />
        <ToggleBar />
        <CampaignProduct
          productImg=""
          name="Blue Berry Cake Campaign"
          date="Created on 20 Jul"
        />
        <span>22 Jul 2020 - 01 Aug 2020</span>
        <span>300</span>
        <span>INR.3,400</span>
        <span>Chennai</span>
        <PlatformLogo logoName="google" />
        <CampaignStatus status="pause" />
        <CampaignAction />
      </div>

      <div className={styles.campaign_values}>
        <input type="checkbox" name="checked" />
        <ToggleBar />
        <CampaignProduct
          productImg=""
          name="Blue Berry Cake Campaign"
          date="Created on 20 Jul"
        />
        <span>22 Jul 2020 - 01 Aug 2020</span>
        <span>300</span>
        <span>INR.3,400</span>
        <span>Chennai</span>
        <PlatformLogo logoName="youtube" />
        <CampaignStatus status="exhaust" />
        <CampaignAction />
      </div>
    </div>
  );
}
