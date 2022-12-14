import { useDispatch, useSelector } from "react-redux";
import { scroller } from "react-scroll";

import {
  categoryChanged,
  selectCategoryId,
  selectPageVisibility,
} from "../categorySlice";

export const useCategory = () => {
  const dispatch = useDispatch();

  const categoryId = useSelector(selectCategoryId);
  const isPageVisible = useSelector(selectPageVisibility);

  const handleCategoryChange = (id) => {
    dispatch(categoryChanged(id));

    if (!isPageVisible) {
      scroller.scrollTo("CategoryContent", { smooth: true });
    }
  };

  return {
    categoryId,
    onCategoryChange: handleCategoryChange,
  };
};
