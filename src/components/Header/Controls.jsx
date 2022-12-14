import React from "react";
import { Link } from "react-router-dom";

import cart from "@assets/cart.svg";
import styles from "./Controls.module.scss";

export function Controls() {
  return (
    <nav className={styles.controls}>
      <Link to="/cart">
        <img src={cart} alt="" />
      </Link>
    </nav>
  );
}
