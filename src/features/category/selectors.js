import { createSelector } from "@reduxjs/toolkit";
import { selectAllBooks } from "@features/entities";
import { LOADING_STATUS } from "@shared/constants";

export const selectCategoryId = (state) => state.category.current;
export const selectPageId = (state) => state.category.page;
export const selectPageVisibility = (state) => state.category.isVisible;
export const selectPagination = (state) => state.category.pagination;

export const selectTotalBooks = createSelector(
  selectPagination,
  selectCategoryId,
  (pagination, categoryId) => {
    if (pagination[categoryId]) {
      return pagination[categoryId].totalBooks;
    }
  }
);

export const selectPage = createSelector(
  selectPagination,
  selectCategoryId,
  selectPageId,
  (pagination, categoryId, pageId) => {
    const pageShape = {
      bookIds: [],
      status: LOADING_STATUS,
    };

    return pagination[categoryId]?.pages[pageId] || pageShape;
  }
);

export const selectPageStatus = createSelector(
  selectPage,
  (page) => page.status
);

export const selectBooks = createSelector(
  selectPage,
  selectAllBooks,
  (page, books) => {
    const { bookIds } = page;
    return books.filter((book) => bookIds.includes(book.id));
  }
);
