import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"; //imported a component from react-router-dom
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

//Wrapping our app component with browser router
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
