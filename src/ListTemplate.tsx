// import React from "react";

// type Props = {
//   src: string;
//   children: string;
// };

// export default function ListTemplate({ src }: Props) {
//   return (
//     <dl>
//       {src.map((elm) => (
//         <React.Fragment key={elm.isbn}>{children}</React.Fragment>
//       ))}
//     </dl>
//   );
// }

// import React from "react"
// types Props={
//     src:string;
//     Children:string;
// }

// export default function ListTemplate({src,children}){
//     return(
//         <dl>
//             {src.map(elm=>(
//                 <React.Fragment key={elem.isbn}>
//                     {children(elem)}
//                 </React.Fragment>
//             ))}
//         </dl>
//     )
// }

import React from "react";

type Book = {
  isbn: string;
  title: string;
  price: number;
  summary: string;
};

type Props = {
  src: Book[];
  children: (item: Book) => React.ReactNode;
};

export default function ListTemplate({ src, children }: Props) {
  return (
    <dl>
      {src.map((item) => (
        <React.Fragment key={item.isbn}>{children(item)}</React.Fragment>
      ))}
    </dl>
  );
}
