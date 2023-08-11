import React, { Component } from "react";

export class ClickClass extends Component {
  clickHnadler() {
    console.log("clicked the button");
  }
  render() {
    return (
      <div>
        ClickClass
        <button onClick={this.clickHnadler}>Click me</button>
      </div>
    );
  }
}

export default ClickClass;
