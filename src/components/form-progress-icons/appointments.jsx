import styles from "./form-progress-icons.module.css";

export default function AppointmentsSvg({ complete = false }) {
  return (
    <svg
      //   width="21"
      //   height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.svg}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.1739 2.69565H18.1957C19.3122 2.69565 20.2174 3.60082 20.2174 4.71739V18.1957C20.2174 19.3122 19.3122 20.2174 18.1957 20.2174H2.02174C0.905164 20.2174 0 19.3122 0 18.1957V4.71739C0 3.60082 0.905164 2.69565 2.02174 2.69565H4.04348V0H5.3913V2.69565H14.8261V0H16.1739V2.69565ZM8.08696 10.7826H4.04348V9.43478H8.08696V10.7826ZM16.1739 9.43478H12.1304V10.7826H16.1739V9.43478ZM8.08696 14.8261H4.04348V13.4783H8.08696V14.8261ZM12.1304 14.8261H16.1739V13.4783H12.1304V14.8261Z"
        // fill="blue"
        className={`${styles.svg_color} ${styles[complete.toString()]}`}
      />
    </svg>
  );
}
