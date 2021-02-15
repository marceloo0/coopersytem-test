import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Investments from '../pages/Investments';
import Rescue from '../pages/Rescue';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <App.Screen name="Investments" component={Investments} />
    <App.Screen name="Rescue" component={Rescue} />
  </App.Navigator>
);

export default AppRoutes;
