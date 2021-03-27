import React from "react";
import { Helmet } from "react-helmet";
import { renderRoutes } from "react-router-config";
import { routes } from "./routes";

export function Pages() {
  return (
    <>
      <Helmet defaultTitle="bookstore" titleTemplate="%s — bookstore" />
      {renderRoutes(routes)}
    </>
  );
}
