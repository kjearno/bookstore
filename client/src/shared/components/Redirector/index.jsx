import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";

export function Redirector({ message }) {
  return (
    <div>
      <p className={styles.message}>{message}</p>
      <Link to="/">Go Home</Link>
    </div>
  );
}

Redirector.propTypes = {
  message: PropTypes.string.isRequired,
};
