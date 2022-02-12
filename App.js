import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import LoadingScreen from './screens/LoadingScreen';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import firebase from 'firebase';
import firebaseConfig from './config';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app()
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  Login: Login,
  Dashboard: Dashboard,
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default class App extends React.Component {
  render(){
    return(
      <AppNavigator />
    );
  }
}