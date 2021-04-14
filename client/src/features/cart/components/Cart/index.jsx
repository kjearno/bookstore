import React from "react";
import { useCart } from "../../hooks";
import { renderContent } from "./renderContent";
import styles from "./style.module.scss";

export function Cart() {
  const { items, totalPrice, isLoading, isCartEmpty, onOrderClick } = useCart();

  return (
    <div className={styles.wrapper}>
      {renderContent({
        items,
        totalPrice,
        isLoading,
        isCartEmpty,
        onOrderClick,
      })}
    </div>
  );
}
