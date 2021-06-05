import React from "react";
import { Col } from "react-flexbox-grid";
import { Book } from "@shared/components";

export const renderContent = ({ books, isLoading, pageSize }) => {
  let items = books.map((book) => (
    <Book
      id={book.id}
      cover={book.cover}
      author={book.author}
      title={book.title}
      description={book.description}
      price={book.price}
      key={book.id}
    />
  ));

  if (isLoading) {
    items = [...Array(pageSize).keys()].map((key) => <Book.Loader key={key} />);
  }

  return items.map((item) => (
    <Col xs={12} lg={6} key={item.key}>
      {item}
    </Col>
  ));
};
