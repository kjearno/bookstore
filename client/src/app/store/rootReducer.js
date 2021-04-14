import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { booksReducer } from "@features/books";
import { cartReducer } from "@features/cart";
import { categoriesReducer } from "@features/categories";

const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["ids", "items"],
};

const categoriesPersistConfig = {
  key: "categories",
  storage,
  whitelist: ["ids", "entities"],
};

export const rootReducer = combineReducers({
  books: booksReducer,
  cart: persistReducer(cartPersistConfig, cartReducer),
  categories: persistReducer(categoriesPersistConfig, categoriesReducer),
});
