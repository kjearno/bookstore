import React from "react";
import PropTypes from "prop-types";
import RcPagination from "rc-pagination";
import locale from "rc-pagination/es/locale/en_US";
import styles from "./style.module.scss";
import "rc-pagination/assets/index.css";

export function Pagination({ current, total, pageSize, onChange }) {
  return (
    <RcPagination
      className={styles.pagination}
      current={current}
      total={total}
      pageSize={pageSize}
      locale={locale}
      onChange={onChange}
    />
  );
}

Pagination.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number,
  pageSize: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  total: 0,
};
