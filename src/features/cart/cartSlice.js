import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { fetchBook } from "@features/entities";
import {
  IDLE_STATUS,
  LOADING_STATUS,
  SUCCEEDED_STATUS,
} from "@shared/constants";
import { selectIds, selectStatus } from "./selectors";

export const fetchItems = createAsyncThunk(
  "cart/fetchItems",
  async (_, { dispatch, getState }) => {
    const itemIds = selectIds(getState());

    return Promise.all(
      itemIds.map(async (id) => {
        await dispatch(fetchBook(id));
      })
    );
  },
  {
    condition: (_, { getState }) => {
      const status = selectStatus(getState());

      if (status === SUCCEEDED_STATUS) {
        return false;
      }
    },
  }
);

const initialState = {
  ids: [],
  items: {},
  status: IDLE_STATUS,
};

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    itemToggled: (state, action) => {
      if (state.items[action.payload]) {
        delete state.items[action.payload];
        state.ids = state.ids.filter((id) => id !== action.payload);
        return;
      }

      state.items[action.payload] = { id: action.payload, quantity: 1 };
      state.ids.unshift(action.payload);
    },
    itemRemoved: (state, action) => {
      delete state.items[action.payload];
      state.ids = state.ids.filter((id) => id !== action.payload);
    },
    quantityChanged: (state, action) => {
      const { itemId, quantity } = action.payload;

      if (quantity <= 0) {
        delete state.items[itemId];
        state.ids = state.ids.filter((id) => id !== itemId);
        return;
      }

      state.items[itemId].quantity = Number(quantity);
    },
    cartCleared: (state) => {
      state.items = {};
      state.ids = [];
    },
  },
  extraReducers: {
    [fetchItems.pending]: (state) => {
      state.status = LOADING_STATUS;
    },
    [fetchItems.fulfilled]: (state) => {
      state.status = SUCCEEDED_STATUS;
    },
  },
});

export const {
  itemToggled,
  itemRemoved,
  quantityChanged,
  cartCleared,
} = slice.actions;

export * from "./selectors";

export default persistReducer(
  {
    key: "cart",
    storage,
    whitelist: ["ids", "items"],
    keyPrefix: "bookstore:",
  },
  slice.reducer
);
