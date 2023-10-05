import React, {createContext, useState, ReactNode} from 'react';

import api from '../services/api';
import {useNavigation} from '@react-navigation/native';

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  id: string;
  name: string;
  email: string;
}

export const AuthContext = createContext<any>(null);

function AuthProvider({children}: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loadingAuth, setLoadingAuth] = useState(false);

  const navigation = useNavigation();

  async function signUp(
    name: string,
    email: string,
    password: string,
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

  async function signIn(email: string, password: string): Promise<void> {
    setLoadingAuth(true);

    try {
      const response = await api.post('/login', {
        email: email,
        password: password,
      });

      const {id, name, token} = response.data;

      const userData: User = {
        id,
        name,
        email,
      };
      api.defaults.headers['Authorization'] = `Bearer ${token}`;

      setUser(userData);

      setLoadingAuth(false);
    } catch (err) {
      console.log('ERRO AO LOGAR', err);
      setLoadingAuth(false);
    }
  }

  return (
    <AuthContext.Provider
      value={{signed: !!user, user, signUp, signIn, loadingAuth}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
