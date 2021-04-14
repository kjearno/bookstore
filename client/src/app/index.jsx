import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { Pages } from "@pages";
import "./style.css";

export function App() {
  return (
    <Router>
      <ToastProvider autoDismiss>
      <Pages />
      </ToastProvider>
    </Router>
  );
}
