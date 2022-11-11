import React from "react";
import { Helmet } from "react-helmet";
import { Category } from "@features/category";
import { HomeTemplate } from "@shared/templates";

export default function Home() {
  return (
    <HomeTemplate>
      <Helmet title="Home" />

      <Category />
    </HomeTemplate>
  );
}
