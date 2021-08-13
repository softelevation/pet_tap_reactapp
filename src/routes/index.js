// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import Nfc from '../screens/Nfc'
import final from '../screens/endpage';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Nfc" component={Nfc} />
        <Stack.Screen name="endpage" component={final} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
