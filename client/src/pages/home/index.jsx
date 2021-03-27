import React from "react";
import { Helmet } from "react-helmet";
import { BookList } from "@features/books";
import { HomeTemplate } from "@shared/templates";

export function HomePage() {
  return (
    <HomeTemplate>
      <Helmet title="Home" />

      <BookList />
    </HomeTemplate>
  );
}
