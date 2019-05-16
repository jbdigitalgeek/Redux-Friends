import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoginForm } from './components'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FriendList from './components/FriendList';
import PrivateRoute from './PrivateRoute';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/"
          render={props => (<LoginForm {...props} handleLogin={this.props.handleLogin} />
          )}
        />
        <PrivateRoute exact path="/protected" component={FriendList} />
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
