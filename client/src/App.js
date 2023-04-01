import React, { Component } from "react";
import "./index.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <div>
                <p className="text-3xl font-bold underline bg-green-500">Madarchod</p>
                <p>{this.state.apiResponse}</p>
            </div>
        );
    }
}

export default App;
