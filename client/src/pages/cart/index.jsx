import React from "react";
import { Helmet } from "react-helmet";
import { Cart } from "@features/cart";
import { CommonTemplate } from "@shared/templates";

export function CartPage() {
  return (
    <CommonTemplate>
      <Helmet title="Cart" />

      <Cart />
    </CommonTemplate>
  );
}
