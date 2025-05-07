type MyHelloProps = {
  myName: string;
};

// export default function MyHello(props: MyHelloProps) {
//   return <div>Hello, {props.myName}</div>;
// }

export default function MyHello({ myName }: MyHelloProps) {
  return <div>Hello, {myName}</div>;
}
