import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import BrowserRouter from  'react-router-dom/BrowserRouter';

ReactDOM.render(
  <BrowserRouter basename="TextStyler">
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
