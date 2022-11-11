import "@shared/styles/globals.scss";
import React from "react";
import { Helmet } from "react-helmet";
import { renderRoutes } from "react-router-config";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";

import { ScrollToTop } from "@shared/components";
import routes from "./_routes";

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <ToastProvider autoDismiss>
        <Helmet defaultTitle="bookstore" titleTemplate="%s — bookstore" />
        {renderRoutes(routes)}
      </ToastProvider>
    </Router>
  );
}
