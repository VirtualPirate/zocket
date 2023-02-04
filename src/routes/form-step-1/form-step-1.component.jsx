import styles from "./form-step-1.module.css";
import TickCircle from "../../assets/tick-circle.svg";

import { useState, useEffect } from "react";
import { useContext } from "react";
import { FormProgressContext } from "../../context/form-progress.context";

import { Link } from "react-router-dom";

import form_1_data from "../../models/form-1-fields.model";

function FormField({ data, active = false }) {
  const [isActive, setIsActive] = useState(active);

  return (
    <div
      onClick={() => {
        setIsActive(!isActive);
      }}
      className={`${styles.form_field} ${isActive ? styles.active : ""}`}
    >
      <img
        src={TickCircle}
        className={styles.tick_icon}
        alt="This is a tick icon"
      />
      <img
        src={isActive ? data.fill_icon : data.stroke_icon}
        className={styles.field_icon}
        alt="This is a action icon"
      />
      <div className={styles.field_info}>
        <div className={styles.field_name}>{data.name}</div>
        <div className={styles.field_description}>{data.description}</div>
      </div>
    </div>
  );
}

export default function Form1() {
  const { formStep, setFormStep } = useContext(FormProgressContext);

  useEffect(() => {
    setFormStep(1);
  });

  return (
    <>
      <div className={styles.form_1}>
        <div className={styles.form_info}>
          What do you want to do ? <span> (Step 1 of 4) </span>
        </div>

        <div className={styles.form_fields}>
          {form_1_data.map((value, index) => (
            <FormField data={value}></FormField>
          ))}
        </div>
      </div>

      <Link className={styles.continue_button} to="/form/step2">
        <button>Continue</button>
      </Link>
    </>
  );
}
