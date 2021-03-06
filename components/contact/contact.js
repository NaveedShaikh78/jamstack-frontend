import React from "react"
import submitUserData from "../../lib/submitform";
//import { getDatabase } from '../../lib/database'
export default class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: ''
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        submitUserData(this.state).then(res => {
            alert(`Your request has been sent successfully, we will inform you shortly`);
        });
        e.preventDefault();
    }
    handleChange = (event) => {
    }
    handleNameChange = e => {
        this.setState({ name: e.target.value });
    }
    handleEmailChange = e => {
        this.setState({ email: e.target.value });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                {/*  <form action="https://formspree.io/f/xrgjpgbe" method="POST" > */}
                <div>
                    <label>  Name: </label>
                    <input type="text" name="username" value={this.state.name} onChange={this.handleNameChange} />
                </div> <p></p>
                <div>
                    <label>  e-mail: </label>
                    <input type="text" name="useremail" value={this.state.email} onChange={this.handleEmailChange} />
                </div>
                <p>
                    <input type="submit" value="Submit" />
                </p>
            </form >
        );
    }
}