import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { normalize, schema } from "normalizr";
import {
  IDLE_STATUS,
  LOADING_STATUS,
  SUCCEEDED_STATUS,
} from "@shared/constants";
import { axios } from "@shared/lib";
import { limitDescription } from "./lib";

const adapter = createEntityAdapter({
  sortComparer: (a, b) => b.id - a.id,
});

export const {
  selectById: selectBookById,
  selectIds: selectBookIds,
  selectEntities: selectBookEntities,
  selectAll: selectAllBooks,
  selectTotal: selectTotalBooks,
} = adapter.getSelectors((state) => state.entities.books);

const categoryEntity = new schema.Entity("categories");
const bookEntity = new schema.Entity("books", {
  category: categoryEntity,
});

export const fetchBooks = createAsyncThunk(
  "entities/fetchBooks",
  async (params) => {
    const res = await axios.get("/books", { params });
    const normalized = normalize(res.data.rows, [bookEntity]);

    return {
      total: res.data.count,
      entities: normalized.entities,
    };
  }
);

export const fetchBook = createAsyncThunk("entities/fetchBook", async (id) => {
  const res = await axios.get(`/books/${id}`);
  const normalized = normalize(res.data, bookEntity);

  return normalized.entities;
});

const initialState = adapter.getInitialState({
  status: IDLE_STATUS,
});

const slice = createSlice({
  name: "entities",
  initialState,
  extraReducers: {
    [fetchBooks.pending]: (state) => {
      state.status = LOADING_STATUS;
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.status = SUCCEEDED_STATUS;
      const { books = {} } = action.payload.entities;

      const editedBooks = limitDescription(books, 100);
      adapter.addMany(state, editedBooks);
    },
    [fetchBook.pending]: (state) => {
      state.status = LOADING_STATUS;
    },
    [fetchBook.fulfilled]: (state, action) => {
      state.status = SUCCEEDED_STATUS;
      const { books } = action.payload;

      const editedBooks = limitDescription(books, 100);
      adapter.addMany(state, editedBooks);
    },
  },
});

export default slice.reducer;
