import * as actionTypes from "../actions/actionTypes";
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    token: null,
    status: null,
    expiresIn: null,
    signUpStatus: null,
    userId: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.LOGIN_SUCCESS:

            AsyncStorage.setItem('fall', action.payload.data.token).then(result => {
            console.log('token stored successfully')
            }).catch(err => {
                console.log(err)
            })
            return {
                ...state,
                token: action.payload.data.token,
                status: action.payload.status,
                expiresIn: action.payload.data.expiresIn,
                signUpStatus: null
            }
        case actionTypes.LOGIN_ERROR:
            return {
                ...state,
                token: null,
                status: action.payload.status,
                expiresIn: null,
                signUpStatus: null
            }
        case actionTypes.STORE_TOKEN:
            return {
                ...state,
                token: action.payload
            }
        case actionTypes.SIGN_UP_SUCCESS:
            return {
                ...state,
                status: null,
                signUpStatus: action.payload.status,
                userId: action.payload.data.user._id
        }
        case actionTypes.SIGN_UP_ERROR:
            return {
                ...state,
                status: null,
                signUpStatus: action.payload.status
        }
        case actionTypes.LOG_OUT:
            AsyncStorage.removeItem('fall').then(result => {
                console.log('token removed successfully')
            }).catch(err => {
                console.log(err)
            })
            return {
                ...state,
                status: null,
                signUpStatus: null,
                token: null,
                userId: null
        }
        default:
         return state
    }
}
