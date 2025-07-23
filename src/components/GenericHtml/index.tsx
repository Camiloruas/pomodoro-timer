import type React from "react";
import styles from "./styles.module.css"

type GenericHtmlprops = {
    children:  React.ReactNode;
}

export function GenericHtml({ chiildren }: GenericHtmlprops) {
  return <div className={styles.genericHtml}>{children}</div>;
}
