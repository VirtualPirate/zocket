import styles from "./form-progress-icons.module.css";

export default function TickCircleSvg({ complete = false }) {
  return (
    <svg
      //   width="24"
      //   height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.svg}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.606812 12.2841C0.606812 5.83499 5.83487 0.606934 12.284 0.606934C18.7331 0.606934 23.9612 5.83499 23.9612 12.2841C23.9612 18.7333 18.7331 23.9613 12.284 23.9613C5.83487 23.9613 0.606812 18.7333 0.606812 12.2841ZM11.6173 17.283L18.3413 8.878L17.1255 7.90537L11.3938 15.07L7.33306 11.686L6.33632 12.8821L11.6173 17.283Z"
        // fill="blue"
        className={`${styles.svg_color} ${styles[complete.toString()]}`}
      />
    </svg>
  );
}
