import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "charvi",
    };
    console.log("LifecycleB constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycle B get derviedstatefromprops");
    return null;
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  render() {
    console.log("lifecycleB render");
    return <div>LifeCycleb</div>;
  }
}

export default LifeCycleB;
