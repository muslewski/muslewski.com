import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./helpers/i18n.js"; // Importuj konfigurację i18next
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
