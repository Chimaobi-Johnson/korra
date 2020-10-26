import React from 'react';
import { View } from 'react-native';
import MainNavigator from './navigation/UserNavigation';
import AuthScreen from './screens/auth/Login';
import FooterMenu from './components/Footer/Footer';

export default function App() {
  const token = false;
  return (
       token ? <MainNavigator /> : <AuthScreen />
  );
}

