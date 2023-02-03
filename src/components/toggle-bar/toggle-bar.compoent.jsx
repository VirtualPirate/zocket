import styles from "./toggle-bar.module.css";

import { useState, useRef } from "react";

export default function ToggleBar() {
  const stateRef = useRef(null);
  const [barState, setBarState] = useState(true);

  return (
    <div
      className={`${styles.bar} ${styles[`bar_state_${barState}`]}`}
      onClick={() => {
        setBarState(!barState);
      }}
    >
      <div className={styles.bar_state} ref={stateRef}></div>
    </div>
  );
}
