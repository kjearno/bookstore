import React from "react";
import Skeleton from "react-loading-skeleton";

import styles from "./Book.module.scss";

export function Loader() {
  return (
    <article className={styles.book}>
      <div className={styles.cover} style={{ boxShadow: "none" }}>
        <Skeleton height="100%" />
      </div>
      <div className={styles.content}>
        <p className={styles.author}>
          <Skeleton />
        </p>
        <h5 className={styles.title}>
          <Skeleton />
        </h5>
        <p className={styles.description}>
          <Skeleton count={3} />
        </p>
        <p className={styles.price}>
          <Skeleton />
        </p>

        <Skeleton height={45} />
      </div>
    </article>
  );
}
