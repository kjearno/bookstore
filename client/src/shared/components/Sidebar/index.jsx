import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./style.module.scss";

const cx = classNames.bind(styles);

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <ul>
        <li className={cx("item", "active")}>
          <Link to="/">Lorem, ipsum dolor.</Link>
        </li>
        <li className={styles.item}>
          <Link to="/">Lorem, ipsum dolor.</Link>
        </li>
        <li className={styles.item}>
          <Link to="/">Lorem, ipsum dolor.</Link>
        </li>
        <li className={styles.item}>
          <Link to="/">Lorem, ipsum dolor.</Link>
        </li>
        <li className={styles.item}>
          <Link to="/">Lorem, ipsum dolor.</Link>
        </li>
      </ul>
    </aside>
  );
}
