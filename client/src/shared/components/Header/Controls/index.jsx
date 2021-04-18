import React from "react";
import { Link } from "react-router-dom";
import cart from "@shared/assets/cart.svg";
import styles from "./style.module.scss";

export function Controls() {
  return (
    <nav className={styles.controls}>
      <Link to="/cart">
        <img src={cart} alt="" />
      </Link>
    </nav>
  );
}
