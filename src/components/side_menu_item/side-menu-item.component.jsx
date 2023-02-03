import styles from "./side-menu-item.module.css";

export default function SideMenuItem({ imageSrc, name }) {
  return (
    <div className={styles.menu_item}>
      <img className={styles.menu_item_logo} src={imageSrc} />
      <span className={styles.menu_item_text}>{name}</span>
    </div>
  );
}
