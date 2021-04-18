import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { scroller } from "react-scroll";
import { SUCCEEDED_STATUS } from "@shared/constants";
import {
  fetchPage,
  pageChanged,
  pageVisibilityChanged,
  selectCategoryId,
  selectPageId,
  selectTotalBooks,
  selectPageStatus,
  selectBooks,
} from "../categoriesSlice";

export const usePage = () => {
  const dispatch = useDispatch();
  const categoryId = useSelector(selectCategoryId);
  const pageId = useSelector(selectPageId);
  const totalBooks = useSelector(selectTotalBooks);
  const books = useSelector(selectBooks);
  const status = useSelector(selectPageStatus);

  useEffect(() => {
    dispatch(fetchPage({ categoryId, page: pageId }));
  }, [dispatch, categoryId, pageId]);

  const handlePageChange = (id) => {
    dispatch(pageChanged(id));
    scroller.scrollTo("BooksListContent");
  };

  const handleVisibilityChange = (isVisible) => {
    dispatch(pageVisibilityChanged(isVisible));
  };

  return {
    books,
    totalBooks,
    status,
    pageId,
    noBooks: status === SUCCEEDED_STATUS && !totalBooks,
    pageSize: 6,
    onPageChange: handlePageChange,
    onVisibilityChange: handleVisibilityChange,
  };
};
