import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import Router from './src/routes/Router';
import AuthProvider from './src/contexts/Auth';

function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#1c1c1c" barStyle="light-content" />
        <Router />
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;
