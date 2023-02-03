import styles from "./campaign-status.module.css";

export default function CampaignStatus({ status }) {
  const statusNames = {
    live: "Live now",
    pause: "Paused",
    exhaust: "Exhausted",
  };

  return (
    <div className={`${styles[status]} ${styles.status}`}>
      {statusNames[status]}
    </div>
  );
}
