import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';

import {AuthContext} from '../../contexts/Auth';

function Home() {
  const {signOut, user} = useContext(AuthContext);

  return (
    <View>
      <Text>Bem Vindo!</Text>
      <Text>Nome: {user.name}</Text>
      <Button title="logout" onPress={() => signOut()} />
    </View>
  );
}

export default Home;
