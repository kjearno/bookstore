import React from "react";
import { Helmet } from "react-helmet";

import { Redirector } from "@components/Redirector";
import { CommonTemplate } from "@components/templates";

export default function NotFound() {
  return (
    <CommonTemplate>
      <Helmet title="Not Found" />

      <Redirector message="404 Not Found" />
    </CommonTemplate>
  );
}
