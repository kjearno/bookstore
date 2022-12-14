import React from "react";
import { Helmet } from "react-helmet";

import { CommonTemplate } from "@components/templates";
import { CartTable } from "@features/cart";
import styles from "@styles/Cart.module.scss";

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
