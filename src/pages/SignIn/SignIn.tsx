import React from 'react';
import {} from 'react-native';

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

function SignIn() {
  const navigation: any = useNavigation();

  return (
    <Background>
      <Container>
        <Logo source={require('../../assets/login2.png')} />

        <AreaInput>
          <Input placeholder="E-mail" />
        </AreaInput>

        <AreaInput>
          <Input placeholder="Password" />
        </AreaInput>

        <SubmitButton activeOpacity={0.8}>
          <SubmitText>Access</SubmitText>
        </SubmitButton>

        <Link onPress={() => navigation.navigate('SignUp')}>
          <LinkText>Create an Account</LinkText>
        </Link>
      </Container>
    </Background>
  );
}

export default SignIn;
