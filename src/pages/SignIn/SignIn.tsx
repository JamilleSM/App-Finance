import React, {useState, useContext} from 'react';
import {ActivityIndicator, Alert} from 'react-native';

import {
  Background,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText,
} from './style';

import {useNavigation} from '@react-navigation/native';

import {AuthContext} from '../../contexts/Auth';

function SignIn() {
  const navigation: any = useNavigation();
  const {signIn, loadingAuth} = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    signIn(email, password);
  }

  return (
    <Background>
      <Container>
        <Logo source={require('../../assets/login2.png')} />

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

        <SubmitButton activeOpacity={0.8} onPress={handleLogin}>
          {loadingAuth ? (
            <ActivityIndicator size={20} color="#FFF" />
          ) : (
            <SubmitText>Access</SubmitText>
          )}
        </SubmitButton>

        <Link onPress={() => navigation.navigate('SignUp')}>
          <LinkText>Create an Account</LinkText>
        </Link>
      </Container>
    </Background>
  );
}

export default SignIn;
