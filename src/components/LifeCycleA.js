import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "charvi",
    };
    console.log("LifecycleA constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycle A get derviedstatefromprops");
    return null;
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  shouldComponentUpdate() {
    console.log(" life cycle A should update");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("life cycle A getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log(" life cycle bcomponentDidUpdate");
  }
  changeState = () => {
    this.setState({
      name: "coding.",
    });
  };
  render() {
    console.log("lifecycleA render");
    return (
      <div>
        LifeCycleA
        <button onClick={this.changeState}>CHANGE STATE</button>
        <LifeCycleB></LifeCycleB>
      </div>
    );
  }
}

export default LifeCycleA;
