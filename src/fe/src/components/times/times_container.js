import React, { Component } from "react";
import Times from "./times"
import "../../App.css";

class Container extends Component {
    render() {
        return (
            <div>Times
            <div>
                {this.props.times.map( (time) => (
                    <div>{time.time}</div>
                ))}
            </div>
            </div>
        );
    }
}

export default Container;