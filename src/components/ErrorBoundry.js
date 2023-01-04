import React, { Component } from "react";

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);   //this super is here to access the prop prameter assigning in above constructor
        this.state ={
            hasError: false
        }
    }
    componentDidCatch(error, info) {
        this.state({hasError:true})
    }



//wrapping around the cardlist component around the error boundry component so if the cardlist component fails we could catch it in the error boundy component
    render() {
        if (this.state.hasError) {
            return <h1>Ooops. That is not good</h1>
        }
        return this.props.childern
    }
}

export default ErrorBoundry;