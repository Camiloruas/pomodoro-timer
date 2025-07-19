import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";

import styles from "./styles.module.css";

export function Menu() {
  return (
    <nav>
      <div className={styles.menu}>
        <a className={styles.menuLink} href="#">
          <HouseIcon />
        </a>
        <a className={styles.menuLink} href="#">
          <HistoryIcon />
        </a>
        <a className={styles.menuLink} href="#">
          <SettingsIcon />
        </a>
        <a className={styles.menuLink} href="#">
          <SunIcon />
        </a>
      </div>
    </nav>
  );
}
