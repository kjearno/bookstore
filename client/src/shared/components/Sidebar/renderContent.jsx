import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { Loader } from "../Loader";
import styles from "./style.module.scss";

const cx = classNames.bind(styles);

export const renderContent = ({
  categories,
  categoryId,
  isFirstFetch,
  onCategoryChange,
}) => {
  let content = categories.map((category) => (
    <li
      className={cx("item", { active: category.id === categoryId })}
      key={category.id}
    >
      <Link to="/" onClick={() => onCategoryChange(category.id)}>
        {category.name}
      </Link>
    </li>
  ));

  if (isFirstFetch) {
    content = <Loader />;
  }

  return content;
};
