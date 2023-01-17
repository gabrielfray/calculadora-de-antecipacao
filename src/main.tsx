import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
