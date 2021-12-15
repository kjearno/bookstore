import "rc-pagination/assets/index.css";
import PropTypes from "prop-types";
import RcPagination from "rc-pagination";
import locale from "rc-pagination/es/locale/en_US";
import React from "react";

import styles from "./Pagination.module.scss";

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
