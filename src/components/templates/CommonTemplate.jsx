import PropTypes from "prop-types";
import React from "react";
import { Grid } from "react-flexbox-grid";

import { Header } from "@components/Header";

export function CommonTemplate({ children }) {
  return (
    <Grid>
      <Header />
      <main>{children}</main>
    </Grid>
  );
}

CommonTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
