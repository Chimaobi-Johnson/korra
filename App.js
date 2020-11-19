import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import MainNavigator from './navigation/UserNavigation';
import AuthScreen from './screens/auth/Login';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import authReducer from './store/reducer/authReducer';
import { getToken } from './utils/utils';
import * as actions from './store/actions';
import { enableScreens } from 'react-native-screens';

import Main from './Main';

enableScreens()

const rootReducer = combineReducers({
  auth: authReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

