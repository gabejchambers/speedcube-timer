import React, { Component } from "react";
import Times from "./times"
import "../../App.css";

class Container extends Component {
    render() {
        return (
            <div><div className={"sub-header"}> Times </div>
            <div>
                {this.props.times.map( (time_in) => (
                    <Times time={time_in.time} scramble={time_in.scramble}/>
                ))}
            </div>
            </div>
        );
    }
}

export default Container;