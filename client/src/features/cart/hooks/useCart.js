import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { IDLE_STATUS, LOADING_STATUS } from "@shared/constants";
import { confirmAlert } from "@shared/lib";
import {
  fetchItems,
  itemToggled,
  cartCleared,
  selectIds,
  selectProducts,
  selectStatus,
  selectTotalItems,
  selectTotalPrice,
} from "../cartSlice";

export const useCart = () => {
  const dispatch = useDispatch();
  const itemIds = useSelector(selectIds);
  const items = useSelector(selectProducts);
  const status = useSelector(selectStatus);
  const totalItems = useSelector(selectTotalItems);
  const totalPrice = useSelector(selectTotalPrice);

  const history = useHistory();
  const { addToast } = useToasts();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch, items]);

  const checkItemInCart = (id) => itemIds.includes(id);

  const handleItemToggle = (id) => {
    dispatch(itemToggled(id));
  };

  const handleOrderClick = () => {
    confirmAlert({
      message: "Are you sure you want to order?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            history.push("/");
            dispatch(cartCleared());
            addToast("Order confirmed", { appearance: "success" });
          },
        },
        {
          label: "No",
        },
      ],
    });
  };

  return {
    items,
    totalPrice,
    checkItemInCart,
    isLoading: status === IDLE_STATUS || status === LOADING_STATUS,
    isCartEmpty: !totalItems,
    onItemToggle: handleItemToggle,
    onOrderClick: handleOrderClick,
  };
};
