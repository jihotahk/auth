import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '' };

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '' });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch((err) => {
            this.setState({ error: err.message });
          });
      });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            value={this.state.email}
            placeholder="user@gmail.com"
            onChangeText={email => this.setState({ email })}
            label="E-mail"
          />
        </CardSection>

        <CardSection>
          <Input
            placeholder="password"
            value={this.state.password}
            label="Password"
            onChangeText={password => this.setState({ password })}
            secureTextEntry
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          <Button
            onButtonPress={this.onButtonPress.bind(this)}
          >
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 15,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
