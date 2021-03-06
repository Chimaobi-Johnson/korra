import axios from 'axios';
import { APP_URL } from '../../config';
import { SIGN_UP_ERROR, SIGN_UP_SUCCESS, LOGIN_ERROR, LOGIN_SUCCESS, STORE_TOKEN, LOG_OUT, LOG_OUT_FAIL, LOG_OUT_SUCCESS } from './actionTypes';

export const signUpSuccess = (response) => {
    console.log(response);
    return {
        type: SIGN_UP_SUCCESS,
        payload: response
    }
} 

export const signUpError = (err) => {
    return {
        type: SIGN_UP_ERROR,
        payload: err
    }
} 

export const signUp = (formData) => {
    return dispatch => {
        axios.post(`${APP_URL}/auth/register`, formData)
        .then(response => {
            console.log(response);
            dispatch(signUpSuccess(response))
        })
        .catch(err => {
            console.log(err)
            dispatch(signUpError(err))
        })
    }   
} 

export const loginSuccess = (response) => {
    return {
        type: LOGIN_SUCCESS,
        payload: response
    }
} 

export const loginError = (err) => {
    return {
        type: LOGIN_ERROR,
        payload: err
    }
} 

export const login = (formData) => {
    return dispatch => {
        axios.post(`${APP_URL}/auth/login`, formData)
        .then(response => {
            console.log(response)
            dispatch(loginSuccess(response))
        })
        .catch(err => {
            console.log(err)
            dispatch(loginError(err))
        })
    }   
} 

export const storeToken = (token) => {
    return {
        type: STORE_TOKEN,
        payload: token
    }
} 

export const logoutSuccess = () => {
    return {
        type: LOG_OUT_SUCCESS
    }
}

export const logoutFail = () => {
    return {
        type: LOG_OUT_FAIL
    }
}

export const logout = () => dispatch => {
    dispatch({ type: LOG_OUT })
    axios.get(`${APP_URL}/auth/logout`)
        .then(response => {
            console.log(response)
            dispatch(logoutSuccess(response))
        })
        .catch(err => {
            console.log(err)
            dispatch(logoutFail(err))
        })
    
} 