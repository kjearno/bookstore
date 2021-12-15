import React from "react";
import { Helmet } from "react-helmet";

import { CartTable } from "@features/cart";
import styles from "@shared/styles/Cart.module.scss";
import { CommonTemplate } from "@shared/templates";

export default function Cart() {
  return (
    <CommonTemplate>
      <Helmet title="Cart" />

      <div className={styles.wrapper}>
        <CartTable />
      </div>
    </CommonTemplate>
  );
}
