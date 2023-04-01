import React, { Component } from "react";
import "./index.css";
import "./app.css"

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
                <div id="header-div">
                    <img src="./clogo.png"></img>
                    <h2 id="department">Department</h2>
                    <div id="username-logout">
                        <h3 id="username">mohit.patel</h3>
                        <h3 id="logout">Logout</h3>
                    </div>
                </div>
                <div>
                    <div id="sem-form-select-container">
                        <h4 id="sem-select">Sem</h4>
                        <h4 id="form-select">Form</h4>
                    </div>
                </div>
                <div className="response-block">
                    <div className="responses">
                        <div className="responses-data"><b>Responses</b></div>
                        <div className="sem-data">Sem</div>
                        <div className="en-no-data">Enrollment No</div>
                        <div className="main-field">Main Feild</div>

                    </div>
                    <div className="pending-form">
                        <div className="item1">Pending Responses</div>
                        <div className="item6">Sem</div>
                        <div className="item4">Roll No</div>
                    </div>
                </div>
                <div>{this.state.apiResponse}</div>
            </div>
        );
    }
}

export default App;
