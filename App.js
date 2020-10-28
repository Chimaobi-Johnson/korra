import React from 'react';
import { View } from 'react-native';
import MainNavigator from './navigation/UserNavigation';
import AuthScreen from './screens/auth/Login';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import authReducer from './store/reducer/authReducer';

import FooterMenu from './components/Footer/Footer';

const rootReducer = combineReducers({
  auth: authReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));


export default function App() {
  const token = false;
  return (
    <Provider store={store}>
       {token ? <MainNavigator /> : <AuthScreen />}
    </Provider>
  );
}

