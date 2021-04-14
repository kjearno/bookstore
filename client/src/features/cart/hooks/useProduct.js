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

  const handleItemRemove = () => {
    dispatch(itemRemoved(productId));
  };

  const handleQuantityChange = (e) => {
    dispatch(
      quantityChanged({ itemId: productId, quantity: e.currentTarget.value })
    );
  };

  return {
    quantity,
    subtotalPrice,
    onItemRemove: handleItemRemove,
    onQuantityChange: handleQuantityChange,
  };
};
