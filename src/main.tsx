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
//import TitledPanel from "./TitledPanel";
import reportWebVitals from "./reportWebVitals";
//import book from "./book";
//import ListTemplate from "./ListTemplate";
import MyHello from "./MyHello";

//const container = document.getElementById("root");

// const books = [
//   {
//     isbn: "978-4-7981-5112-0",
//     title: "独習JavaScript 新版",
//     price: 3080,
//     summary: "JavaScriptの基礎から応用まで解説した入門書。",
//   },
//   {
//     isbn: "978-4-7981-5382-7",
//     title: "React開発入門",
//     price: 3300,
//     summary: "Reactの基本と実践的なコンポーネント設計を学べる。",
//   },
// ];

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

  // root.render(
  //   <TitledPanel>
  //     <p key="title">メンバー募集</p>
  //     <p key="body">ようこそ、WINGSプロジェクトへ</p>
  //   </TitledPanel>
  // );

  // root.render(
  //   <ListTemplate src={books}>
  //     {(item) => (
  //       <>
  //         <dt>
  //           <a
  //             href={`https://wings.msn.to/books/${item.isbn}/${item.isbn}.jpg`}
  //           >
  //             {item.title}({item.price}円)
  //           </a>
  //         </dt>
  //         <dd>{item.summary}</dd>
  //       </>
  //     )}
  //   </ListTemplate>
  // );

  root.render(<MyHello myName="Taro" />);
} else {
  console.log("Root container not found");
}

reportWebVitals();
