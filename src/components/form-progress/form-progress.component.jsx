import styles from "./form-progress.module.css";

import { ReactComponent as LampChargeLogo } from "../../assets/form_progess_icons/lamp-charge.svg";
import { ReactComponent as BagLogo } from "../../assets/form_progess_icons/bag.svg";
import { ReactComponent as AppoinmentLogo } from "../../assets/form_progess_icons/appointments.svg";
import { ReactComponent as TickCircleLogo } from "../../assets/form_progess_icons/tick-circle.svg";

import LampChargeSvg from "../form-progress-icons/lamp-charge";
import BagSvg from "../form-progress-icons/bag";
import AppointmentsSvg from "../form-progress-icons/appointments";
import TickCircleSvg from "../form-progress-icons/tick-circle";

function ProgressIcon({ complete, children }) {
  return (
    <div
      className={`${styles.progress_icon} ${complete ? styles.complete : ""}`}
    >
      {children}
    </div>
  );
}

export default function FormProgress({ step = 1 }) {
  const progress_step = `progress_${step}`;

  let complete = [];
  for (let i = 0; i < 4; i++) {
    complete.push(i < step);
  }

  return (
    <div className={`${styles.progress} ${styles[progress_step]}`}>
      <ProgressIcon complete={complete[0]}>
        <LampChargeSvg complete={complete[0]} />
      </ProgressIcon>
      <ProgressIcon complete={complete[1]}>
        <BagSvg complete={complete[1]} />
      </ProgressIcon>
      <ProgressIcon complete={complete[2]}>
        <AppointmentsSvg complete={complete[2]} />
      </ProgressIcon>
      <ProgressIcon complete={complete[3]}>
        <TickCircleSvg complete={complete[3]} />
      </ProgressIcon>

      <span>What do you want to do</span>
      <span>Choose product</span>
      <span>Campaign setting</span>
      <span>Ready to go</span>
    </div>
  );
}
