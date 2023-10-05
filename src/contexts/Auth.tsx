import React, {createContext, useState, useEffect, ReactNode} from 'react';

import {useNavigation} from '@react-navigation/native';
import api from '../services/api';

import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  signed: boolean;
  loadingAuth: boolean;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType | any>({});

function AuthProvider({children}: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    async function loadStorage() {
      const storageUser = await AsyncStorage.getItem('@finToken');

      if (storageUser) {
        try {
          const response = await api.get('/me', {
            headers: {
              Authorization: `Bearer ${storageUser}`,
            },
          });
          api.defaults.headers['Authorization'] = `Bearer ${storageUser}`;
          setUser(response.data);
          setLoading(false);
        } catch (error) {
          setUser(null);
        }
      }
      setLoading(false);
    }
    loadStorage();
  }, []);

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

      await AsyncStorage.setItem('@finToken', token);

      api.defaults.headers['Authorization'] = `Bearer ${token}`;

      setUser(userData);

      setLoadingAuth(false);
    } catch (err) {
      console.log('ERRO AO LOGAR', err);
      setLoadingAuth(false);
    }
  }

  async function signOut() {
    await AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signUp,
        signIn,
        signOut,
        loadingAuth,
        loading,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
