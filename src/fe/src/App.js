import React, {Component} from "react";
import Timer from "./components/times/timer";
import Scramble from "./components/scramble";
import TContainer from "./components/times/times_container";
import Times from "./components/times/index";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Scramble/>
                <Times/>
            </div>
        );
    }
}

export default App;