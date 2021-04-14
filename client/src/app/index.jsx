import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { Pages } from "@pages";
import { ScrollToTop } from "@shared/components";
import "./style.scss";

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <ToastProvider autoDismiss>
        <Pages />
      </ToastProvider>
    </Router>
  );
}
