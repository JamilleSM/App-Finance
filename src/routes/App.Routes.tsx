import React from 'React';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '../pages/Home/Home';

const AppDrawer = createDrawerNavigator();

function AppRoutes() {
  return (
    <AppDrawer.Navigator>
      <AppDrawer.Screen name="Home" component={Home} />
    </AppDrawer.Navigator>
  );
}

export default AppRoutes;
