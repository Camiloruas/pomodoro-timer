import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="">Entenda como funciona a tecnica Pomodoro </a>
      <footer>
        <a href="https://github.com/Camiloruas" target="_blank">
          Chronos Pomodoro © {new Date().getFullYear()} — by Camilo Ruas
        </a>
      </footer>
    </footer>
  );
}
