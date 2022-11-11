import React from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.scss";

export function Logo() {
  return (
    <div className={styles.logo}>
      <Link to="/">Bookstore</Link>
    </div>
  );
}
