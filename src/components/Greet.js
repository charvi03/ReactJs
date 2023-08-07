import React from "react";

//it is stateless functional compoent

// function Greet() {
//   return <h1>Hello ck</h1>;
// }
// const Greet = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>
//         Hello {props.name} a.k.a {props.heroName}
//       </h1>
//       {props.children}
//     </div>
//   );
// };

//destructuring
//1
// const Greet = ({ name, heroName }) => {
//   return (
//     <div>
//       <h1>
//         Hello {name} a.k.a {heroName}
//       </h1>
//     </div>
//   );
// };

//2
const Greet = (props) => {
  const { name, heroName } = props;
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
    </div>
  );
};
export default Greet;
