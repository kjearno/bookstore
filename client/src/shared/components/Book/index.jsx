import React from "react";
import PropTypes from "prop-types";
import { useItem } from "@features/cart";
import { Loader } from "./Loader";
import styles from "./style.module.scss";

export function Book({ id, cover, author, title, description, price }) {
  const { isAddedToCart, onItemToggle } = useItem(id);

  return (
    <article className={styles.book}>
      <div className={styles.cover}>
        <img src={cover} alt="" />
      </div>
      <div className={styles.content}>
        <p className={styles.author}>{author.name}</p>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>{`$${price}`}</p>
        <button className={styles.button} type="button" onClick={onItemToggle}>
          {isAddedToCart ? "Added to cart" : "Buy now"}
        </button>
      </div>
    </article>
  );
}

Book.propTypes = {
  id: PropTypes.number.isRequired,
  cover: PropTypes.string.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

Book.Loader = Loader;
