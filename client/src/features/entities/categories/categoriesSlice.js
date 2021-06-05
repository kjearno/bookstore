import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  IDLE_STATUS,
  LOADING_STATUS,
  SUCCEEDED_STATUS,
} from "@shared/constants";
import { axios } from "@shared/lib";
import { fetchBooks, fetchBook } from "../books";

const adapter = createEntityAdapter();

export const {
  selectById: selectCategoryById,
  selectIds: selectCategoryIds,
  selectEntities: selectCategoryEntities,
  selectAll: selectAllCategories,
  selectTotal: selectTotalCategories,
} = adapter.getSelectors((state) => state.entities.categories);

export const selectCategoriesStatus = (state) =>
  state.entities.categories.status;

export const fetchCategories = createAsyncThunk(
  "entities/fetchCategories",
  async () => {
    const res = await axios.get("/categories?limit=100");
    return res.data.rows;
  },
  {
    condition: (_, { getState }) => {
      const status = selectCategoriesStatus(getState());

      if (status === LOADING_STATUS || status === SUCCEEDED_STATUS) {
        return false;
      }
    },
  }
);

const initialState = adapter.getInitialState({
  status: IDLE_STATUS,
});

const slice = createSlice({
  name: "entities",
  initialState,
  extraReducers: {
    [fetchCategories.pending]: (state) => {
      state.status = LOADING_STATUS;
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.status = SUCCEEDED_STATUS;
      adapter.setAll(state, action.payload);
    },
    [fetchBooks.fulfilled]: (state, action) => {
      const { categories = {} } = action.payload.entities;
      adapter.addMany(state, categories);
    },
    [fetchBook.fulfilled]: (state, action) => {
      const { categories } = action.payload;
      adapter.addMany(state, categories);
    },
  },
});

export default persistReducer(
  {
    key: "categories",
    storage,
    whitelist: ["ids", "entities"],
    keyPrefix: "bookstore:",
  },
  slice.reducer
);
