// type MyHelloProps = {
//   myName: string;
// };

// // export default function MyHello(props: MyHelloProps) {
// //   return <div>Hello, {props.myName}</div>;
// // }

// export default function MyHello({ myName }: MyHelloProps) {
//   return <div>Hello, {myName}</div>;
// }

//間違った例

// import PropTypes fromn "prop-types";

// function MyHello(props){
//   return(
//     <div>Hello,{props.myName}</div>
//   );
// }

// MyHello.propTypes={
//   myName:PropTypes.string.isRequired
// };

// export default MyHello;

type Props = {
  myName: string;
};

export default function MyHello({ myName }: Props) {
  return <div>Hello,{myName}</div>;
}
