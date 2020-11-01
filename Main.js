import React, { useEffect } from 'react';
import MainNavigator from './navigation/UserNavigation';
import AuthScreen from './screens/auth/Login';
import { useDispatch, useSelector } from 'react-redux';

import { getToken } from './utils/utils';
import * as authActions from './store/actions';


const Main = props => {

const dispatch = useDispatch()

useEffect(() => {
  getToken()
  .then(token => {
    console.log(token)
    dispatch(authActions.storeToken(token))
  })
  .catch(err => console.log(err));
  // setToken(true)
}, [])

const authToken = useSelector(state => state.auth.token);
console.log(authToken)

// useEffect(() => {
  
// }, [authState])


  return (
    <>
      {authToken ? <MainNavigator /> : <AuthScreen />}
    </>
  );
}

export default Main
