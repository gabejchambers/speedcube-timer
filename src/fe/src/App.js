import React, { Component } from "react";
import Timer from "./components/timer";
import Scramble from "./components/scramble";

class App extends Component {
  render() {
    return (
        <div className="App">
          <div className="Timers">
            <Timer/>
          </div>
            <Scramble/>
        </div>
    );
  }
}

export default App;