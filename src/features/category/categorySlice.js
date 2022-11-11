import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchBooks } from "@features/entities";
import { LOADING_STATUS, SUCCEEDED_STATUS } from "@shared/constants";
import { selectPageStatus } from "./selectors";

export const fetchPage = createAsyncThunk(
  "category/fetchPage",
  async ({ categoryId, page }, { dispatch }) => {
    const params = {
      limit: 6,
      sortBy: "DESC",
      categoryId,
      page,
    };

    const res = await dispatch(fetchBooks(params));
    const { total, entities } = res.payload;

    return {
      total,
      books: entities.books,
    };
  },
  {
    condition: (_, { getState }) => {
      const status = selectPageStatus(getState());

      if (status === SUCCEEDED_STATUS) {
        return false;
      }
    },
  }
);

const initialState = {
  current: 1,
  page: 1,
  isVisible: false,
  pagination: {},
};

const slice = createSlice({
  name: "category",
  initialState,
  reducers: {
    categoryChanged: (state, action) => {
      if (state.current !== action.payload) {
        state.page = initialState.page;
        state.current = action.payload;
      }
    },
    pageChanged: (state, action) => {
      state.page = action.payload;
    },
    pageVisibilityChanged: (state, action) => {
      state.isVisible = action.payload;
    },
  },
  extraReducers: {
    [fetchPage.pending]: (state, action) => {
      const { pagination } = state;
      const { categoryId, page } = action.meta.arg;

      if (!pagination[categoryId]) {
        pagination[categoryId] = { totalBooks: 0, pages: {} };
      }

      pagination[categoryId].pages[page] = {
        bookIds: [],
        status: LOADING_STATUS,
      };
    },
    [fetchPage.fulfilled]: (state, action) => {
      const { pagination } = state;
      const { categoryId, page } = action.meta.arg;
      const { total, books = {} } = action.payload;

      pagination[categoryId].totalBooks = total;
      pagination[categoryId].pages[page].bookIds = Object.keys(books).map(
        Number
      );
      pagination[categoryId].pages[page].status = SUCCEEDED_STATUS;
    },
  },
});

export const {
  categoryChanged,
  pageChanged,
  pageVisibilityChanged,
} = slice.actions;

export * from "./selectors";

export default slice.reducer;
