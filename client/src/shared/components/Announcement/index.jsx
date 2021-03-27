import React from "react";
import banner from "@shared/assets/banner.png";
import styles from "./style.module.scss";

export function Announcement() {
  return (
    <div className={styles.announcement}>
      <img src={banner} alt="" />
    </div>
  );
}
