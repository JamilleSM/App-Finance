import React, {useContext} from 'react';

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
  const {user} = useContext(AuthContext);

  function handleSignUp() {
    console.log(user.nome);
  }

  return (
    <Background>
      <Container>
        <AreaInput>
          <Input placeholder="Name" />
        </AreaInput>

        <AreaInput>
          <Input placeholder="E-mail" />
        </AreaInput>

        <AreaInput>
          <Input placeholder="Password" />
        </AreaInput>

        <SubmitButton onPress={handleSignUp}>
          <SubmitText>Register</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  );
}

export default SignUp;
