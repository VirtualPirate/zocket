import styles from "./form-step-3.module.css";

import { useContext, useEffect, useRef } from "react";
import { FormProgressContext } from "../../context/form-progress.context";
import ToggleSelect from "../../components/toggle-select/toggle-select.component";

export default function Form3() {
  const { formStep, setFormStep } = useContext(FormProgressContext);

  useEffect(() => {
    setFormStep(3);
  });

  return (
    <>
      <div className={styles.form}>
        <div className={styles.form_info}>
          Choose the product <span> (Step 3 of 4) </span>
        </div>

        <div className={styles.form_fields}>
          <div className={styles.budget_date}>
            <div className={styles.form_title}>
              <span className={styles.form_index}>1</span>
              <span className={styles.form_value}> Budget and dates info</span>
            </div>
            <div className={styles.budget_date_fields}>
              <div className={styles.budget_timeline}>
                <div className={styles.sub_title}>Budget Timeline</div>
                <ToggleSelect first="Lifetime" second="Daily" />
              </div>
              <div className={styles.date_range}>
                <span className={styles.sub_title}>Start date</span>
                <span className={styles.sub_title}>End date</span>
                <input type="date" />
                <input type="date" />
              </div>
              <div className={styles.budget_range}>
                <div className={styles.sub_title}>Enter Campaign Budget</div>
                <input className={styles.budget_range_input} type="range" />
              </div>
            </div>
          </div>
          <div className={styles.location_info}>
            <div className={styles.form_title}>
              <span className={styles.form_index}>2</span>
              <span className={styles.form_value}> Location Info</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
