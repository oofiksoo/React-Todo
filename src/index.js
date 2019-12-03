import React from "react";

import ReactDOM from "react-dom";

import App from "./App";

const data = [
  {
    name: "Create To Do App",
    id: 1,
    complete: false
  },

  {
    name: "Create To Do List",
    id: 2,
    complete: false
  },

  {
    name: "Complete To Do List",
    id: 3,
    complete: false
  },

  {
    name: "Repeate",
    id: 4,
    complete: false
  }
];

export default data;

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
