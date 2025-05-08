// type Props = {
//   title: React.ReactNode;
//   body: React.ReactNode;
// };

// export default function TitledPanel({ title, body }: Props) {
//   return (
//     <div
//       style={{
//         margin: 50,
//         padding: 5,
//         border: "1px solid #000",
//         width: "fit-content",
//         boxShadow: "10px 5px 5px #999",
//         backgroundColor: "#fff",
//       }}
//     >
//       {title}

//       <hr />

//       {body}
//     </div>
//   );
// }

//import React, { ReactElement } from "react";

import type { ReactElement } from "react";
import React from "react";

type Props = {
  children: ReactElement[] | ReactElement;
};

export default function TitledPanel({ children }: Props) {
  // children を配列として扱う
  const childArray = React.Children.toArray(children) as ReactElement[];

  const title = childArray.find((elm) => elm.key === "title");
  const body = childArray.find((elm) => elm.key === "body");

  return (
    <div
      style={{
        margin: 50,
        padding: 5,
        border: "1px solid #000",
        width: "fit-content",
        boxShadow: "10px 5px 5px #999",
        backgroundColor: "#fff",
      }}
    >
      {title}
      <hr />
      {body}
    </div>
  );
}
