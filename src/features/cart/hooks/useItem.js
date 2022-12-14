import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { itemToggled, selectIds } from "../cartSlice";

export const useItem = (id) => {
  const dispatch = useDispatch();

  const itemIds = useSelector(selectIds);
  const isAddedToCart = useMemo(() => itemIds.includes(id), [id, itemIds]);

  const handleItemToggle = () => {
    dispatch(itemToggled(id));
  };

  return {
    isAddedToCart,
    onItemToggle: handleItemToggle,
  };
};
