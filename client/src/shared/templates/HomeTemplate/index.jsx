import React from "react";
import PropTypes from "prop-types";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Announcement, Header, Sidebar } from "@shared/components";
import styles from "./style.module.scss";

export function HomeTemplate({ children }) {
  return (
    <Grid>
      <Header />

      <section className={styles.announcement}>
        <Announcement />
      </section>

      <Row>
        <Col lg={2}>
          <Sidebar />
        </Col>
        <Col lg={10}>
          <main className={styles.main}>{children}</main>
        </Col>
      </Row>
    </Grid>
  );
}

HomeTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};
