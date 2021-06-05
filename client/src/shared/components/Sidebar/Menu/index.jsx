import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { useCategory } from "@features/category";
import { useCategories } from "@features/entities";
import { Loader } from "../../Loader";
import styles from "./style.module.scss";

const cx = classNames.bind(styles);

export function Menu() {
  const { categories, isLoading } = useCategories();
  const { categoryId, onCategoryChange } = useCategory();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ul className={styles.menu}>
      {categories.map((category) => (
        <li
          className={cx("item", { active: category.id === categoryId })}
          key={category.id}
        >
          <Link to="/" onClick={() => onCategoryChange(category.id)}>
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
