import React from "react";
const Hello = () => {
  //     //USING JSX
  //   return (
  //     <div>
  //       <h1>hello</h1>
  //     </div>
  //   );

  //without jsx
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "hello world")
  );
};
export default Hello;
