import PropTypes from "prop-types";
import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

import { Announcement, Header, Sidebar } from "@shared/components";
import styles from "./HomeTemplate.module.scss";

export function HomeTemplate({ children }) {
  return (
    <Grid>
      <Header />

      <section className={styles.announcement}>
        <Announcement />
      </section>

      <section>
        <Row>
          <Col lg={2}>
            <Sidebar />
          </Col>
          <Col lg={10}>
            <main className={styles.main}>{children}</main>
          </Col>
        </Row>
      </section>
    </Grid>
  );
}

HomeTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};