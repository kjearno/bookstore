import React from "react";
import PropTypes from "prop-types";
import styles from "./style.module.scss";

export function Book({ data }) {
  return (
    <article className={styles.book}>
      <img src={data.cover} alt="" />
      <div className={styles.content}>
        <p className={styles.author}>{data.author.name}</p>
        <h5 className={styles.title}>{data.title}</h5>
        <p className={styles.description}>{data.description}</p>
        <p className={styles.price}>{`$${data.price}`}</p>
        <button className={styles.button} type="button">
          Buy now
        </button>
      </div>
    </article>
  );
}

Book.propTypes = {
  data: PropTypes.shape({
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    cover: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
