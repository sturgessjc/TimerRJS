import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Clock extends React.Component {
  state = {
    count: 1
  };

  incrementCounter() {
    const { count } = this.state;
    this.setState({ count: count + 1 });
    console.log("timer");
  }

  componentDidMount() {
    const { clock } = this.state;

    setInterval(() => {
      this.incrementCounter();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.incrementCounter);
  }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

export class App extends React.Component {
  state = {
    clock: false
  };

  startTimer = () => {
    const { clock } = this.state;
    console.log(clock);
    this.setState({ clock: true });
  };

  stopTimer = () => {
    const { clock } = this.state;
    console.log(clock);
    this.setState({ clock: false });
  };
  // componentWillUnmount() {
  //   clearInterval(this.incrementCounter());
  // }
  render() {
    const { count } = this.state;

    return (
      <div>
        <button onClick={this.startTimer}>Start</button>
        {this.state.clock == true && <Clock />}
        <p>{this.state.count}</p>
        <button onClick={this.stopTimer}>Stop</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
