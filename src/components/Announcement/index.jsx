import React from "react";

import banner from "@assets/banner.png";
import styles from "./Announcement.module.scss";

export function Announcement() {
  return (
    <div className={styles.announcement}>
      <img src={banner} alt="" />
    </div>
  );
}
