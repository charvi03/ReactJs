import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "charvi",
    };
    console.log("Lifecycle B constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycle B get derviedstatefromprops");
    return null;
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  shouldComponentUpdate() {
    console.log(" life cycle B should update");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("life cycle B getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log(" life cycle B bcomponentDidUpdate");
  }
  render() {
    console.log("lifecycle B render");
    return <div>LifeCycle B</div>;
  }
}

export default LifeCycleB;
