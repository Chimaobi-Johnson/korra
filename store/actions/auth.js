import axios from 'axios';
import { APP_URL } from '../../config';
import { SIGN_UP_ERROR, SIGN_UP_SUCCESS, LOGIN_ERROR, LOGIN_SUCCESS } from './actionTypes';

export const signUpSuccess = (response) => {
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
            dispatch(signUpSuccess(response.data))
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
            dispatch(loginSuccess(response.data))
        })
        .catch(err => {
            console.log(err)
            dispatch(loginError(err))
        })
    }   
} 