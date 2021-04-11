import React, {Component} from "react";
import "../../App.css";
import Timer from "./timer";
import TContainer from "./times_container";


class Index extends Component {

    render() {
        return (
            <div>
                    <Timer/>
                {/*<div className="Times">*/}
                {/*    <TContainer/>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default Index;