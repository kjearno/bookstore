import React from "react";
import { Link } from "react-router-dom";
import cart from "@shared/assets/cart.svg";

export function Controls() {
  return (
    <nav>
      <Link to="cart">
        <img src={cart} alt="" />
      </Link>
    </nav>
  );
}
