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

    render() {
        return (
            <form className='form'>
                <h1 className='title'>Login</h1>
                <div className='form-items'>
                    <div className='form-item'>
                        <input
                            name="email"
                            type="text"
                            placeholder="your-email@email.com"
                            onChange={this.handleChangeUsername}
                            value={this.state.username}
                            className='input' />
                    </div>
                    <div className='form-item'>
                        <input
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            onChange={this.handleChangePassword}
                            value={this.state.password}
                            className='input'
                        />
                    </div>
                </div>

                <button type="submit" >
                    Login
                </button>
            </form>
        );
    }
}

export default Login;