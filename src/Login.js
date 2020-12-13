import React, { Component } from "react";
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: "",
          password: ""
        };
    };
      
    handleChangeUsername = (event) => {
        this.setState({ username: event.target.value });
    };
      
    handleChangePassword = (event) => {
        this.setState({ password: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        alert('Login submitted: ' + this.state.username + ', ' + this.state.password);
    }

    render() {
        return (
            <div className="login-form">
            <form onSubmit={this.handleSubmit} className="form">
                <h1 className='title'>Login</h1>
                    <div className='form-group'>
                        <input
                            name="email"
                            type="text"
                            placeholder="your-email@email.com"
                            onChange={this.handleChangeUsername}
                            value={this.state.username}
                            className='form-control' />
                    </div>
                    <div className='form-group'>
                        <input
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            onChange={this.handleChangePassword}
                            value={this.state.password}
                            className='form-control'
                        />
                    </div>

                <button type="submit" className="btn btn-primary" >
                    Login
                </button>
            </form>
            </div>
        );
    }
}

export default Login;