import { combineReducers } from "@reduxjs/toolkit";
import { cartReducer } from "@features/cart";
import { categoryReducer } from "@features/category";
import { entitiesReducer } from "@features/entities";

export const rootReducer = combineReducers({
  cart: cartReducer,
  category: categoryReducer,
  entities: entitiesReducer,
});
