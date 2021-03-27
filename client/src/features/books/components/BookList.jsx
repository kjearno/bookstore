import React from "react";
import { Row, Col } from "react-flexbox-grid";
import { Book } from "./Book";

export function BookList() {
  const data = {
    id: 1,
    title: "The Intelligent Investor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui quaerat ex vero fugiat! Sequi vel...",
    cover: "https://bookstore-73510.herokuapp.com/covers/business/1.jpg",
    price: "4.99",
    authorId: 1,
    categoryId: 1,
    createdAt: "2021-03-17T22:34:12.337Z",
    updatedAt: "2021-03-17T22:34:12.337Z",
    author: {
      id: 1,
      name: "Benjamin Graham",
      createdAt: "2021-03-17T22:34:11.922Z",
      updatedAt: "2021-03-17T22:34:11.922Z",
    },
    category: {
      id: 1,
      name: "Business",
      createdAt: "2021-03-17T22:34:12.135Z",
      updatedAt: "2021-03-17T22:34:12.135Z",
    },
  };

  const books = Array(6).fill(data);

  return (
    <Row>
      {books.map((book) => (
        <Col key={book.id} xs={12} lg={6}>
          <Book data={book} />
        </Col>
      ))}
    </Row>
  );
}
