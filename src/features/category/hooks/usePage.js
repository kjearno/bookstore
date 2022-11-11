import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { scroller } from "react-scroll";

import { LOADING_STATUS, SUCCEEDED_STATUS } from "@shared/constants";
import {
  fetchPage,
  pageChanged,
  pageVisibilityChanged,
  selectCategoryId,
  selectPageId,
  selectTotalBooks,
  selectPageStatus,
  selectBooks,
} from "../categorySlice";

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
    scroller.scrollTo("CategoryContent");
  };

  const handleVisibilityChange = (isVisible) => {
    dispatch(pageVisibilityChanged(isVisible));
  };

  return {
    books,
    totalBooks,
    isLoading: status === LOADING_STATUS,
    pageId,
    noBooks: status === SUCCEEDED_STATUS && !totalBooks,
    pageSize: 6,
    onPageChange: handlePageChange,
    onVisibilityChange: handleVisibilityChange,
  };
};
