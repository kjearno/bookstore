import { createSelector } from "@reduxjs/toolkit";
import { selectAllBooks } from "@features/entities";

export const selectIds = (state) => state.cart.ids;
export const selectStatus = (state) => state.cart.status;

export const selectTotalItems = createSelector(selectIds, (ids) => ids.length);

export const selectQuantity = createSelector(
  (state, id) => state.cart.items[id],
  (item) => item.quantity
);

export const selectProducts = createSelector(
  selectIds,
  selectAllBooks,
  (ids, books) => {
    const matchedItems = books.filter((book) => ids.includes(book.id));
    return matchedItems.sort((a, b) => ids.indexOf(a.id) - ids.indexOf(b.id));
  }
);

export const selectSubtotalPrice = createSelector(
  selectQuantity,
  selectProducts,
  (_, productId) => productId,
  (quantity, products, productId) => {
    const product = products.find((item) => item.id === productId);

    if (product) {
      return Math.round(quantity * product.price * 100) / 100;
    }
  }
);

export const selectTotalPrice = createSelector(
  selectIds,
  (state) => state,
  (ids, state) => {
    const totalPrice = ids.reduce((accumulator, currentValue) => {
      const subtotalPrice = selectSubtotalPrice(state, currentValue);
      return accumulator + subtotalPrice;
    }, 0);

    return Math.round(totalPrice * 100) / 100;
  }
);
