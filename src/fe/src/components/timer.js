import React, { Component } from "react";
import "../App.css";

class Timer extends Component {
    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0,
        flavor: "START"
    };

    componentDidMount(){
        document.addEventListener('keydown',this.handleKeyPress);
    }

    startTimer = () => {
        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: Date.now() - this.state.timerTime,
            flavor: "STOP"
        });
        this.timer = setInterval(() => {
            this.setState({
                timerTime: Date.now() - this.state.timerStart
            });
        }, 10);
    };

    stopTimer = () => {
        this.setState({ timerOn: false });
        this.setState({ flavor: "RESTART" });
        clearInterval(this.timer);
    };

    resetTimer = () => {
        this.setState({
            timerStart: 0,
            timerTime: 0,
        });
        this.startTimer();
    };

    handleKeyPress = (event) => {
        console.log(event.key);
        if(event.key === ' ') {
            if (this.state.timerOn === true)
                this.stopTimer();
            else if (this.state.timerTime === 0 )
                this.startTimer();
            else if (this.state.timerTime > 0)
                this.resetTimer();
        }
    }

    render() {
        const { timerTime } = this.state;
        let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
        let seconds = ("0" + Math.floor(timerTime / 1000)).slice(-2);
        return (
            <div className="Timer">
                <div className="Timer-display">{Number(seconds)}.{centiseconds}</div>
                <div className={"Timer-text"}>SPACE to {this.state.flavor}</div>
            </div>
        );
    }
}

export default Timer;