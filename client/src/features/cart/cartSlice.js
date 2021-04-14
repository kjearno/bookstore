import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBook } from "@features/books";
import {
  IDLE_STATUS,
  LOADING_STATUS,
  SUCCEEDED_STATUS,
  FAILED_STATUS,
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

      if (status === LOADING_STATUS || status === SUCCEEDED_STATUS) {
        return false;
      }
    },
  }
);

const initialState = {
  ids: [],
  items: {},
  status: IDLE_STATUS,
  error: null,
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
      state.error = null;
    },
    [fetchItems.fulfilled]: (state) => {
      state.status = SUCCEEDED_STATUS;
    },
    [fetchItems.rejected]: (state, action) => {
      state.status = FAILED_STATUS;
      state.error = action.error;
    },
  },
});

export default slice.reducer;

export const {
  itemToggled,
  itemRemoved,
  quantityChanged,
  cartCleared,
} = slice.actions;

export * from "./selectors";
