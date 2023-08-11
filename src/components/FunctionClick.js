import React from "react";

function FunctionClick() {
  function clickHandler() {
    console.log("Button clicked");
  }
  return (
    <div>
      {/* we want a handler ,not a function call that is why we did not use ()with function name  */}
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default FunctionClick;
