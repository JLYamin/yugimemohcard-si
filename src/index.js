import React from "react";
import ReactDOM from "react-dom";

import App from "./App.js";
import { GlobalStyle } from "./styles/global.js";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App></App>
  </React.StrictMode>,
  document.getElementById("root")
);
