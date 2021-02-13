import React, { useState, useEffect, createContext } from 'react';
import MainNavigator from './navigation/UserNavigation';
import AuthScreen from './screens/auth/Login';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { getToken } from './utils/utils';
import * as authActions from './store/actions';
import { APP_URL } from './config';
import { MainContext } from './mainContext';

const Main = props => {

const [userData, setUserData] = useState(null);
const dispatch = useDispatch();

const fetchUser = authToken => {
    axios.get(`${APP_URL}/user`,
    {
        headers: {
            "content-type": "application/json",
            Authorization: `${authToken}`,
        },
    }).then(result => {
        setUserData(result.data.user);
    }).catch(err => {
        console.log(err)
    })
}



useEffect(() => {
  getToken()
  .then(token => {
    dispatch(authActions.storeToken(token))
    fetchUser(token)
  })
  .catch(err => console.log(err));
  // setToken(true)
}, [])

const authToken = useSelector(state => state.auth.token);


  return (
    <>
      {authToken ? 
      <MainContext.Provider value={userData}>
        <MainNavigator />
      </MainContext.Provider>
       : <AuthScreen />}
    </>
  );
}

export default Main
