import React from "react";
import PropTypes from "prop-types";
import { Grid } from "react-flexbox-grid";
import { Header } from "@shared/components";

export function CommonTemplate({ children }) {
  return (
    <Grid>
      <Header />

      <main>{children}</main>
    </Grid>
  );
}

CommonTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};
