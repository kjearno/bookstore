import { combineReducers } from "@reduxjs/toolkit";
import { booksReducer } from "./books";
import { categoriesReducer } from "./categories";

export * from "./books";
export * from "./categories";

export const entitiesReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});
