import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoginForm } from './components'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/"
          render={props => (<LoginForm {...props} handleLogin={this.props.handleLogin} />
          )}
          />
     </Router>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friends,
  isLoading: state.isLoading,
  token: state.token,
  error: state.error
});

export default connect(
  mapStateToProps,
  { handleLogin }
)(App);
