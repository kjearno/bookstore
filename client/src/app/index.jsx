import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Pages } from "@pages";
import "./style.css";

export function App() {
  return (
    <Router>
      <Pages />
    </Router>
  );
}
