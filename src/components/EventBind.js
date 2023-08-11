import React, { Component } from "react";

//binding event handler
class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
  }
  //this.clickHandler = this.clickHandler.bind(this);
  clickHnadler() {
    this.setState({
      message: "Goodbye",
    });
    console.log(this);
  }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHnadler.bind(this)}>I am button</button> */}
        <button onClick={() => this.clickHnadler()}>I am button</button>
        {/* <button onClick={this.clickHnadler}>I am button</button> */}
      </div>
    );
  }
}

export default EventBind;
