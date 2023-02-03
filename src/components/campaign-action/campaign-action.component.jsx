import styles from "./campaign-action.module.css";

import editIcon from "../../assets/action_logo/edit.svg";
import trashIcon from "../../assets/action_logo/trash.svg";

export default function CampaignAction() {
  return (
    <div className={styles.actionIcons}>
      <img src={editIcon} className={styles.icon} alt="Edit Icon" />
      <img src={trashIcon} className={styles.icon} alt="Trash Icon" />
    </div>
  );
}
