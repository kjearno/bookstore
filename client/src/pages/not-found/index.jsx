import React from "react";
import { Helmet } from "react-helmet";
import { CommonTemplate } from "@shared/templates";

export function NotFoundPage() {
  return (
    <CommonTemplate>
      <Helmet title="Not Found" />

      <p>404 Not Found</p>
    </CommonTemplate>
  );
}
