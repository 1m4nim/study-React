// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>
// );

// reportWebVitals();

import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import books from "./book";
import ForList from "./ForList";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);
  root.render(<ForList src={books} />);
} else {
  console.log("Root container not found");
}

reportWebVitals();
