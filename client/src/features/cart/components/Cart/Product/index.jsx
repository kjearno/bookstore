import React from "react";
import PropTypes from "prop-types";
import styles from "./style.module.scss";

export function Product({ item }) {
  return (
    <div className={styles.product}>
      <img src={item.cover} alt="" />
      <div>
        <p className={styles.author}>{item.author.name}</p>
        <h5 className={styles.title}>{item.title}</h5>
        <p className={styles.price}>{item.price}</p>
        <button className={styles.removeButton} type="button">
          Remove
        </button>
      </div>
    </div>
  );
}

Product.propTypes = {
  item: PropTypes.shape({
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    cover: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
