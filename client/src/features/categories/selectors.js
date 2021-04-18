import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { selectAllBooks } from "@features/books";
import { LOADING_STATUS } from "@shared/constants";

const adapter = createEntityAdapter();

export const {
  selectById: selectCategoryById,
  selectIds: selectCategoryIds,
  selectEntities: selectCategoryEntities,
  selectAll: selectAllCategories,
  selectTotal: selectTotalCategories,
} = adapter.getSelectors((state) => state.categories);

export const selectCategoryId = (state) => state.categories.current;
export const selectPagination = (state) => state.categories.pagination;
export const selectCategoriesStatus = (state) => state.categories.status;

export const selectPageId = createSelector(
  selectPagination,
  (pagination) => pagination.currentPage
);

export const selectPageVisibility = createSelector(
  selectPagination,
  (pagination) => pagination.isVisible
);

export const selectTotalBooks = createSelector(
  selectCategoryId,
  selectPagination,
  (categoryId, pagination) => {
    const { categoryIds } = pagination;

    if (categoryIds[categoryId]) {
      return categoryIds[categoryId].totalBooks;
    }
  }
);

export const selectPage = createSelector(
  selectCategoryId,
  selectPageId,
  selectPagination,
  (categoryId, pageId, pagination) => {
    const { categoryIds } = pagination;

    const pageShape = {
      bookIds: [],
      status: LOADING_STATUS,
    };

    return categoryIds[categoryId]?.pages[pageId] || pageShape;
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
