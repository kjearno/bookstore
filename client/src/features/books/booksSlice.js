import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { normalize, schema } from "normalizr";
import {
  IDLE_STATUS,
  LOADING_STATUS,
  SUCCEEDED_STATUS,
  FAILED_STATUS,
} from "@shared/constants";
import { axios } from "@shared/lib";
import { limitDescription } from "./lib/limitDescription";

const categoryEntity = new schema.Entity("categories");
const bookEntity = new schema.Entity("books", {
  category: categoryEntity,
});

export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async (params) => {
    const res = await axios.get("/books", { params });
    const normalized = normalize(res.data.rows, [bookEntity]);

    return {
      total: res.data.count,
      entities: normalized.entities,
    };
  }
);

export const fetchBook = createAsyncThunk("books/fetchBook", async (id) => {
  const res = await axios.get(`/books/${id}`);
  const normalized = normalize(res.data, bookEntity);

  return normalized.entities;
});

const adapter = createEntityAdapter({
  sortComparer: (a, b) => b.id - a.id,
});

const initialState = adapter.getInitialState({
  status: IDLE_STATUS,
  error: null,
});

const slice = createSlice({
  name: "books",
  initialState,
  extraReducers: {
    [fetchBooks.pending]: (state) => {
      state.status = LOADING_STATUS;
      state.error = null;
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.status = SUCCEEDED_STATUS;
      const { books = {} } = action.payload.entities;

      const editedBooks = limitDescription(books, 100);
      adapter.addMany(state, editedBooks);
    },
    [fetchBooks.rejected]: (state, action) => {
      state.status = FAILED_STATUS;
      state.error = action.error;
    },
    [fetchBook.pending]: (state) => {
      state.status = LOADING_STATUS;
      state.error = null;
    },
    [fetchBook.fulfilled]: (state, action) => {
      state.status = SUCCEEDED_STATUS;
      const { books } = action.payload;

      const editedBooks = limitDescription(books, 100);
      adapter.addMany(state, editedBooks);
    },
    [fetchBook.rejected]: (state, action) => {
      state.status = FAILED_STATUS;
      state.error = action.error;
    },
  },
});

export default slice.reducer;

export const {
  selectById: selectBookById,
  selectIds: selectBookIds,
  selectEntities: selectBookEntities,
  selectAll: selectAllBooks,
  selectTotal: selectTotalBooks,
} = adapter.getSelectors((state) => state.books);
