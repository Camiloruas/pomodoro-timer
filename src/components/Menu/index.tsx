import { History, House, Settings, Sun } from "lucide-react";

import styles from "./styles.module.css";

export function Menu() {
  return (
    <div>
      <div className={styles.menu}>
        <a className={styles.menuLink} href="#">
          <House />
          <History />
          <Settings />
          <Sun />
        </a>
      </div>
    </div>
  );
}
