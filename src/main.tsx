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
import MyHello from "./MyHello";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);
  root.render(<MyHello myName="鈴木" />);
} else {
  console.log("Root container not found");
}

reportWebVitals();
