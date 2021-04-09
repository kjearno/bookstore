import React from "react";
import { Row, Col } from "react-flexbox-grid";
import { Element } from "react-scroll";
import { usePage } from "@features/categories";
import { Pagination } from "@shared/components";
import { NoBooks } from "../NoBooks";
import { renderContent } from "./renderContent";
import styles from "./style.module.scss";

export function BooksList() {
  const {
    books,
    totalBooks,
    status,
    pageId,
    noBooks,
    pageSize,
    onPageChange,
  } = usePage();

  if (noBooks) {
    return <NoBooks />;
  }

  return (
    <Row>
      <Element name="BooksListContent" />
      {renderContent({ books, status, pageSize })}

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
    </Row>
  );
}
