import React, { useState, useEffect } from 'react';
import MainNavigator from './navigation/UserNavigation';
import AuthScreen from './screens/auth/Login';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { getToken } from './utils/utils';
import * as authActions from './store/actions';
import { APP_URL } from './config';


const Main = props => {

const dispatch = useDispatch()

// useEffect(() => {
//   dispatch(authActions.logout());
// }, [])

const [userData, setUserData] = useState(null);

const fetchUser = authToken => {
    axios.get(`${APP_URL}/user`,
    {
        headers: {
            "content-type": "application/json",
            Authorization: `${authToken}`,
        },
    }).then(result => {
        console.log(result)
        storeUserData(result.data.user);
    }).catch(err => {
        console.log(err)
    })
}

// useEffect(() => {
//     fetchUser()
// }, [])

useEffect(() => {
  getToken()
  .then(token => {
    // dispatch(authActions.storeToken(token))
    fetchUser(token)
  })
  .catch(err => console.log(err));
  // setToken(true)
}, [])

const authToken = useSelector(state => state.auth.token);
// const authToken = true

  return (
    <>
      {authToken ? <MainNavigator /> : <AuthScreen />}
    </>
  );
}

export default Main
