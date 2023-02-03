import styles from "./campaign-product.module.css";

export default function CampaignProduct({ productImg, name, date }) {
  return (
    <div className={styles.product}>
      <img className={styles.product_img} />
      <div className={styles.product_info}>
        <div className={styles.product_name}>{name}</div>
        <div className={styles.product_creation_date}>{date}</div>
      </div>
    </div>
  );
}
