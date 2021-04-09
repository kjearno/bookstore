import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOADING_STATUS } from "@shared/constants";
import {
  fetchCategories,
  categoryChanged,
  selectAllCategories,
  selectTotalCategories,
  selectCategoryId,
  selectCategoriesStatus,
} from "../categoriesSlice";

export const useCategories = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectAllCategories);
  const totalCategories = useSelector(selectTotalCategories);
  const categoryId = useSelector(selectCategoryId);
  const status = useSelector(selectCategoriesStatus);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryChange = (id) => {
    dispatch(categoryChanged(id));
  };

  return {
    categories,
    categoryId,
    isFirstFetch: status === LOADING_STATUS && !totalCategories,
    onCategoryChange: handleCategoryChange,
  };
};
