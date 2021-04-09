import React from "react";
import { Col } from "react-flexbox-grid";
import { LOADING_STATUS } from "@shared/constants";
import { Book, Skeleton } from "../Book";

export const renderContent = ({ books, status, pageSize }) => {
  let items = books.map((book) => <Book data={book} key={book.id} />);

  if (status === LOADING_STATUS) {
    items = [...Array(pageSize).keys()].map((key) => <Skeleton key={key} />);
  }

  return items.map((item) => (
    <Col xs={12} lg={6} key={item.key}>
      {item}
    </Col>
  ));
};
