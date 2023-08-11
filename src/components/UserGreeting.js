import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    //if-else condition
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome User</div>;
    // } else {
    //   return <div>Welcome guest</div>;
    // }
    //2nd approach --element variables
    // let msg;
    // if (this.state.isLoggedIn) {
    //   msg = <div>Welcome user</div>;
    // } else {
    //   msg = <div>Welcome guest</div>;
    // }
    // return <div>{msg}</div>;
    //3rd approach --ternary
    // return this.state.isLoggedIn ? (
    //   <div>Welcome user</div>
    // ) : (
    //   <div>Welcome guest</div>
    // );
    //4th approach -- short-circuit approach
    return this.state.isLoggedIn && <div>Welcome user</div>;
  }
}

export default UserGreeting;
