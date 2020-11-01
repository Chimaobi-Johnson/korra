import * as actionTypes from "../actions/actionTypes";
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    token: null,
    status: null,
    expiresIn: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.LOGIN_SUCCESS:
            console.log(action.payload)
            AsyncStorage.setItem('fall', action.payload.data.token).then(result => {
                console.log('token stored successfully')
            }).catch(err => {
                console.log(err)
            })
            return {
                ...state,
                token: action.payload.data.token,
                status: action.payload.status,
                expiresIn: action.payload.data.expiresIn
            }
        case actionTypes.STORE_TOKEN:
            return {
                ...state,
                token: action.payload
            }
        default:
         return state
    }
}
