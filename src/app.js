import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBHrNEAstpmmh5pD-rgNofAlVSS66Nb3d4',
      authDomain: 'auth-703eb.firebaseapp.com',
      databaseURL: 'https://auth-703eb.firebaseio.com',
      projectId: 'auth-703eb',
      storageBucket: 'auth-703eb.appspot.com',
      messagingSenderId: '99633716347'
    });
  }
  render() {
    return (
        <View>
          <Header headerText="Authentication" />
          <LoginForm />
        </View>
    );
  }
}

export default App;
