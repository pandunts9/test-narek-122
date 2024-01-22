import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// const { log } = console;

// const arr = [1, 2, 3, 4];
// // const firstItem = arr[0];
// // const secItem = arr[1];
// // const restArr = [arr[2], arr[3]];
// const [firstItem, secItem, ...restArr] = arr;

// log({ firstItem, secItem, restArr });

// const user = { name: "Martin", surname: "Elizbaryan" };
// // const name = user.name;
// // const surname = user.surname;

// const { name: auwdghkuagw = "Martinnnnn", surname } = user;

// log({ auwdghkuagw, surname });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
