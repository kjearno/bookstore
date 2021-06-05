import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { IDLE_STATUS, LOADING_STATUS } from "@shared/constants";
import { confirmAlert } from "@shared/lib";
import {
  fetchItems,
  cartCleared,
  selectProducts,
  selectStatus,
  selectTotalItems,
  selectTotalPrice,
} from "../cartSlice";

export const useCart = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { addToast } = useToasts();

  const items = useSelector(selectProducts);
  const status = useSelector(selectStatus);
  const totalItems = useSelector(selectTotalItems);
  const totalPrice = useSelector(selectTotalPrice);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

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
    isLoading: status === IDLE_STATUS || status === LOADING_STATUS,
    isCartEmpty: !totalItems,
    onOrderClick: handleOrderClick,
  };
};
