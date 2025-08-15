import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { RouterLink } from "../RouterLink";

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem("theme") as AvailableThemes) || "dark";
    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();
    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <div className={styles.menuItems}>
        <RouterLink
          className={styles.menuLink}
          href="/"
          aria-label="Home Page"
          title="Home Page"
        >
          <HouseIcon />
        </RouterLink>
        <RouterLink
          className={styles.menuLink}
          href="/history"
          aria-label="Histórico "
          title="Histórico"
        >
          <HistoryIcon />
        </RouterLink>
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
          {nextThemeIcon[theme]}
        </a>
      </div>
    </nav>
  );
}
