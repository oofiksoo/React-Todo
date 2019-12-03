import React from "react";

import ReactDOM from "react-dom";

import App from "./App";

const data = [
  {
    name: "Write Javascript Code",
    id: 1,
    complete: false
  },

  {
    name: "Write More Javascript Code",
    id: 2,
    complete: false
  },

  {
    name: "Start List at Begining",
    id: 3,
    complete: false
  }
];

export default data;

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
