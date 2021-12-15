import React from "react";

import { Controls } from "./Controls";
import { Logo } from "./Logo";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Controls />
    </header>
  );
}
