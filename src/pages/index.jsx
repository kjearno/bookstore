import React from "react";
import { Helmet } from "react-helmet";

import { HomeTemplate } from "@components/templates";
import { Category } from "@features/category";

export default function Home() {
  return (
    <HomeTemplate>
      <Helmet title="Home" />

      <Category />
    </HomeTemplate>
  );
}
