import axios from 'axios';
export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export const handleLogin = state => dispatch => {
    dispatch({ type: LOGIN_START })
    const baseUrl = 'http://localhost:5000'
    axios
        .post(`$baseUrl}/api/login`, state)
        .then(res => dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload }))
        .catch(err => dispatch({ type: LOGIN_ERROR, payload: err }))
};