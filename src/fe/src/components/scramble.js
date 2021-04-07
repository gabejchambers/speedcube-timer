import React, { Component } from "react";
import "../App.css";
let Scrambo = require('scrambo');

let scramble = new Scrambo();

class Scramble extends Component {
    state = {
        scrambleString: false,
        newScramble: false
    };

    componentDidMount() {
        this.newScramble();
        document.addEventListener('keydown',this.handleKeyPress);
    }

    handleKeyPress = (event) => {
        if(event.key === ' ') {
            if (this.state.newScramble)
                this.newScramble();
            this.setState({newScramble: !this.state.newScramble});
        }
    }

    newScramble() {
        this.setState({scrambleString: scramble.get(1)});
    }

    render() {
        return (
            <div className="Scramble">
            { this.state.scrambleString &&
                <div className={"Scramble-text"}>{this.state.scrambleString}</div>
            }
            </div>
        );
    }
}

export default Scramble;