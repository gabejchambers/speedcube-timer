import React, { Component } from "react";
import "../App.css";

class Timer extends Component {
    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0
    };

    componentDidMount(){
        document.addEventListener('keydown',this.handleKeyPress);
    }

    startTimer = () => {
        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: Date.now() - this.state.timerTime
        });
        this.timer = setInterval(() => {
            this.setState({
                timerTime: Date.now() - this.state.timerStart
            });
        }, 10);
    };

    stopTimer = () => {
        this.setState({ timerOn: false });
        clearInterval(this.timer);
    };

    resetTimer = () => {
        this.setState({
            timerStart: 0,
            timerTime: 0
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
                <div className="Timer-header">Timer</div>
                <div className="Timer-display">
                    {seconds-0}.{centiseconds}
                </div>
                {this.state.timerOn === false && this.state.timerTime === 0 && (
                    <div>SPACE to START</div>
                )}
                {this.state.timerOn === true && (
                    <div>SPACE to STOP</div>
                )}
                {this.state.timerOn === false && this.state.timerTime > 0 && (
                    <div>SPACE to RESTART</div>
                )}
            </div>
        );
    }
}

export default Timer;