import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  itemRemoved,
  quantityChanged,
  selectQuantity,
  selectSubtotalPrice,
} from "../cartSlice";

export const useProduct = (productId) => {
  const dispatch = useDispatch();

  const quantity = useSelector((state) => selectQuantity(state, productId));
  const subtotalPrice = useSelector((state) =>
    selectSubtotalPrice(state, productId)
  );

  const [value, setValue] = useState(quantity);

  const handleItemRemove = () => {
    dispatch(itemRemoved(productId));
  };

  const handleValueChange = (e) => {
    if (e.currentTarget.value < 0) {
      return;
    }

    setValue(e.currentTarget.value);
  };

  const handleQuantityChange = (e) => {
    if (e.type === "keydown" && e.key !== "Enter") {
      return;
    }

    dispatch(quantityChanged({ itemId: productId, quantity: value }));
  };

  return {
    value,
    subtotalPrice,
    onItemRemove: handleItemRemove,
    onValueChange: handleValueChange,
    onQuantityChange: handleQuantityChange,
  };
};
