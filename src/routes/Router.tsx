import React, {useContext} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

import {AuthContext} from '../contexts/Auth';

import AuthRoutes from './AuthRoutes';
import AppRoutes from './AppRoutes';

function Router() {
  const {signed, loading} = useContext(AuthContext);

  if (loading) {
    <View style={styles.loading}>
      <ActivityIndicator size="large" color="#131313" />
    </View>;
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F4FF',
  },
});

export default Router;
