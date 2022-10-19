import { Component } from "react";

import EventBus from "../../../events/_event-bus/_EventBus";
import EventRegistry from "../../../events/event-registry/EventRegistry";

import LoadingImg from "../../../images/Loading.gif";

// Gets applied to all elements in the application
import './styles/styles.css';


// There is a way to keep styles linked to the component using a library:
// https://styled-components.com/

class LoadingAnimation extends Component {
    
    constructor() {
        super();
        this.state = {
            displayClassName: "show"
        };

    }

    componentDidMount() {
        EventBus.subscribe(EventRegistry.finishedLoading, this.hideLoading);
        EventBus.subscribe(EventRegistry.isLoading, this.showLoading);
    }

    showLoading = () => {
        console.log("ShowLoading()");

        this.setState({displayClassName:"show"});
    }

    hideLoading = () => {
        console.log("hideLoading()");
        setTimeout(
            () => {
                this.setState({displayClassName:"hide"});
            },300);   
    }

    render() {

        return (
            <div className={`loading-wrapper ${this.state.displayClassName}`} >
                <img src={LoadingImg} alt="loading"/>
            </div>
        );
    }
}

export default LoadingAnimation;