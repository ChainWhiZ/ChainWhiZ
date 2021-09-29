import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import RouterComponent from "./components/router";
import { StylesProvider } from "@material-ui/core/styles";
ReactDOM.render(
  <StylesProvider injectFirst>
    <React.StrictMode>
      <RouterComponent />
    </React.StrictMode>
  </StylesProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
