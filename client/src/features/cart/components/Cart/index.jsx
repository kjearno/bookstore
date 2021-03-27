import React from "react";
import { Product } from "./Product";
import styles from "./style.module.scss";

export function Cart() {
  const data = {
    id: 1,
    title: "The Intelligent Investor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui quaerat ex vero fugiat! Sequi vel...",
    cover: "https://bookstore-73510.herokuapp.com/covers/business/1.jpg",
    price: "4.99",
    authorId: 1,
    categoryId: 1,
    createdAt: "2021-03-17T22:34:12.337Z",
    updatedAt: "2021-03-17T22:34:12.337Z",
    author: {
      id: 1,
      name: "Benjamin Graham",
      createdAt: "2021-03-17T22:34:11.922Z",
      updatedAt: "2021-03-17T22:34:11.922Z",
    },
    category: {
      id: 1,
      name: "Business",
      createdAt: "2021-03-17T22:34:12.135Z",
      updatedAt: "2021-03-17T22:34:12.135Z",
    },
  };

  const items = Array(2).fill(data);

  return (
    <div className={styles.wrapper}>
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
            <tr key={item.id}>
              <td>
                <Product item={item} />
              </td>
              <td>
                <input type="number" />
              </td>
              <td>$5.99</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td />
            <td>Total</td>
            <td>$5.99</td>
          </tr>
          <tr>
            <td />
            <td />
            <td>
              <button className={styles.button} type="button">
                Order
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
