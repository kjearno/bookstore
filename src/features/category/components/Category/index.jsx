import React from "react";
import { Row, Col } from "react-flexbox-grid";
import { Element } from "react-scroll";
import VisibilitySensor from "react-visibility-sensor";

import { Pagination } from "@components/Pagination";
import { usePage } from "../../hooks";
import { renderContent } from "./renderContent";
import styles from "./Category.module.scss";

export function Category() {
  const {
    books,
    totalBooks,
    isLoading,
    pageId,
    noBooks,
    pageSize,
    onPageChange,
    onVisibilityChange,
  } = usePage();

  if (noBooks) {
    return <p className={styles.noBooks}>No books</p>;
  }

  return (
    <VisibilitySensor partialVisibility onChange={onVisibilityChange}>
      <Row>
        <Element name="CategoryContent" />
        {renderContent({ books, isLoading, pageSize })}

        {totalBooks ? (
          <Col className={styles.paginationCol} xs={12} lg={6}>
            <div className={styles.pagination}>
              <Pagination
                current={pageId}
                total={totalBooks}
                pageSize={pageSize}
                onChange={onPageChange}
              />
            </div>
          </Col>
        ) : null}
      </Row>
    </VisibilitySensor>
  );
}
