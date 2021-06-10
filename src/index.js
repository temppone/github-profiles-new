import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ModesProvider } from "./Repositories/providers/modes";

ReactDOM.render(
  <ModesProvider>
    <App />
  </ModesProvider>,
  document.getElementById("root")
);
