import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ContextAPIProvider } from "./context/ContextApi";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextAPIProvider>
      <App />
    </ContextAPIProvider>
  </React.StrictMode>
);
