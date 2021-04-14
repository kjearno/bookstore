import React from "react";
import PropTypes from "prop-types";
import { useCart } from "@features/cart";
import styles from "./Book.module.scss";

export function Book({ data }) {
  const { checkItemInCart, onItemToggle } = useCart();
  const addedToCart = checkItemInCart(data.id);

  return (
    <article className={styles.book}>
      <div className={styles.cover}>
        <img src={data.cover} alt="" />
      </div>
      <div className={styles.content}>
        <p className={styles.author}>{data.author?.name}</p>
        <h5 className={styles.title}>{data.title}</h5>
        <p className={styles.description}>{data.description}</p>
        <p className={styles.price}>{`$${data.price}`}</p>
        <button
          className={styles.button}
          type="button"
          onClick={() => onItemToggle(data.id)}
        >
          {addedToCart ? "Added to cart" : "Buy now"}
        </button>
      </div>
    </article>
  );
}

Book.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    cover: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
