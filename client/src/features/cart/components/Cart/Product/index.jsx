import React from "react";
import PropTypes from "prop-types";
import { useProduct } from "../../../hooks";
import styles from "./style.module.scss";

export function Product({ data }) {
  const {
    quantity,
    subtotalPrice,
    onItemRemove,
    onQuantityChange,
  } = useProduct(data.id);

  return (
    <tr>
      <td>
        <div className={styles.product}>
          <img src={data.cover} alt="" />
          <div className={styles.content}>
            <p className={styles.author}>{data.author.name}</p>
            <h5 className={styles.title}>{data.title}</h5>
            <p className={styles.price}>{`$${data.price}`}</p>
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
        <input type="number" value={quantity} onChange={onQuantityChange} />
      </td>
      <td>{`$${subtotalPrice}`}</td>
    </tr>
  );
}

Product.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    cover: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
