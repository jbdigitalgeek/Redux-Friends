import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import FriendList from './components/FriendList'

const PrivateRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={() => {
        if (localStorage.getItem('token')) {
            <Component />;
        } else {
            <Redirect to='/' />
        }
    }} />;
};   

export default PrivateRoute;