import React from "react";
import LoadingSkeleton from "react-loading-skeleton";
import styles from "./Book.module.scss";

export function Skeleton() {
  return (
    <article className={styles.book}>
      <div className={styles.cover} style={{ boxShadow: "none" }}>
        <LoadingSkeleton height="100%" />
      </div>
      <div className={styles.content}>
        <p className={styles.author}>
          <LoadingSkeleton />
        </p>
        <h5 className={styles.title}>
          <LoadingSkeleton />
        </h5>
        <p className={styles.description}>
          <LoadingSkeleton count={3} />
        </p>
        <p className={styles.price}>
          <LoadingSkeleton />
        </p>

        <LoadingSkeleton height={45} />
      </div>
    </article>
  );
}
