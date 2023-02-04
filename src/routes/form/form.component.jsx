import FormProgress from "../../components/form-progress/form-progress.component";
import { useContext } from "react";
import { FormProgressContext } from "../../context/form-progress.context";

import Form1 from "../form-step-1/form-step-1.component";
import Form2 from "../form-step-2/form-step-2.component";
import Form3 from "../form-step-3/form-step-3.component";

import { Route, Routes } from "react-router-dom";

import styles from "./form.module.css";

export default function Form() {
  const { formStep, setFormStep } = useContext(FormProgressContext);

  return (
    <section className={styles.form}>
      <div className={styles.campaign_info}>
        <h1>Your Ad Campaign</h1>
        <div>Launch your Ad in just 4 easy steps</div>
      </div>

      <FormProgress step={formStep} />

      <Routes>
        <Route index element={<Form1 />} />
        <Route path="/step2" element={<Form2 />} />
        <Route path="/step3" element={<Form3 />} />
      </Routes>
    </section>
  );
}
