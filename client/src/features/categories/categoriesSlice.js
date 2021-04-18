import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { fetchBooks, fetchBook } from "@features/books";
import {
  IDLE_STATUS,
  LOADING_STATUS,
  SUCCEEDED_STATUS,
  FAILED_STATUS,
} from "@shared/constants";
import { axios } from "@shared/lib";
import { selectCategoriesStatus, selectPageStatus } from "./selectors";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
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

export const fetchPage = createAsyncThunk(
  "categories/fetchPage",
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

const adapter = createEntityAdapter();

const initialState = adapter.getInitialState({
  current: 1,
  pagination: { currentPage: 1, isVisible: false, categoryIds: {} },
  status: IDLE_STATUS,
  error: null,
});

const slice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    categoryChanged: (state, action) => {
      if (state.current !== action.payload) {
        state.pagination.currentPage = initialState.pagination.currentPage;
        state.current = action.payload;
      }
    },
    pageChanged: (state, action) => {
      state.pagination.currentPage = action.payload;
    },
    pageVisibilityChanged: (state, action) => {
      state.pagination.isVisible = action.payload;
    },
  },
  extraReducers: {
    [fetchCategories.pending]: (state) => {
      state.status = LOADING_STATUS;
      state.error = null;
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.status = SUCCEEDED_STATUS;
      adapter.setAll(state, action.payload);
    },
    [fetchCategories.rejected]: (state, action) => {
      state.status = FAILED_STATUS;
      state.error = action.error;
    },
    [fetchPage.pending]: (state, action) => {
      const { categoryIds } = state.pagination;
      const { categoryId, page } = action.meta.arg;

      if (!categoryIds[categoryId]) {
        categoryIds[categoryId] = { totalBooks: 0, pages: {} };
      }

      categoryIds[categoryId].pages[page] = {
        bookIds: [],
        status: LOADING_STATUS,
      };
    },
    [fetchPage.fulfilled]: (state, action) => {
      const { categoryIds } = state.pagination;
      const { categoryId, page } = action.meta.arg;
      const { total, books = {} } = action.payload;

      categoryIds[categoryId].totalBooks = total;
      categoryIds[categoryId].pages[page].bookIds = Object.keys(books).map(
        Number
      );
      categoryIds[categoryId].pages[page].status = SUCCEEDED_STATUS;
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

export default slice.reducer;

export const {
  categoryChanged,
  pageChanged,
  pageVisibilityChanged,
} = slice.actions;

export * from "./selectors";
