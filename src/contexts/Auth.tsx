import React, {createContext, useState, ReactNode} from 'react';

import api from '../services/api';
import {useNavigation} from '@react-navigation/native';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<any>(null);

function AuthProvider({children}: AuthProviderProps) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);

  const navigation = useNavigation();

  async function signUp(
    name: String,
    email: String,
    password: String,
  ): Promise<void> {
    setLoadingAuth(true);
    try {
      const response = await api.post('/users', {
        name: name,
        email: email,
        password: password,
      });

      setLoadingAuth(false);

      navigation.goBack();
    } catch (err) {
      console.log('ERROR AO CADASTRAR', err);
      setLoadingAuth(false);
    }
  }

  return (
    <AuthContext.Provider value={{signed: !!user, user, signUp, loadingAuth}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
