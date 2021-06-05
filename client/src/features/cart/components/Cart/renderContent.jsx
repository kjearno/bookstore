import React from "react";
import { Loader, Redirector } from "@shared/components";
import { Product } from "./Product";
import styles from "./style.module.scss";

export const renderContent = ({
  items,
  totalPrice,
  isLoading,
  isCartEmpty,
  onOrderClick,
}) => {
  let content = (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <Product
            id={item.id}
            cover={item.cover}
            author={item.author}
            title={item.title}
            price={item.price}
            key={item.id}
          />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td />
          <td>Total</td>
          <td>{`$${totalPrice}`}</td>
        </tr>
        <tr>
          <td />
          <td />
          <td>
            <button
              className={styles.button}
              type="button"
              onClick={onOrderClick}
            >
              Order
            </button>
          </td>
        </tr>
      </tfoot>
    </table>
  );

  if (isLoading) {
    content = <Loader />;
  }

  if (isCartEmpty) {
    content = <Redirector message="Cart is empty" />;
  }

  return content;
};
