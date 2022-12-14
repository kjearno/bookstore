import "@styles/globals.scss";
import React from "react";
import { Helmet } from "react-helmet";
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";

import { ScrollToTop } from "@components/ScrollToTop";
import routes from "./_routes";

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <ToastProvider autoDismiss>
        <Helmet defaultTitle="bookstore" titleTemplate="%s — bookstore" />
        {renderRoutes(routes)}
      </ToastProvider>
    </HashRouter>
  );
}
