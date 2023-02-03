import styles from "./form-step-1.module.css";

import FormProgress from "../../components/form-progress/form-progress.component";
import TickCircle from "../../assets/tick-circle.svg";

import CallFillIcon from "../../assets/form_1_icons/call_fill.svg";
import CallStrokeIcon from "../../assets/form_1_icons/call_stroke.svg";
import MessageFillIcon from "../../assets/form_1_icons/message_fill.svg";
import MessageStrokeIcon from "../../assets/form_1_icons/message_stroke.svg";
import AddCustomerFillIcon from "../../assets/form_1_icons/customers_fill.svg";
import AddCustomerStrokeIcon from "../../assets/form_1_icons/customers_stroke.svg";
import CustomersFillIcon from "../../assets/form_1_icons/customers_fill.svg";
import CustomersStrokeIcon from "../../assets/form_1_icons/customers_stroke.svg";
import EyeFillIcon from "../../assets/form_1_icons/eye_fill.svg";
import EyeStrokeIcon from "../../assets/form_1_icons/eye_stroke.svg";
import ClickFillIcon from "../../assets/form_1_icons/click_fill.svg";
import ClickStrokeIcon from "../../assets/form_1_icons/click_stroke.svg";
import StoreFillIcon from "../../assets/form_1_icons/store_fill.svg";
import StoreStrokeIcon from "../../assets/form_1_icons/store_stroke.svg";
import DownloadFillIcon from "../../assets/form_1_icons/download_fill.svg";
import DownloadStrokeIcon from "../../assets/form_1_icons/download_stroke.svg";
import CatalogueFillIcon from "../../assets/form_1_icons/catalogue_fill.svg";
import CatalogueStrokeIcon from "../../assets/form_1_icons/catalogue_stroke.svg";

import { useEffect, useState } from "react";

const form_1_data = [
  {
    fill_icon: CallFillIcon,
    stroke_icon: CallStrokeIcon,
    name: "Get Leads as calls",
    description: "Read broad audience and get leads through calls",
  },
  {
    fill_icon: MessageFillIcon,
    stroke_icon: MessageStrokeIcon,
    name: "Get Leads as Facebook messages",
    description: "Get more FB messages from Leads",
  },
  {
    fill_icon: AddCustomerFillIcon,
    stroke_icon: AddCustomerStrokeIcon,
    name: "Increase page followers",
    description: "Encourage customers to follow your page",
  },
  {
    fill_icon: CustomersFillIcon,
    stroke_icon: CustomersStrokeIcon,
    name: "Get Customer Leads",
    description: "Encourage customers to take lead",
  },
  {
    fill_icon: EyeFillIcon,
    stroke_icon: EyeStrokeIcon,
    name: "Get more youtube views",
    description: "Increase organic views by obtaining user attention",
  },
  {
    fill_icon: ClickFillIcon,
    stroke_icon: ClickStrokeIcon,
    name: "Get more website traffic",
    description: "Get the right people to visit your website",
  },
  {
    fill_icon: StoreFillIcon,
    stroke_icon: StoreStrokeIcon,
    name: "Increase Live store traffic",
    description: "Drive visits to local stores, restauraunts & Dealerships",
  },
  {
    fill_icon: DownloadFillIcon,
    stroke_icon: DownloadStrokeIcon,
    name: "Increase your App installs",
    description: "Get more installs, interactions for your app",
  },
  {
    fill_icon: CatalogueFillIcon,
    stroke_icon: CatalogueStrokeIcon,
    name: "Increase the catalogue sales",
    description: "Drive the sales of your catalogue and get more leads",
  },
];

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
      />
      <div className={styles.field_info}>
        <div className={styles.field_name}>{data.name}</div>
        <div className={styles.field_description}>{data.description}</div>
      </div>
    </div>
  );
}

function Form1() {
  return;
}

export default function FormStep1() {
  const [formStep, setFormStep] = useState(1);

  useEffect(() => {
    if (formStep > 4) {
      setFormStep(1);
    }
  }, [formStep]);

  return (
    <section className={styles.form}>
      <div className={styles.campaign_info}>
        <h1>Your Ad Campaign</h1>
        <div>Launch your Ad in just 4 easy steps</div>
      </div>

      <FormProgress step={formStep} />

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

      <button
        onClick={() => {
          setFormStep(formStep + 1);
        }}
        className={styles.continue_button}
      >
        Continue
      </button>
    </section>
  );
}
