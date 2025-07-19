import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";

import { useState } from "react";
import styles from "./styles.module.css";

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>("dark");

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault(); // Não segue o link
    console.log("Clicado");
  }

  return (
    <nav className={styles.menu}>
      <h1>Dark</h1>
      <div className={styles.menu}>
        <a
          className={styles.menuLink}
          href="#"
          aria-label="Home Page"
          title="Home Page"
        >
          <HouseIcon />
        </a>
        <a
          className={styles.menuLink}
          href="#"
          aria-label="Histórico "
          title="Histórico"
        >
          <HistoryIcon />
        </a>
        <a
          className={styles.menuLink}
          href="#"
          aria-label="Configurações "
          title="Configurações"
        >
          <SettingsIcon />
        </a>
        <a
          className={styles.menuLink}
          href="#"
          aria-label="Tema "
          title="Tema"
          onClick={handleThemeChange}
        >
          <SunIcon />
        </a>
      </div>
    </nav>
  );
}
