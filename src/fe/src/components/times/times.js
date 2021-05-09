import React, {Component} from "react";
import "../../App.css";
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

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
                <Tippy className={'scramble-text-single'} content={this.props.scramble}>
                    <span className ='hover-scramble'>scramble</span>
                </Tippy>
                {/*    <span className={'scramble-text-single'}*/}
                {/*        onMouseEnter={this.onMouseover.bind(this)}*/}
                {/*        onMouseLeave={this.onMouseout.bind(this)}>*/}
                {/*        /!*<Tippy content='Basic Tooltip'>*!/*/}
                {/*        /!*    scramble*!/*/}
                {/*        /!*</Tippy>*!/*/}
                {/*    {this.state.scrambleText}*/}
                {/*</span>*/}
            </div>

        );
    }
}

export default Times;