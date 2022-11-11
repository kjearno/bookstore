import PropTypes from "prop-types";
import React from "react";
import { useProduct } from "../../hooks";
import styles from "./Product.module.scss";

export function Product({ id, cover, author, title, price }) {
  const {
    value,
    subtotalPrice,
    onItemRemove,
    onValueChange,
    onQuantityChange,
  } = useProduct(id);

  return (
    <tr>
      <td>
        <div className={styles.product}>
          <img src={cover} alt="" />
          <div className={styles.content}>
            <p className={styles.author}>{author.name}</p>
            <h5 className={styles.title}>{title}</h5>
            <p className={styles.price}>{`$${price}`}</p>
            <button
              className={styles.removeButton}
              type="button"
              onClick={onItemRemove}
            >
              Remove
            </button>
          </div>
        </div>
      </td>
      <td>
        <input
          type="number"
          value={value}
          onChange={onValueChange}
          onBlur={onQuantityChange}
          onKeyDown={onQuantityChange}
        />
      </td>
      <td>{`$${subtotalPrice}`}</td>
    </tr>
  );
}

Product.propTypes = {
  id: PropTypes.number.isRequired,
  cover: PropTypes.string.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
