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
            <span className={'time-text'}>
                {this.props.time}
            </span>
                <span> </span>
                <span className={'scramble-text-single'}
                    onMouseEnter={this.onMouseover.bind(this)}
                    onMouseLeave={this.onMouseout.bind(this)}>
                {this.state.scrambleText}
            </span>
            </div>

        );
    }
}

export default Times;