import styles from "./form-step-2.module.css";
import TickCircle from "../../assets/tick-circle.svg";

import { useEffect, useState } from "react";
import { useContext } from "react";
import { FormProgressContext } from "../../context/form-progress.context";

import { Link } from "react-router-dom";

import form_2_data from "../../models/form-2-fields.model";

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
        src={data.productImg}
        className={styles.field_icon}
        alt="This is the image of a product"
      />
      <div className={styles.field_info}>
        <div className={styles.field_name}>{data.name}</div>
        <div className={styles.field_price}>{data.price}</div>
      </div>
    </div>
  );
}

export default function Form2() {
  const { formStep, setFormStep } = useContext(FormProgressContext);

  useEffect(() => {
    setFormStep(2);
  });

  return (
    <>
      <div className={styles.form}>
        <div className={styles.form_info}>
          Choose the product <span> (Step 2 of 4) </span>
        </div>

        <div className={styles.form_fields}>
          {form_2_data.map((value, index) => (
            <FormField data={value}></FormField>
          ))}
        </div>
      </div>

      <Link className={styles.continue_button} to="/form/step3">
        <button>Continue</button>
      </Link>
    </>
  );
}
