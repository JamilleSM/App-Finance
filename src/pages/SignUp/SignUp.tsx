import React, {useContext, useState} from 'react';
import {ActivityIndicator} from 'react-native';

import {
  Background,
  Container,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
} from '../SignIn/style';

import {AuthContext} from '../../contexts/Auth';

function SignUp() {
  const {signUp, loadingAuth} = useContext(AuthContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignUp() {
    if (name === '' || email === '' || password === '') return;

    signUp(name, email, password);
  }

  return (
    <Background>
      <Container>
        <AreaInput>
          <Input
            placeholder="Name"
            value={name}
            onChangeText={text => setName(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="E-mail"
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
          />
        </AreaInput>

        <SubmitButton onPress={handleSignUp}>
          {loadingAuth ? (
            <ActivityIndicator size={20} color="#FFF" />
          ) : (
            <SubmitText>Register</SubmitText>
          )}
        </SubmitButton>
      </Container>
    </Background>
  );
}

export default SignUp;
