import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./fonts/AnekGurmukhi-Bold.ttf";
import App from "./App";

// Default to dark theme; switch by toggling the data-theme attribute
document.body.dataset.theme = "dark";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
