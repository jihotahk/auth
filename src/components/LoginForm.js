import React, { Component } from 'react';
import { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
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

        <CardSection>
          <Button>Log In</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
