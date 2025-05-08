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
//import StyledPanel from "./StyledPanel";
import TitledPanel from "./TitledPanel";
import reportWebVitals from "./reportWebVitals";

//const container = document.getElementById("root");

const container: HTMLElement | null = document.getElementById("root");

if (container) {
  const root = createRoot(container);
  //root.render(
  // <StyledPanel>
  //   <p style={{ color: "black" }}>メンバー募集</p>
  //   <p style={{ color: "black" }}>ようこそ、WINGSプロジェクトへ</p>
  // </StyledPanel>
  //);

  // root.render(
  //   <TitledPanel
  //     title={<p style={{ color: "black" }}>メンバー募集</p>}
  //     body={<p style={{ color: "black" }}>ようこそ、WINGSプロジェクトへ</p>}
  //   />
  // );

  // const title = <p style={{ color: "black" }}>メンバー募集</p>;
  // const body = <p style={{ color: "black" }}>ようこそ、WINGSプロジェクトへ</p>;
  // root.render(<TitledPanel title={title} body={body}></TitledPanel>);

  root.render(
    <TitledPanel>
      <p key="title">メンバー募集</p>
      <p key="body">ようこそ、WINGSプロジェクトへ</p>
    </TitledPanel>
  );
} else {
  console.log("Root container not found");
}

reportWebVitals();
