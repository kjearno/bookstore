import React from "react";
import { Helmet } from "react-helmet";
import { Redirector } from "@shared/components";
import { CommonTemplate } from "@shared/templates";

export function NotFoundPage() {
  return (
    <CommonTemplate>
      <Helmet title="Not Found" />

      <Redirector message="404 Not Found" />
    </CommonTemplate>
  );
}
