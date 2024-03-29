import React from "react";
import ReactDom from "react-dom";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./app/store";

ReactDom.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
