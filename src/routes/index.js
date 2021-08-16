// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import Nfc from '../screens/Nfc';
import final from '../screens/endpage';
import landing from '../screens/Landing';
import PetTapForm from '../screens/form';
import {RouteConstants} from '../utils/constants';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={RouteConstants.HOMESCREEN} component={Home} />
        <Stack.Screen name={RouteConstants.PETTAPFORM} component={PetTapForm} />
        <Stack.Screen name="Nfc" component={Nfc} />
        <Stack.Screen name="Endpage" component={final} />
        <Stack.Screen name="Landing" component={landing} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
