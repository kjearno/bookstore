import React from "react";
import MoonLoader from "react-spinners/MoonLoader";

import styles from "./Loader.module.scss";

export function Loader() {
  return (
    <div className={styles.loader}>
      <MoonLoader color="#4c3db2" size={40} />
    </div>
  );
}
