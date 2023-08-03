import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Provider as ContextProvider } from "./context";
import "./index.css";

import App from "./App";
import {store} from "./store"
import "./i18next"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ContextProvider>
          <App />
        </ContextProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
