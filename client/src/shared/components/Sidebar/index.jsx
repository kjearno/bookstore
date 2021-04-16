import React from "react";
import { useCategories } from "@features/categories";
import { renderContent } from "./renderContent";
import styles from "./style.module.scss";

export function Sidebar() {
  const {
    categories,
    categoryId,
    isFirstFetch,
    onCategoryChange,
  } = useCategories();

  return (
    <aside className={styles.sidebar}>
      {renderContent({
        categories,
        categoryId,
        isFirstFetch,
        onCategoryChange,
      })}
    </aside>
  );
}
