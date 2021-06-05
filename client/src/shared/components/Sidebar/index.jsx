import React from "react";
import { Menu } from "./Menu";
import styles from "./style.module.scss";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <Menu />
    </aside>
  );
}
