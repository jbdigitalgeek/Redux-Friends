import React, { Component } from 'react';

export default class LoginForm extends Component {
    state = {
        username: '',
        password: ''
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleLogin(this.state);
        this.setState({ username: '', password: '' });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    placeholder="Username"
                    />
                <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    placeholder="Password"
                />
                <button type="submit">Login</button>
            
            </form>
        )
    }
}
