import styles from "./side-menu-item.module.css";

export default function SideMenuItem({ imageSrc, name, active = false }) {
  return (
    <div className={`${styles.menu_item} ${active ? styles.active : ""}`}>
      <img className={styles.menu_item_logo} src={imageSrc} />
      <span className={styles.menu_item_text}>{name}</span>
    </div>
  );
}
