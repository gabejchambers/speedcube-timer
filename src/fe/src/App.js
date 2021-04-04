import React, { Component } from "react";

import Timer from "./components/timer";

class App extends Component {
  render() {
    return (
        <div className="App">
          <div className="Timers">
            <Timer/>
          </div>
        </div>
    );
  }
}

export default App;