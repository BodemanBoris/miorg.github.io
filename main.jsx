import { StrictMode } from "react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./src/App.jsx";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("app"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
