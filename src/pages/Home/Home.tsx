import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';

import {AuthContext} from '../../contexts/Auth';

import Header from '../../components/header/Header';
import {Background} from './style';

function Home() {
  //  const {signOut, user} = useContext(AuthContext);

  return (
    <Background>
      <Header title="My Movements" />
    </Background>
  );
}

export default Home;

/*
<Text>Bem Vindo!</Text>
      <Text>Nome: {user.name}</Text>
      <Button title="logout" onPress={() => signOut()}*/
