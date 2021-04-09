import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { booksReducer } from "@features/books";
import { categoriesReducer } from "@features/categories";

const categoriesPersistConfig = {
  key: "categories",
  storage,
  whitelist: ["ids", "entities"],
};

export const rootReducer = combineReducers({
  books: booksReducer,
  categories: persistReducer(categoriesPersistConfig, categoriesReducer),
});
