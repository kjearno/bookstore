import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

import styles from "./Redirector.module.scss";

export function Redirector({ message }) {
  return (
    <>
      <p className={styles.message}>{message}</p>
      <Link to="/">Go Home</Link>
    </>
  );
}

Redirector.propTypes = {
  message: PropTypes.string.isRequired,
};
