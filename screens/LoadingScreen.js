import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import firebase from 'firebase';

import Login from './Login';
import Dashboard from './Dashboard';

export default class LoadingScreen extends React.Component {
    componentDidMount() {
        this.checkIfLoggedIn()
    }

    checkIfLoggedIn = () => {
        firebase.auth().onAuthStateChanged((user)=>{
            if (user) {
                this.props.navigation.navigate('Dashboard')
            } else {
                this.props.navigation.navigate('Login')
            }
        })
    }
    render() {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size='large' />
            </View>
        );
    }
}