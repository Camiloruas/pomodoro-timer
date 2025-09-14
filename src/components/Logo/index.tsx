import { TimerIcon } from "lucide-react";
import styles from "./styles.module.css";

export function Logo() {
  return (
    <div>
      <div className={styles.logo}>
        <a className={styles.logoLink} href="#">
          <TimerIcon />
          <span>FocusPomodoro</span>
        </a>
      </div>
    </div>
  );
}
