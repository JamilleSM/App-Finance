import React, {useContext} from 'react';
import {View, ActivityIndicator} from 'react-native';

import Auth, {AuthContext} from '../contexts/Auth';

import AuthRoutes from './AuthRoutes';
import AppRoutes from './AppRoutes';

function Router() {
  const {signed} = useContext(AuthContext);
  const loading = false;

  return signed ? <AppRoutes /> : <AuthRoutes />;
}

export default Router;
