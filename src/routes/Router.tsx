import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import AuthRoutes from './AuthRoutes';

function Router() {
  const loading = false;
  const signed = false;

  return signed ? <View></View> : <AuthRoutes />;
}

export default Router;
