import styles from "./styles.module.css"

type GenericHtmlprops = {
 children: React.ReactNode;
}

export function GenericHtml({ children }: GenericHtmlprops) {
  return <div className={styles.genericHtml}>{children}</div>;                       
}
