import React from "react";
import { Row, Col } from "react-flexbox-grid";
import VisibilitySensor from "react-visibility-sensor";
import { Element } from "react-scroll";
import { Pagination } from "@shared/components";
import { usePage } from "../../hooks";
import { NoBooks } from "./NoBooks";
import { renderContent } from "./renderContent";
import styles from "./style.module.scss";

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
    return <NoBooks />;
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
