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
import AppClass from "./AppClass";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <AppClass />
    </React.StrictMode>
  );
} else {
  console.log("Root container not found");
}

reportWebVitals();

// if (container) {
//   const root = createRoot(container);

//   setInterval(() => {
//     root.render(<p>現在時刻: {new Date().toLocaleString()}</p>);
//   }, 1000);

//   reportWebVitals();
// }
