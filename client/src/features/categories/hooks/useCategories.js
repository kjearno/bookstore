import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { scroller } from "react-scroll";
import { LOADING_STATUS } from "@shared/constants";
import {
  fetchCategories,
  categoryChanged,
  selectAllCategories,
  selectTotalCategories,
  selectCategoryId,
  selectCategoriesStatus,
  selectPageVisibility,
} from "../categoriesSlice";

export const useCategories = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectAllCategories);
  const totalCategories = useSelector(selectTotalCategories);
  const categoryId = useSelector(selectCategoryId);
  const status = useSelector(selectCategoriesStatus);
  const isPageVisible = useSelector(selectPageVisibility);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryChange = (id) => {
    dispatch(categoryChanged(id));

    if (!isPageVisible) {
      scroller.scrollTo("BooksListContent", { smooth: true });
    }
  };

  return {
    categories,
    categoryId,
    isFirstFetch: status === LOADING_STATUS && !totalCategories,
    onCategoryChange: handleCategoryChange,
  };
};
