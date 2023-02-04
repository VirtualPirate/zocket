import styles from "./toggle-select.module.css";

import { useEffect, useRef } from "react";

export default function ToggleSelect({ first = "true", second = "false" }) {
  const firstRef = useRef(0);
  const secondRef = useRef(0);

  useEffect(() => {
    firstRef.current.classList.add(styles.active);
  });

  function swapActive() {
    if (firstRef.current.classList.contains(styles.active)) {
      firstRef.current.classList.remove(styles.active);
      secondRef.current.classList.add(styles.active);
    } else {
      secondRef.current.classList.remove(styles.active);
      firstRef.current.classList.add(styles.active);
    }
  }

  return (
    <div className={styles.toggle_select}>
      <span
        className={styles.first}
        ref={firstRef}
        onClick={() => {
          if (!firstRef.current.classList.contains(styles.active)) swapActive();
        }}
      >
        {first}
      </span>
      <span
        className={styles.second}
        ref={secondRef}
        onClick={() => {
          if (!secondRef.current.classList.contains(styles.active))
            swapActive();
        }}
      >
        {second}
      </span>
    </div>
  );
}
