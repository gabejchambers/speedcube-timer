import React, {Component} from "react";
import "../../App.css";

class Times extends Component {
    state = {
        scrambleText: "scramble"
    }

    onMouseover(e) {
        this.setState({scrambleText: this.props.scramble})
    }

    onMouseout(e) {
        this.setState({scrambleText: 'scramble'})
    }

    render() {

        return (
            <div>
            <span>
                {this.props.time}
            </span>
                <span> </span>
                <span
                    onMouseEnter={this.onMouseover.bind(this)}
                    onMouseLeave={this.onMouseout.bind(this)}>
                {this.state.scrambleText}
            </span>
            </div>

        );
    }
}

export default Times;