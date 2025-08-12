import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router";

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
        <Link
          className={styles.menuLink}
          to="/"
          aria-label="Home Page"
          title="Home Page"
        >
          <HouseIcon />
        </Link>
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
          {nextThemeIcon[theme]}
        </a>
      </div>
    </nav>
  );
}
