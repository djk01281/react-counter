import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

    this.Increment = () => {
      this.setState({ counter: this.state.counter + 1 });
    };

    this.Decrement = () => {
      this.setState({ counter: this.state.counter - 1 });
    };
  }

  componentDidMount() {}
  componentDidUpdate(prevProps, prevState, snapshot) {}
  render() {
    return (
      <div>
        <button onClick={this.Increment}>+</button>
        <button onClick={this.Decrement}>-</button>
        <div>Count: {this.state.counter}</div>
      </div>
    );
  }
}
