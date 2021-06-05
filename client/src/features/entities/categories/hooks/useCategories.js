import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOADING_STATUS } from "@shared/constants";
import {
  fetchCategories,
  selectAllCategories,
  selectTotalCategories,
  selectCategoriesStatus,
} from "../categoriesSlice";

export const useCategories = () => {
  const dispatch = useDispatch();

  const categories = useSelector(selectAllCategories);
  const totalCategories = useSelector(selectTotalCategories);
  const status = useSelector(selectCategoriesStatus);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return {
    categories,
    isLoading: status === LOADING_STATUS && !totalCategories,
  };
};
